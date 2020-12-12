import {Injectable} from '@angular/core';
import {User} from '../common/user';

@Injectable()
export class UserService {
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];

  getUsers(): User[] {
    return this.users.slice();
  }

  getUser(id: number): User {
    let user = this.users.find(
      (userToFind: User) => {
        return userToFind.id = id;
      }
    );
    return user;
  }
}
