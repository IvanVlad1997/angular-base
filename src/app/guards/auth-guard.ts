import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Auth} from '../services/auth';
import {map, take} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  private authService: Auth;
  private router: Router;

  constructor(authService: Auth,
              router: Router) {
    this.router = router;
    this.authService = authService;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.user.pipe(
      take(1),
      map(user => {
      let isAuth = (!user) ? false : true;
      if (isAuth) {
        return true;
      }
      return this.router.createUrlTree(['/auth'])
    }) );
  }
}
