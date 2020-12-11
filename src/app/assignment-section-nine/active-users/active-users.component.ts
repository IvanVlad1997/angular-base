import {Component, Input, OnInit} from '@angular/core';
import {ChangeUserStatus} from '../../services/change-user-status';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {
  private changeUserStatus: ChangeUserStatus;

  constructor(changeUserStatus: ChangeUserStatus) {
    this.changeUserStatus = changeUserStatus;
  }

  activeUsers: string[];

  ngOnInit(): void {
    this.activeUsers = this.changeUserStatus.activeUsers;
  }

  setToInactive(id: number): void {
    this.changeUserStatus.onSetToInactive(id);
  }
}
