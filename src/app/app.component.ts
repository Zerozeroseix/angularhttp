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
    'id': 2,
    'name': 'Magdalena Maria',
    'username': 'Magda',
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
      'name': 'Magdalenas',
      'catchPhrase': 'Multi-layered client-server neural-net',
      'bs': 'harness real-time e-markets'
    }
  }

  private userPayloadForPatch: any = {
    'id': 15,
    'name': 'Magdalena Maria',
    'username': 'Magda',
    'email': 'Sincere@april.biz',
  }

  public users!: User[]

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.onUpdateUser(this.user)
    // this.onPatchUser(this.userPayloadForPatch)
    this.onGetUsers()
    // this.onGetUser(2)
    // this.onCreateUser(this.user)
    // this.onDeleteUser(3)
    // this.onTextFile()
  }


  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      {
        next: (response) => { console.table(response); this.users = response },
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

  onUpdateUser(user: User) {
    this.userService.updateUser(user).subscribe(
      {
        next: (response) => console.log(response),
        error: (error) => console.log(error),
        complete: () => console.log(`Update of user${user.id ? ` (id: ${user.id})` : ''} completed`)
      }
    )
  }

  onPatchUser(userDataToPatch: any) {
    this.userService.patchUser(userDataToPatch).subscribe(
      {
        next: (response) => console.log(response),
        error: (error) => console.log(error),
        complete: () => console.log(`Done patching user${userDataToPatch.id ? ` (id: ${userDataToPatch.id})` : ''}`)
      }
    )
  }

  onDeleteUser(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: (response) => console.log('Response from delete: ', response),
      error: (error) => console.log(error),
      complete: () => console.log(`Deletion of user (id: ${id}) executed`),
    }
    )
  }

  onTextFile(): void {
    this.userService.getTextFile().subscribe({
      next: (response) => console.log('Response from getFileText: ', response),
      error: (error) => console.log(error),
      complete: () => console.log('Done getting text file'),
    })
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
