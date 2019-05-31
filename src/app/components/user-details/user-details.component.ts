import { Component, OnInit } from '@angular/core';
import {User} from '../../user.model';
import {UsersService} from '../../users.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user:User;
  id:number;
  constructor(private usersService: UsersService, private route: ActivatedRoute,  private router: Router) { }
  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id = +params['id'];
      this.user=this.usersService.getuser(this.id);
    });
  }
  onEditUser() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onDeleteUser(){
    this.usersService.deleteUser(this.id);
    this.router.navigate(['']);
  }
}
