import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  email: string;
  password: string;
  isLoginMode = true;

  constructor() { }

  ngOnInit(): void {
  }

  submitAuth(): void {
    console.log(this.email, this.password)
  }

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }
}
