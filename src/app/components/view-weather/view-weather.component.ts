import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/interfaces/city';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-view-weather',
  templateUrl: './view-weather.component.html',
  styleUrls: ['./view-weather.component.css']
})
export class ViewWeatherComponent implements OnInit {

  myCity: City | any;
  icon: string = "";
  @Input() searchCity: string = 'Madrid'
  constructor(private weatherService: WeatherService) { }

  //opcion 1 Promises
  /*  async ngOnInit(): Promise<void> {
     this.myCity = await this.weatherService.getWeatherByCity()
     this.icon = this.myCity?.weather[0].icon;
     console.log(this.myCity);
   }

   async ngOnChanges(): Promise<void> {
     this.myCity = await this.weatherService.getWeatherByCity(this.searchCity)
     this.icon = this.myCity?.weather[0].icon;
   }
  */

  //opcion 2 Observables
  ngOnInit(): void {
    this.weatherService.getWeatherByCity().subscribe(data => {
      this.myCity = data;
      this.icon = this.myCity?.weather[0].icon;
    })
  }

  ngOnChanges(): void {
    this.weatherService.getWeatherByCity(this.searchCity).subscribe(data => {
      this.myCity = data;
      this.icon = this.myCity?.weather[0].icon;
    })

  }

}
