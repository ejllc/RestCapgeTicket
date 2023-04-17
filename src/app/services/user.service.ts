import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  private userUrl = 'http://localhost:7778/api/v1/users';

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  public deleteUser(user: User) {
    return this.http.delete(this.userUrl + "/" + user.id);
  }

  public createUser(user: User) {
    return this.http.post<User>(this.userUrl, user);
  }

  public updateUser(id: any, data: User): Observable<any> {
    return this.http.put(`${this.userUrl}/${id}`, data);
  }

}
