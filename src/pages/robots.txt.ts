import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site?.toString().replace(/\/$/, '') ?? 'https://autentiko.com.mx';

  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /gracias',
    'Disallow: /pago-cancelado',
    `Sitemap: ${baseUrl}/sitemap-index.xml`,
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
