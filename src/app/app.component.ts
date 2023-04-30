import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularhttp';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.onGetUsers()
    this.onGetUser(2)

  }


  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      {
        next: (response) => console.log(response),
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
