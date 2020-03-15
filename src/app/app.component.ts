import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-child-component-example';
  oddList = [];
  evenList = [];

  insertItem(value: number){
    if(value%2==0)
      this.evenList.push(value);
      else
      this.oddList.push(value);
  }
}
