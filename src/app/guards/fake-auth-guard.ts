import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {FakeAuthService} from '../services/fake-auth-service';

@Injectable()
export class FakeAuthGuard implements CanActivate{
  private authService: FakeAuthService;
  private router: Router;

  constructor(authService: FakeAuthService,
              router: Router) {
    this.router = router;
    this.authService = authService;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   return this.authService.isAuth()
     .then((authenticate: boolean) => {
       if (authenticate) {
         return true;
       } else {
         this.router.navigate(['/']);
         return false;
       }
     });
  }
}

