import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private oauthTokenURL: string;
  private tokenRevokeURL: string;
  public jwtPayload: any;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) {
    this.oauthTokenURL = `${environment.apiURL}/oauth/token`;
    this.tokenRevokeURL = `${environment.apiURL}/tokens/revoke`;

    this.carregarToken();
   }

  login(email: string, senha: string): Promise<void> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');
    const body = `username=${email}&password=${senha}&grant_type=password`;

    return this.http.post(this.oauthTokenURL, body, { headers, withCredentials: true })
    .toPromise()
    .then(response => {
      this.armazenarToken(response['access_token']);
    })
    .catch(response => {
      const responseError = response.error;
      if (response.status === 400) {
        if (responseError.error === 'invalid_grant') {
          return Promise.reject('Usuário ou senha inválido');
        }
      }
      return Promise.reject(response);
    });
  }

  obtendoNovoAccessToken(): Promise<void> {
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/x-www-form-urlencoded')
    .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');

    const body = 'grant_type=refresh_token';
    return this.http.post(this.oauthTokenURL, body, { headers, withCredentials: true })
    .toPromise()
    .then(response => {
      console.log('token renovado com sucesso!');
      this.armazenarToken(response['access_token']);
      Promise.resolve(null);
    })
    .catch(response => {
      console.error('erro ao renovar token', response);
      Promise.resolve(null);
    });
  }

  logout(): Promise<void> {
    return this.http.delete(this.tokenRevokeURL, { withCredentials: true })
    .toPromise()
    .then(() => {
      this.limparAccessToken();
    });
  }

  isAccessTokenInvalido() {
    const token = localStorage.getItem('token');

    return !token || this.jwtHelper.isTokenExpired(token);
  }

  temPermissao(permissao: string) {
    if (this.jwtPayload && this.jwtPayload.authorities !== undefined) {
      if (this.jwtPayload.authorities.includes(permissao)) {
        return true;
      }
    } else {
      return false;
    }
  }

  temQualquerPermissao(roles) {
    for (const role of roles) {
      if (this.temPermissao(role)) {
        return true;
      }
    }
    return false;
  }

  private limparAccessToken() {
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }

  private armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private carregarToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.armazenarToken(token);
    }
  }
}
