import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../interface/user';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    let myHeaders = new HttpHeaders({ 'myheader': ['headervalue01', 'headervalue02'] });
    myHeaders = myHeaders.set('id', '1234')
    myHeaders = myHeaders.append('id', '0000')
    return this.http.get<User[]>(`${this.apiUrl}/users`, {
      headers: myHeaders
    });
  }

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${userId.toString()}`)
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user)
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`, user)
  }

  patchUser(user: User): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/users/${user.id}`, user)
  }

  deleteUser(userId: number): Observable<User> {
    return this.http.delete<User>(`${this.apiUrl}/users/${userId.toString()}`)
  }

}
