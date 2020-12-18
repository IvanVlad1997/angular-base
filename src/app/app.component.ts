import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {Subject, Subscription} from 'rxjs';
import {Auth} from './services/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  private userSub: Subscription;
  private onDestroy$: Subject<void> = new Subject();
  private router: Router;

  constructor(router: Router, authService: Auth) {
    this.authService = authService;
    this.router = router;
  }
  title = 'udemy-angular-course';
   authService: Auth;

  isAuthenticated = false;
  isOpened: boolean = false;


  ngOnInit(): void {
    this.authService.autoLogin();

    this.authService.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
    })
    this.router.events.pipe(takeUntil(this.onDestroy$)).subscribe(value => {
      if (value instanceof NavigationStart) {
        this.isOpened = false;
      }
    });
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.userSub.unsubscribe();
  }

}
