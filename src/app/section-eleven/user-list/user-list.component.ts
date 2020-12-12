import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../common/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  private userService: UserService;
  private router: Router;

  constructor(userService: UserService,
              router: Router) {
    this.router = router;
    this.userService = userService;
  }

  users: User[];

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  changeRoute(user: User): void {
    this.router.navigate([`/section-eleven/users-list/${user.id}`]);
  }}
