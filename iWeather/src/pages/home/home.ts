import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WeatherProvider } from '../../providers/weather/weather';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
weather:any;
location:{
  city:string
  
}
 directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  constructor(public navCtrl: NavController,private weatherProvider:WeatherProvider,private storage:Storage) {

  }

  ionViewWillEnter(){
    this.storage.get('location').then((val)=>{
        if(val!=null)
        {
          this.location=JSON.parse(val);
        }
        else  {
          this.location={city:'Beirut'}
        }

        this.weatherProvider.getWeather(this.location.city)
        .subscribe(weather=>{
          this.weather=weather.list;
          console.log("this.weather inside");
          console.log(this.weather);
          
        });

    });

  }

  getIconUrl = function(iconId) {
    return 'http://openweathermap.org/img/w/' + iconId + '.png';
}
  getDirection (degree) {
    if (degree > 338) {
      degree = 360 - degree;
    }
    var index = Math.floor((degree + 22) / 45);
    return this.directions[index];
  }



}
