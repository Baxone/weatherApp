import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myCity: string = "";

  getSearchCity($event: any) {
    this.myCity = $event;
    console.log('appcomponent', this.myCity)
  }
}
