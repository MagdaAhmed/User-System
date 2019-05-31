import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../users.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private usersService: UsersService, private router: Router) { }

  ngOnInit() {
  }
  onNewCustomer() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
