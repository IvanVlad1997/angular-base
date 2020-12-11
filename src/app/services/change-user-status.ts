import {Injectable} from '@angular/core';
import {Counter} from './counter';

@Injectable()
export class ChangeUserStatus {

  constructor(counter: Counter) {
    this.counter = counter;
  }
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  private counter: Counter;

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counter.incrementActiveToInactive();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id,1);
    this.counter.incrementInactiveToActive();
  }
}
