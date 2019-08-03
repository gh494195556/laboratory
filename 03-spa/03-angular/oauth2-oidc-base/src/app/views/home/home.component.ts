import { Component, OnInit } from '@angular/core';

import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  constructor(private oauthService: OAuthService) {}

  ngOnInit() {
    if (this.oauthService.getIdentityClaims() === null) {
      alert('测试用户名：max，密码：geheim');
    }
  }

  public login() {
    this.oauthService.initLoginFlow();
  }

  public logoff() {
    this.oauthService.logOut();
  }

  public get name() {
    const claims = this.oauthService.getIdentityClaims();

    if (!claims) {
      return null;
    }
    // tslint:disable-next-line: no-string-literal
    return claims['given_name'];
  }
}
