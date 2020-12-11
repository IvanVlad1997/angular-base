import {Component, Input, OnInit} from '@angular/core';
import {Account} from '../../common/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor() { }

  @Input() account: Account;

  ngOnInit(): void {
  }

  onSetTo(newStatus: string): void {
    this.account.status = newStatus;
  }
}
