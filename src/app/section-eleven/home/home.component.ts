import { Component, OnInit } from '@angular/core';
import {FakeAuthService} from '../../services/fake-auth-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private fakeAuthService: FakeAuthService;

  constructor(fakeAuthService: FakeAuthService) {
    this.fakeAuthService = fakeAuthService;
  }

  ngOnInit(): void {
  }

  logIn(): void {
    this.fakeAuthService.login();
  }

  logOut(): void {
    this.fakeAuthService.logout();
  }

}
