import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../interfaces/city';
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly API = environment.openWeather.api;
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
  constructor(private httpClient: HttpClient) { }

  //opcion 1 Promises
  /* getWeatherByCity(pCity: string = "Madrid"): Promise<City> {
    console.log(pCity)
    const url = this.baseUrl + '?q=' + pCity + '&units=metric&appid=' + this.API;
    console.log(url)
    return lastValueFrom(this.httpClient.get<City>(url))
  } */


  //opcion 2 Observables
  getWeatherByCity(pCity: string = "Madrid"): Observable<City> {
    console.log(pCity)
    const url = this.baseUrl + '?q=' + pCity + '&units=metric&appid=' + this.API;
    console.log(url)
    return this.httpClient.get<City>(url)
  }


}
