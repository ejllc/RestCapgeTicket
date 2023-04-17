import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserAddComponent } from './components/user-add/user-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'add',
    component: UserAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
