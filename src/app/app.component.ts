import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<ejs-grid [dataSource]="data"></ejs-grid>',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-grid-app';
  public data: object[] = [
    {

      id:2,
      name: 'This is prod name 2'
    },
    {

      id:3,
      name: 'This is prod name 3'
    }
  ]
}
