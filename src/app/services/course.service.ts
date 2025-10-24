import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private _URL = 'Data/data.json';
  constructor(private _http: HttpClient) {}

  courseNames(): Observable<any> {
    return this._http.get<any>(`${this._URL}`);
  }
}
