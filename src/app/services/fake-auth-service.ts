import {Injectable} from '@angular/core';

@Injectable()
export class FakeAuthService {
  loggedIn = false;

  login(): void {
    this.loggedIn = true;
  }

  logout(): void {
    this.loggedIn = false;
  }

  isAuth(): Promise<any> {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 1000);
      }
    );
    return promise;
  }
}
