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
  menuSections: MenuSection[];
};

const menuSections: MenuSection[] = [
  {
    id: 'calientes',
    eyebrow: 'La barra',
    title: 'Bebidas calientes',
    note: 'Espresso, leche y recetas de la casa.',
    items: [
      { name: 'Espresso', price: '$25' },
      { name: 'Doble espresso', price: '$30' },
      { name: 'Long black', price: '$39' },
      { name: 'Americano', price: '$45' },
      { name: 'Cappuccino', price: '$55' },
      { name: 'Flat white', price: '$45' },
      { name: 'Latte natural', price: '$55' },
      { name: 'Latte caramelo', price: '$59' },
      { name: 'Latte vainilla', price: '$59' },
      { name: 'Latte mazapán', price: '$59' },
      { name: 'Latte cajeta', price: '$59' },
      { name: 'Latte avellana', price: '$59' },
      { name: 'Latte chai', price: '$59' },
      { name: 'Moka', price: '$59' },
      { name: 'Chocolate', price: '$59' },
      { name: 'Tisana', price: '$69' },
      { name: 'Matcha', price: '$69' },
      { name: 'Dirty chai', price: '$79' },
    ],
  },
  {
    id: 'frias',
    eyebrow: 'La barra',
    title: 'Bebidas frías',
    note: 'Mucho hielo, café y tardes más llevaderas.',
    items: [
      { name: 'Ice latte natural', price: '$75' },
      { name: 'Ice latte caramelo', price: '$75' },
      { name: 'Ice latte vainilla', price: '$75' },
      { name: 'Ice latte avellana', price: '$75' },
      { name: 'Ice latte cajeta', price: '$75' },
      { name: 'Ice latte mazapán', price: '$75' },
      { name: 'Ice latte chai', price: '$75' },
      { name: 'Ice latte matcha', price: '$75' },
      { name: 'Ice latte taro', price: '$75' },
      { name: 'Ice latte moka', price: '$75' },
      { name: 'Ice latte tisana', price: '$75' },
      { name: 'Cold brew Tonicol', price: '$75' },
      { name: 'Cold brew agua mineral', price: '$75' },
    ],
  },
  {
    id: 'frappes',
    eyebrow: 'La barra',
    title: 'Frappés',
    note: 'Cremosos, fríos y sin medias tintas.',
    items: [
      { name: 'Natural', price: '$79' },
      { name: 'Caramelo', price: '$79' },
      { name: 'Vainilla', price: '$79' },
      { name: 'Avellana', price: '$79' },
      { name: 'Cajeta', price: '$79' },
      { name: 'Mazapán', price: '$79' },
      { name: 'Moka', price: '$79' },
      { name: 'Tisana', price: '$79' },
      { name: 'Taro', price: '$85' },
      { name: 'Oreo', price: '$79' },
      { name: 'Matcha', price: '$85' },
      { name: 'Chai', price: '$85' },
    ],
  },
  {
    id: 'bebidas',
    eyebrow: 'Algo más',
    title: 'Bebidas',
    note: 'Refrescos, agua y jugos.',
    items: [
      { name: 'Seven Up, Coca Light, Coca Regular o Tonicol', price: '$35' },
      { name: 'Topo Chico', price: '$35' },
      { name: 'Jaztea', price: '$35' },
      { name: 'Boing de lata o botella', price: '$35' },
      { name: 'Botella de agua', price: '$25' },
      { name: 'Jugo de naranja, verde o zanahoria', price: '$40' },
    ],
  },
  {
    id: 'cafe',
    eyebrow: 'Para llevar',
    title: 'Café en grano y molido',
    note: 'Café de Chiapas. Se compra directamente en la barra.',
    items: [
      { name: '250 g', price: '$110' },
      { name: '500 g', price: '$220' },
      { name: '1 kg', price: '$400' },
    ],
  },
  {
    id: 'baguettes',
    eyebrow: 'La cocina',
    title: 'Baguettes',
    note: 'Pan de masa madre natural. Incluyen papas gajo o ensalada.',
    items: [
      {
        name: 'Auténtiko',
        price: '$139',
        description: 'Jamón de pavo, lomo canadiense, selva negra, salami, gouda, lechuga, tomate cherry y chipotle de la casa.',
      },
      {
        name: 'Americano',
        price: '$119',
        description: 'Jamón de pavo, gouda, lechuga, tomate cherry y chipotle de la casa.',
      },
      {
        name: 'Canadá',
        price: '$119',
        description: 'Lomo canadiense, gouda, lechuga, tomate cherry y chipotle de la casa.',
      },
      {
        name: 'Alemán',
        price: '$119',
        description: 'Selva negra, gouda, lechuga, tomate cherry y chipotle de la casa.',
      },
      {
        name: 'Español',
        price: '$139',
        description: 'Jamón serrano, gouda, lechuga, tomate cherry y chipotle de la casa.',
      },
      {
        name: 'Italiano',
        price: '$119',
        description: 'Salami, gouda, lechuga, tomate cherry y chipotle de la casa.',
      },
    ],
  },
  {
    id: 'molletes',
    eyebrow: 'Desayuno',
    title: 'Molletes',
    note: 'Para empezar con algo conocido, pero bien hecho.',
    items: [
      { name: 'Salados', price: '$89', description: 'Frijoles y queso gratinado.' },
      { name: 'Dulces', price: '$89', description: 'Mantequilla y azúcar, dulce de leche o miel de abeja.' },
      { name: 'Mixtos', price: '$89', description: 'Uno salado y uno dulce a escoger.' },
    ],
  },
  {
    id: 'hot-cakes',
    eyebrow: 'Desayuno',
    title: 'Hot cakes',
    note: 'A escoger con dulce de leche, maple, miel o chocolate.',
    items: [
      { name: 'Naturales', price: '$99' },
      { name: 'Mostachón', price: '$109', description: 'Crema de la casa y frutos rojos.' },
    ],
  },
  {
    id: 'huevos',
    eyebrow: 'Desayuno',
    title: 'Huevos',
    note: 'Estrellados o revueltos. Incluyen papas gajo, frijoles o ensalada.',
    items: [
      { name: 'Jamón, chorizo o tocino', price: '$129' },
      { name: 'Extra huevo', price: '$20' },
      { name: 'Extra chilaquiles', price: '$25' },
    ],
  },
  {
    id: 'omelett',
    eyebrow: 'Desayuno',
    title: 'Omelett',
    note: 'Incluye papas gajo, frijoles o ensalada.',
    items: [
      { name: 'Jamón y queso', price: '$139' },
      { name: 'Champiñones', price: '$139' },
      { name: 'Espinaca y queso', price: '$139' },
      { name: 'Chicharrón', price: '$139' },
      { name: 'Salseado', price: '$139' },
    ],
  },
  {
    id: 'toast',
    eyebrow: 'Desayuno',
    title: 'Toast',
    note: 'Incluyen papas gajo o ensalada.',
    items: [
      { name: 'Auténtiko', price: '$139', description: 'Jamón y queso.' },
      { name: 'Avocado', price: '$139', description: 'Cama de aguacate con un huevo revuelto.' },
      { name: 'Serrano', price: '$139', description: 'Queso de cabra, jamón serrano, arúgula, miel y nuez.' },
      { name: 'Salmón', price: '$149', description: 'Philadelphia, queso de cabra y arúgula.' },
    ],
  },
  {
    id: 'rancho',
    eyebrow: 'De la casa',
    title: 'Rancho',
    note: 'Desayunos con carácter y salsa roja.',
    items: [
      { name: 'Chicharrón prensado', price: '$170', description: 'Con chilaquiles y frijoles.' },
      { name: 'Chilaquiles rojos', price: '$129', description: 'Crujientes, con crema, queso, cebolla y frijoles.' },
      { name: 'Extra pollo, chicharrón o dos huevos', price: '$40' },
    ],
  },
];

