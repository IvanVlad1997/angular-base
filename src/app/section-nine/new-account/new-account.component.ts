import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Status} from '../../common/status';
import {Account} from '../../common/account';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {
  name: string;
  status: Status;
  typesOfStatus: Status[] = [Status.Active, Status.Hidden, Status.Inactive];

  @Output() onAccountAdded: EventEmitter<Account> = new EventEmitter<Account>();

  constructor() { }

  ngOnInit(): void {
  }

  addAccount(): void {
    let newAccount: Account = {
      id: this.getRndInteger(4, 100),
      name: this.name,
      status: this.status
    };
    this.onAccountAdded.emit(newAccount);
  }

  getRndInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
}
