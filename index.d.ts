// fix cannot find module @env error
declare module '@env' {
  export const EOS_SERVER_URL: string;
  export const EOS_PRIVATE_KEY: string;
}

declare module 'text-encoding-polyfill';
declare module 'eosjs-ecc-rn';