export const siteConfig: SiteConfig = {
  brand: 'Auténtiko Café',
  shortBrand: 'Auténtiko',
  tagline: 'Café, desayuno y sobremesa al sur de Guadalajara.',
  description: 'Auténtiko Café es una cafetería en Los Gavilanes, al sur de Guadalajara, con barra de café, desayunos generosos y atención cercana.',
  address: 'Plaza Gavilanes, Local 16, Los Gavilanes, 45645 Tlajomulco, Jal.',
  mapsUrl: 'https://maps.app.goo.gl/b7r8fS9QDR7jtida8',
  mapsEmbedUrl: 'https://www.google.com/maps?q=Plaza%20Gavilanes%2C%20Local%2014%2C%20Los%20Gavilanes%2C%2045645%20Tlajomulco%2C%20Jal.&output=embed',
  instagramUrl: 'https://www.instagram.com/somosautentikocafe/',
  whatsappUrl: 'https://wa.me/523317282719',
  whatsappDisplay: '+52 33 1728 2719',
  hours: [
    { label: 'Lunes a viernes', value: '7:00 AM - 7:00 PM' },
    { label: 'Sábado', value: '8:00 AM - 2:00 PM' },
    { label: 'Domingo', value: '9:00 AM - 1:00 PM' },
  ],
  menuSections,
};
