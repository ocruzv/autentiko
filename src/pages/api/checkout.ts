import type { APIRoute } from 'astro';

export const POST: APIRoute = async () => {
  return new Response('La venta en línea ya no está disponible. Visítanos en Plaza Gavilanes.', {
    status: 410,
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
};
