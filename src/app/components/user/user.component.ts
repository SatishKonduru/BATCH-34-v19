import { HttpClient, httpResource } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

interface User {}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // userName = '';
  // errorMsg = '';
  // // constructor(private _http: HttpClient) {}
  // private _http = inject(HttpClient);
  // ngOnInit(): void {
  //   this._http
  //     .get<any>('https://jsonplaceholder.typicode.com/users/3')
  //     .subscribe({
  //       next: (data) => (this.userName = data.name),
  //       error: (err) => (this.errorMsg = err),
  //     });
  // }

  users = httpResource<User[]>(() => ({
    url: 'https://jsonplaceholder.typicode.com/users',
  }));
}
