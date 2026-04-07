import type { APIRoute } from 'astro';
import Stripe from 'stripe';
import { siteConfig } from '../../data/site';

const weightPriceMap = new Map(
  siteConfig.coffeeProduct.weightOptions.map((option) => [option.value, option]),
);

const grindMap = new Map(siteConfig.coffeeProduct.grindOptions.map((option) => [option.value, option]));
const fulfillmentMap = new Map(
  siteConfig.coffeeProduct.fulfillmentOptions.map((option) => [option.value, option]),
);

export const POST: APIRoute = async ({ request }) => {
  const stripeKey = import.meta.env.STRIPE_SECRET_KEY;

  if (!stripeKey) {
    return new Response('Servicio no disponible temporalmente.', {
      status: 500,
    });
  }

  const formData = await request.formData();
  const weight = String(formData.get('weight') ?? '');
  const grind = String(formData.get('grind') ?? '');
  const fulfillment = String(formData.get('fulfillment') ?? '');

  const selectedWeight = weightPriceMap.get(weight as '500g' | '1kg');
  const selectedGrind = grindMap.get(grind as 'grano' | 'molido');
  const selectedFulfillment = fulfillmentMap.get(fulfillment as 'envio' | 'pickup');

  if (!selectedWeight || !selectedGrind || !selectedFulfillment) {
    return new Response('La configuración seleccionada no es válida.', { status: 400 });
  }

  const stripe = new Stripe(stripeKey);
  const origin = new URL(request.url).origin;
  const siteUrl = import.meta.env.PUBLIC_SITE_URL || origin;

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    locale: 'es',
    billing_address_collection: 'auto',
    customer_creation: 'always',
    phone_number_collection: {
      enabled: true,
    },
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: 'mxn',
          unit_amount: selectedWeight.price * 100,
          product_data: {
            name: `${siteConfig.coffeeProduct.name} ${selectedWeight.label}`,
            description: `${selectedGrind.label} · ${selectedFulfillment.label}`,
          },
        },
      },
    ],
    metadata: {
      brand: siteConfig.brand,
      weight: selectedWeight.label,
      grind: selectedGrind.label,
      fulfillment: selectedFulfillment.label,
    },
    success_url: `${siteUrl}/gracias?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/pago-cancelado`,
    shipping_address_collection:
      selectedFulfillment.value === 'envio'
        ? {
            allowed_countries: ['MX'],
          }
        : undefined,
    shipping_options:
      selectedFulfillment.value === 'envio'
        ? [
            {
              shipping_rate_data: {
                type: 'fixed_amount',
                display_name: 'Envío nacional',
                fixed_amount: {
                  amount: selectedFulfillment.fee * 100,
                  currency: 'mxn',
                },
                delivery_estimate: {
                  minimum: {
                    unit: 'business_day',
                    value: 2,
                  },
                  maximum: {
                    unit: 'business_day',
                    value: 5,
                  },
                },
              },
            },
          ]
        : undefined,
  });

  if (!session.url) {
    return new Response('No se pudo iniciar el checkout.', { status: 500 });
  }

  return Response.redirect(session.url, 303);
};
