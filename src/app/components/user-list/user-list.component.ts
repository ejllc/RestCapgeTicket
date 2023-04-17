import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent {

  users: User[] = [];

  constructor(private router: Router, private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(data => {
        this.users = data;
      });
  };

  deleteUser(user: User): void {
    this.userService.deleteUser(user)
      .subscribe(data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}
