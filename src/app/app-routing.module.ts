import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventAddComponent } from './components/event-add/event-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'events',
    component: EventListComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'addUser',
    component: UserAddComponent
  },
  {
    path: 'addEvent',
    component: EventAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
