import { WebStorageStateStore } from 'oidc-client';
export const authConfig = {
  authority: 'http://192.168.1.67:10000',
  clientId: 'vueoidc',
  redirectUri: `${window.location.origin}/oidc-callback`,
  responseType: 'id_token token',
  scope: 'openid profile',
  userStore: new WebStorageStateStore({ store: window.sessionStorage })
};
