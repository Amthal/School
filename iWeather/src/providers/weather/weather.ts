
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class WeatherProvider {

  apikey='c83d6ab66c45920461aa221f33f5fafd';
  url;

  constructor(public http: Http) {
    this.url='http://api.openweathermap.org/data/2.5/forecast?q=';
  }

  getWeather(city){
    return this.http.get(this.url+city+'&units=metric&APPID='+this.apikey)
    .map(res=>res.json());
  }

}
