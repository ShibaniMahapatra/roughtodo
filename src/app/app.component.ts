import { Component } from '@angular/core';

import {PeopleService} from './people.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'rough';
  people$;
  // constructor(private peopleService: PeopleService){}
  constructor(private http: PeopleService){}

  fetchPeople()
    {
        // this.people$ = this.peopleService.fetchPeople();
        this.people$=this.http.fetchPeople().subscribe();
        // this.peopleService.fetchPeople().subscribe((people: any[])=>{
          // console.log(data);
          // this.products = data;
    }  
}

