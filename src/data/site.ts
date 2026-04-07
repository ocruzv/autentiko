export type MenuItem = {
  name: string;
  price: string;
  description?: string;
};

export type MenuSection = {
  id: string;
  eyebrow: string;
  title: string;
  note: string;
  items: MenuItem[];
};

export type WeightOption = {
  value: '500g' | '1kg';
  label: string;
  price: number;
  detail: string;
};

export type GrindOption = {
  value: 'grano' | 'molido';
  label: string;
  detail: string;
};

export type FulfillmentOption = {
  value: 'envio' | 'pickup';
  label: string;
  detail: string;
  fee: number;
};

type SiteConfig = {
  brand: string;
  shortBrand: string;
  tagline: string;
  description: string;
  address: string;
  mapsUrl: string;
  mapsEmbedUrl: string;
  instagramUrl: string;
  whatsappUrl: string;
  whatsappDisplay: string;
  hours: { label: string; value: string }[];
  shippingFee: number;
  menuSections: MenuSection[];
  coffeeProduct: {
    name: string;
    subtitle: string;
    description: string;
    benefits: string[];
    weightOptions: WeightOption[];
    grindOptions: GrindOption[];
    fulfillmentOptions: FulfillmentOption[];
  };
};

export const currencyFormatter = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
  maximumFractionDigits: 0,
});

const menuSections: MenuSection[] = [
  {
    id: 'calientes',
    eyebrow: 'Barra',
    title: 'Bebidas calientes',
    note: 'Recetas diarias con espresso y sabores de casa.',
    items: [
      { name: 'Espresso', price: '$25' },
      { name: 'Doble espresso', price: '$30' },
      { name: 'Long black', price: '$25' },
      { name: 'Americano', price: '$35' },
      { name: 'Cappuccino', price: '$39' },
      { name: 'Flat white', price: '$39' },
      { name: 'Latte natural', price: '$55' },
      { name: 'Latte caramelo', price: '$59' },
      { name: 'Latte vainilla', price: '$59' },
      { name: 'Latte mazapán', price: '$59' },
      { name: 'Latte cajeta', price: '$59' },
      { name: 'Latte avellana', price: '$59' },
      { name: 'Latte chai', price: '$59' },
      { name: 'Moka', price: '$59' },
      { name: 'Chocolate', price: '$59' },
      { name: 'Tisana', price: '$50' },
      { name: 'Matcha', price: '$50' },
      { name: 'Dirty chai', price: '$59' },
    ],
  },
  {
    id: 'frias',
    eyebrow: 'Barra',
    title: 'Bebidas frías',
    note: 'Versiones heladas y limpias para calor tapatío.',
    items: [
      { name: 'Ice latte natural', price: '$75' },
      { name: 'Ice latte caramelo', price: '$75' },
      { name: 'Ice latte vainilla', price: '$75' },
      { name: 'Ice latte avellana', price: '$75' },
      { name: 'Ice latte cajeta', price: '$75' },
      { name: 'Ice latte mazapán', price: '$75' },
      { name: 'Ice latte chai', price: '$75' },
      { name: 'Cold brew tonic', price: '$75' },
    ],
  },
  {
    id: 'frappes',
    eyebrow: 'Barra',
    title: 'Frappés',
    note: 'Cremosos, intensos y listos para el antojo.',
    items: [
      { name: 'Frappé natural', price: '$79' },
      { name: 'Frappé caramelo', price: '$79' },
      { name: 'Frappé vainilla', price: '$79' },
      { name: 'Frappé avellana', price: '$79' },
      { name: 'Frappé cajeta', price: '$79' },
      { name: 'Frappé mazapán', price: '$79' },
      { name: 'Frappé moka', price: '$79' },
      { name: 'Frappé tisana', price: '$79' },
      { name: 'Frappé taro', price: '$85' },
      { name: 'Frappé oreo', price: '$79' },
      { name: 'Frappé matcha', price: '$85' },
    ],
  },
  {
    id: 'baguettes',
    eyebrow: 'Cocina',
    title: 'Baguettes',
    note: 'Pan de masa madre natural, chipotle de la casa y combinaciones firmes.',
    items: [
      {
        name: 'Auténtiko',
        price: '$120',
        description:
          'Jamón de pavo, lomo canadiense, selva negra, salami, queso gouda, lechuga y tomate cherry.',
      },
      {
        name: 'Americano',
        price: '$99',
        description: 'Jamón de pavo, queso gouda, lechuga, tomate cherry y chipotle de la casa.',
      },
      {
        name: 'Canadá',
        price: '$99',
        description: 'Lomo canadiense, queso gouda, lechuga, tomate cherry y chipotle de la casa.',
      },
      {
        name: 'Alemán',
        price: '$99',
        description: 'Selva negra, queso gouda, lechuga, tomate cherry y chipotle de la casa.',
      },
      {
        name: 'Español',
        price: '$125',
        description: 'Jamón serrano, queso gouda, lechuga, tomate cherry y chipotle de la casa.',
      },
      {
        name: 'Italiano',
        price: '$99',
        description: 'Salami, queso gouda, lechuga, tomate cherry y chipotle de la casa.',
      },
    ],
  },
  {
    id: 'desayunos',
    eyebrow: 'Cocina',
    title: 'Desayuno',
    note: 'Hecho al momento para llegar temprano y quedarse a gusto.',
    items: [
      {
        name: 'Huevos auténtikos',
        price: '$135',
        description: 'Omelet acompañado con ensalada o papas gajo.',
      },
    ],
  },
];

