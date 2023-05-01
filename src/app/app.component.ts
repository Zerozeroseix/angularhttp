import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './interface/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularhttp';

  private user: User = {
    'name': 'Michael Graham',
    'username': 'Mike',
    'email': 'Sincere@april.biz',
    'address': {
      'street': 'Kulas Light',
      'suite': 'Apt. 556',
      'city': 'Gwenborough',
      'zipcode': '92998-3874',
      'geo': {
        'lat': '-37.3159',
        'lng': '81.1496'
      }
    },
    'phone': '1-770-736-8031 x56442',
    'website': 'hildegard.org',
    'company': {
      'name': 'Romaguera-Crona',
      'catchPhrase': 'Multi-layered client-server neural-net',
      'bs': 'harness real-time e-markets'
    }
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.onGetUsers()
    // this.onGetUser(2)
    this.onCreateUser(this.user)
  }


  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      {
        next: (response) => console.table(response),
        error: (error: any) => console.log(error),
        complete: () => console.log('Done getting users'),
      }
    )
  }

  onGetUser(id: number): void {
    this.userService.getUser(id).subscribe(
      {
        next: (response) => console.log(response),
        error: (error: any) => console.log(error),
        complete: () => console.log(`Done getting user (id: ${id})`),
      }
    )
  }

  onCreateUser(user: User) {
    this.userService.createUser(user).subscribe(
      {
        next: (response) => console.log(response),
        error: (error) => console.log(error),
        complete: () => console.log(`Creation of user${user.id ? ` (id: ${user.id})` : ''} completed`)
      }
    )
  }


}


//#region Custom Observable and its Subscription:
// constructor() {
//   type HttpResponse = { code: number, data: string };

//   const observable = new Observable<HttpResponse>(subscriber => {
//     console.log('Inside subscriber...');
//     subscriber.next({ code: 200, data: 'this is data 1...' });
//     subscriber.next({ code: 200, data: 'this is data 2...' });
//     subscriber.next({ code: 200, data: 'this is data 3...' });
//     subscriber.error({ code: 500, msg: 'An error occurred' });

//     setTimeout(() => {
//       subscriber.next({ code: 200, data: 'this is data more data...' });
//       subscriber.complete();
//     }, 3 * 1000);
//     console.log('subscriber is done emitting...')
//   });

//   observable.subscribe({
//     next(response: HttpResponse) {
//       console.log('got Response: ', response)
//     },
//     error(error: any) {
//       console.error('something wrong occurred: ', error)
//     },
//     complete() {
//       console.log('done')
//     }
//   })
// }
//#endregion Custom Observable and its Subscription ***
