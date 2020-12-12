import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../common/user';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  private route: ActivatedRoute;
  private userService: UserService;

  constructor(route: ActivatedRoute, userService: UserService) {
    this.userService = userService;
    this.route = route;
  }

  user: User;

  ngOnInit(): void {
    this.user = this.userService.getUser(this.route.snapshot.params.id);
  }

}
