import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`https://jsonplaceholder.typecode.com/users`);
  }

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`https://jsonplaceholder.typecode.com/users/${userId.toString()}`)
  }
}
