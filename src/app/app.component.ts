import { Component } from '@angular/core';

import { PeopleService } from './people.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'rough';
  people = [];
  // constructor(private peopleService: PeopleService){}
  constructor(private http: PeopleService) {}

  getJSONRepos()
    {
      this.http.getJSONRepos().subscribe(
        (data) => {
          this.people = data.data;
        },
        err => console.error(err),
        () => console.log('done loading foods')
      );
    }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    // this.getFoods();
  }
  getFoods() {
    this.http.getJSONRepos().subscribe(
      (data) => {
        this.people = data['data'];
      },
      err => console.error(err),
      () => console.log('done loading foods')
    );
  }
}
