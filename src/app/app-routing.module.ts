import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { FormUserComponent } from './components/form-user/form-user.component';

const routes: Routes = [
  {path: ':id', component: UserDetailsComponent},
  {path: 'new', component: FormUserComponent},
  {path: ':id/edit', component:UserEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
