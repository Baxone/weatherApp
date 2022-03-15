import { EventEmitter, Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  city: string = ""
  @Output() nameCity: EventEmitter<string>
  constructor() {

    this.nameCity = new EventEmitter()
  }

  ngOnInit(): void {
  }

  getCity() {
    this.nameCity.emit(this.city);
    console.log('header', this.city)
  }

}
