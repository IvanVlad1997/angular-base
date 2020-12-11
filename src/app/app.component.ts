import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  private onDestroy$: Subject<void> = new Subject();
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }
  title = 'udemy-angular-course';

  isOpened: boolean = false;


  ngOnInit(): void {
    this.router.events.pipe(takeUntil(this.onDestroy$)).subscribe(value => {
      if (value instanceof NavigationStart) {
        this.isOpened = false;
      }
    });
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
  }

}
