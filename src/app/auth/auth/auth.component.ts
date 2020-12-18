import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Auth} from '../../services/auth';
import {Observable} from 'rxjs';
import {AuthResponseData} from '../../common/auth-response-data';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  email: string;
  private authService: Auth;
  password: string;
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  private router: Router;
  error: string = null;

  constructor(authService: Auth,
              router: Router) {
    this.router = router;
    this.authService = authService; }

  ngOnInit(): void {
  }

  submitAuth(form: NgForm): void {
    if (!form.valid){
      console.log(this.email, this.password);
    }

    let authObs: Observable<AuthResponseData>;
    this.isLoading = true;
    if (this.isLoginMode) {
     authObs =  this.authService.login(this.email, this.password);
    }  else {
     authObs = this.authService.signup(this.email, this.password);
    }
    authObs.subscribe(resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate([''])
      },
      errorMessage => {
        this.error = errorMessage;
        console.log(errorMessage);
        this.isLoading = false;
      });
    form.reset();
  }

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }
}
