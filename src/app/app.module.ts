import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { UserAddComponent } from './components/user-add/user-add.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventService } from './services/event.service';
import { EventAddComponent } from './components/event-add/event-add.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserAddComponent,
    EventListComponent,
    EventAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
