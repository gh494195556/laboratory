import { Component } from '@angular/core';

import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private oauthService: OAuthService) {
    this.configure();
  }
  private configure() {
    this.oauthService.configure({
      // identity server
      issuer: 'https://steyer-identity-server.azurewebsites.net/identity',
      // callback page.
      redirectUri: `${window.location.origin}/index.html`,
      // identity server 中配置的 client id
      clientId: 'spa-demo',
      // scope
      scope: 'openid profile email voucher'
    });
    this.oauthService.setStorage(sessionStorage);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndLogin();
  }
}
