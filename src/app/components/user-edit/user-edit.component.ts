import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../users.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
id:number;
editmode=false;
userForm:FormGroup;
  constructor(private route: ActivatedRoute, private usersService: UsersService, private router: Router) { }
  ngOnInit() {
    this.route.params.subscribe((params:Params) =>{
      this.id = +params['id'];
      this.editmode = params['id'] !=null;
      console.log(this.editmode);
      this.initForm();
    });
  }
  private initForm(){
      let userFname ='';
      let userLName ='';
      let userEmail ='';
      let userAge;
      let userPhoneNumber;
      if(this.editmode){
        const user = this.usersService.getuser(this.id);
        userFname = user.FristName;
        userLName = user.LastName;
        userEmail = user.Email;
        userAge = user.Age;
        userPhoneNumber = user.PhoneNumber;
      }
      this.userForm =new FormGroup({
        'fname':new FormControl(userFname , Validators.required),
        'lname':new FormControl(userLName , Validators.required),
        'email':new FormControl(userEmail , Validators.required),
        'age':new FormControl(userAge , Validators.required),
        'phoneNumber':new FormControl(userPhoneNumber , Validators.required)
      });
  }
  onSubmit(){
    console.log(this.userForm.value);
    if(this.editmode){
      this.usersService.updateUser(this.id , this.userForm.value);
    }else{
      this.usersService.addUser(this.userForm.value);
    }
    this.onCancel();
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route});
  }

}
