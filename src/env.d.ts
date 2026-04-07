interface ImportMetaEnv {
  readonly STRIPE_SECRET_KEY?: string;
  readonly PUBLIC_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
