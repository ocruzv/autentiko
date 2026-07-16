interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.mp4' {
  const src: string;
  export default src;
}
