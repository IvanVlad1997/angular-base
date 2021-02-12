import {Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {Subject, Subscription} from 'rxjs';
import {Auth} from './services/auth';
import {TypeGuards} from './frontend-utils/TypeGuards';

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
  component: object;

  get header(): TemplateRef<any> {
    if (this.component && TypeGuards.isHeaderAwareComponent(this.component)) {
      return this.component.header;
    }
    return undefined;
  }

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

  public componentChangeed(component: object): void {
    this.component = component;
  }

  public clearComponent(): void {
    delete this.component;
  }
}
