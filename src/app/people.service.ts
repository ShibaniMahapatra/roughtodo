import { Injectable } from '@angular/core';
import {HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import {from, Observable, of} from 'rxjs';
import {mergeMap, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
// import { AngularFireDatabase, FirebaseListObservable } from '@angularfire2/database';
import {catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http:HttpClient) { }

  // private static _handleError(err: HttpErrorResponse | any) {
  //   return Observable.throw(err.message || 'Error: Unable to complete request.');
  // }

  // GET list of public, future events
  // getExams(): Observable<Object> {
  //   return this.http
  //     .get(`http://127.0.0.1:5000/todo`)
  //     .catch(PeopleService._handleError);
  // }

  getJSONRepos() {
    return this.http.get('http://127.0.0.1:5000/todo');
  }
  // fetchPeople():Observable<Object> {
    // return(this.http.get('http://127.0.0.1:5000/todo'))
    // console.log(this.http.get('http://127.0.0.1:5000/todo')['data']);
    // return Observable.fromPromise(this.http.get('http://127.0.0.1:5000/todo')['data']);
    // .map(res => res.json())x

    // const tokenObs = from(this.http.get('http://127.0.0.1:5000/todo')['data']);

    // Merge the token observable into an HTTP observable
    // and return the JSON data from the response.
    // return tokenObs
    //   .mergeMap(token => this.http.get('XXX?auth=' + token))
    //   .map(resp => resp.json());


    // tslint:disable-next-line:no-string-literal
  //   return from(this.http.get('http://127.0.0.1:5000/todo')['data'])
  //   .map(resp => resp.json());
  // }

  // fetchPeople():FirebaseListObservable<any[]>
  // {
  //   // return(this.http.get('http://127.0.0.1:5000/todo'))
  //   return this.http.get("http://127.0.0.1:5000/todo");
  //   // .map(res => res.json())x
  // }
}
