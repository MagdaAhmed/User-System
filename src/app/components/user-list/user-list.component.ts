import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../users.service'
import {User} from '../../user.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] ;
  subscription: Subscription;

  constructor(private usersService: UsersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.usersService.userChanged.subscribe(
      (users: User[])=>{
        this.users = users;
      }
    );
    this.users = this.usersService.getusers();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