const weightOptions: WeightOption[] = [
  {
    value: '500g',
    label: '500 g',
    price: 300,
    detail: 'Perfecto para probarlo o mantenerlo fresco.',
  },
  {
    value: '1kg',
    label: '1 kg',
    price: 450,
    detail: 'La mejor relación precio por taza.',
  },
];

const grindOptions: GrindOption[] = [
  {
    value: 'grano',
    label: 'En grano',
    detail: 'Para quienes ajustan molienda en casa.',
  },
  {
    value: 'molido',
    label: 'Molido',
    detail: 'Listo para preparar apenas llegue.',
  },
];

const fulfillmentOptions: FulfillmentOption[] = [
  {
    value: 'envio',
    label: 'Envío a todo México',
    detail: 'Tarifa fija para cualquier destino nacional.',
    fee: 150,
  },
  {
    value: 'pickup',
    label: 'Recoger en tienda',
    detail: 'Pasa por tu café en Plaza Gavilanes sin costo extra.',
    fee: 0,
  },
];

export const siteConfig: SiteConfig = {
  brand: 'Auténtiko Café',
  shortBrand: 'Auténtiko',
  tagline: 'Café de Chiapas tostado con oficio, servido con calma y carácter.',
  description:
    'Auténtiko Café es una cafetería en Los Gavilanes, al sur de Guadalajara, con barra diaria, cocina ligera, café de Chiapas tostado por maestro tostador y envíos a todo México.',
  address: 'Plaza Gavilanes, Local 14, Los Gavilanes, 45645 Tlajomulco, Jal.',
  mapsUrl: 'https://maps.app.goo.gl/b7r8fS9QDR7jtida8',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Plaza%20Gavilanes%2C%20Local%2014%2C%20Los%20Gavilanes%2C%2045645%20Tlajomulco%2C%20Jal.&output=embed',
  instagramUrl: 'https://www.instagram.com/somosautentikocafe/',
  whatsappUrl: 'https://wa.me/523317282719',
  whatsappDisplay: '+52 33 1728 2719',
  hours: [
    { label: 'Lunes a viernes', value: '7:00 AM - 7:00 PM' },
    { label: 'Sábado', value: '8:00 AM - 2:00 PM' },
    { label: 'Domingo', value: '9:00 AM - 1:00 PM' },
  ],
  shippingFee: 150,
  menuSections,
  coffeeProduct: {
    name: 'Café de Chiapas',
    subtitle: 'Tostado por maestro tostador para servir en casa con el sello de Auténtiko.',
    description:
      'Grano chiapaneco con un tueste equilibrado para espresso, moka, prensa o filtro. Puedes pedirlo en grano o molido y recibirlo en casa o pasar por él a la tienda.',
    benefits: [
      'Origen chiapaneco seleccionado para una taza limpia y amable.',
      'Tueste fresco con perfil equilibrado para disfrutarlo todos los días.',
      'Disponible en grano o molido, en formatos pensados para casa.',
      'Envío a todo México o recogida en tienda, como mejor te acomode.',
    ],
    weightOptions,
    grindOptions,
    fulfillmentOptions,
  },
};
