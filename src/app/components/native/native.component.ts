import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-native',
  templateUrl: './native.component.html',
  styleUrls: ['./native.component.scss'],
})
export class NativeComponent implements OnInit {

  location = 'Location: '
  info = 'Info: '
  battery = 'Battery: '
  
  constructor() { 

  }

  ngOnInit() { 
    this.getCurrentPosition();
    this.logDeviceInfo();
    this.logBatteryInfo();

  }

  getCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    this.location +=`${coordinates.coords.latitude}, ${coordinates.coords.longitude}`
    console.log('Current position:', coordinates);
  };

  logDeviceInfo = async () => {
    const info = await Device.getInfo();
    this.info += `${info.model}, ${info.platform}, ${info.osVersion}`
    console.log(info);
  };
  
  logBatteryInfo = async () => {
    const info = await Device.getBatteryInfo();
    this.battery += `${info.batteryLevel}, ${info.isCharging}`
    console.log(info);
  };

}
