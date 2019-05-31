import{User} from'./user.model';
import { Injectable } from '@angular/core';
import {Subject} from'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userChanged = new Subject<User[]>();
  private users: User[] = [
    new User(
      'Magda',
      'Ahmed',
      'magda88@yahoo.com',
      24,
      123456778
    ),
    new User(
      'Dalia',
      'Ahmed',
      'magda88@yahoo.com',
      20,
      123456778
    ),
    new User(
      'Manal',
      'Ahmed',
      'magda88@yahoo.com',
      40,
      187665438
    )    
  ];
  constructor() { }
  getusers() {
    return this.users.slice(); // to get a copy of the array outsde service
  }
  getuser(index: number){
    return this.users.slice()[index];
  }
  addUser(user:User){
    this.users.push(user);
    this.userChanged.next(this.users.slice());
  }
  updateUser(index:number , newUser :User){
    this.users[index] = newUser;
    this.userChanged.next(this.users.slice());
  }
  deleteUser(index:number){
    this.users.splice(index,1);
    this.userChanged.next(this.users.slice());
  }
  setUsers(users:User[]){
    this.users = users;
    this.userChanged.next(this.users.slice());
  }
}
