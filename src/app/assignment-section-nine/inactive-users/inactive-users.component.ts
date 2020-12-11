import { Component, OnInit } from '@angular/core';
import {ChangeUserStatus} from '../../services/change-user-status';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent implements OnInit {
  private changeUsersStatus: ChangeUserStatus;

  constructor(changeUsersStatus: ChangeUserStatus) {
    this.changeUsersStatus = changeUsersStatus;
  }

  inactiveUsers: string[];

  ngOnInit(): void {
    this.inactiveUsers = this.changeUsersStatus.inactiveUsers;
  }

  setToActive(id: number): void {
    this.changeUsersStatus.onSetToActive(id);
  }
}
