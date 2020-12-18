import {UserModel} from '../common/user.model';

export class User implements UserModel {
  email: string;
  id: string;
  readonly _token: string;
  readonly _tokenExpirationDate: Date;

  constructor(email: string, id: string, _token: string, _tokenExpirationDate: Date) {
    this._tokenExpirationDate = _tokenExpirationDate;
    this._token = _token;
    this.email = email;
    this.id = id;
  }

  get token(): string {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }

}
