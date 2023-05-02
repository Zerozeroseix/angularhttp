import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../interface/user';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl
  readonly moreParams = ['test', 'test2']

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    // // https://angular.io/api/common/http/HttpHeaders
    // let myHeaders = new HttpHeaders({ 'myheader': ['headervalue01', 'headervalue02'] });
    // myHeaders = myHeaders.set('id', '1234')
    // myHeaders = myHeaders.append('id', '0000')

    // // https://angular.io/api/common/http/HttpParams
    // const theParams = { ['testList']: this.moreParams }
    // let myParams = new HttpParams({
    //   // fromObject: theParams,
    //   fromString: 'testList=3&testList=Junior'
    // })
    // myParams = myParams.append('name', 'junior')


    return this.http.get<User[]>(`${this.apiUrl}/users`, {
      // headers: myHeaders, params: myParams
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

  getTextFile(): Observable<string> {
    return this.http.get('../../assets/text.txt', { responseType: 'text' })
  }

}
