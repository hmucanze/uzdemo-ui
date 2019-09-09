import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAccessTokenInvalido()) {
      console.log('Navegação com Access Token invalido, obtendo novo accessToken');

      return this.authService.obtendoNovoAccessToken()
      .then(() => {
        if (this.authService.isAccessTokenInvalido()) {
          this.router.navigate(['/login']);
          return false;
        }

        return true;
      });
    } else if (next.data.roles && !this.authService.temQualquerPermissao(next.data.roles)) {
      this.router.navigate(['pagina-nao-autorizada']);
      return false;
    }
    return true;
  }
}
