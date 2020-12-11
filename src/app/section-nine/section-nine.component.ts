import { Component } from '@angular/core';
import { Account } from '../common/account';

@Component({
  selector: 'app-section-nine',
  templateUrl: './section-nine.component.html',
  styleUrls: ['./section-nine.component.scss']
})
export class SectionNineComponent {

  accounts: Account[] = [
    {
      id: 1,
      name: 'Master Account',
      status: 'active'
    },
    {
      id: 2,
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      id: 3,
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  onStatusChanged(updateInfo: Account): void {
    this.accounts[updateInfo.id].status = updateInfo.status;
  }

  addAccount(newAccount: Account): void {
    this.accounts.push(newAccount);
  }
}
