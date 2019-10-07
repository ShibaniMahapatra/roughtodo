import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {HttpClient} from '@angular/common/http';
import { Observable ,of} from 'rxjs';
// import { AngularFireDatabase, FirebaseListObservable } from '@angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }
  fetchPeople():Observable<Object>
  {
    // return(this.http.get('http://127.0.0.1:5000/todo'))
    return this.http.get("http://127.0.0.1:5000/todo")["data"];
    // .map(res => res.json())x
  }

  // fetchPeople():FirebaseListObservable<any[]>
  // {
  //   // return(this.http.get('http://127.0.0.1:5000/todo'))
  //   return this.http.get("http://127.0.0.1:5000/todo");
  //   // .map(res => res.json())x
  // }
}
