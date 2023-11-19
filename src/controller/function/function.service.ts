import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FunctionService {
  constructor(private datePipe: DatePipe) {}

  transformDate(date: any, sequence = 'MMM dd, yyyy') {
    return this.datePipe.transform(date, sequence);
  }

  static capitalizeFirstLetter(data: any) {
    return data.charAt(0).toUpperCase() + data.slice(1);
  }

  static capitalizeWords(str: string) {
    return str.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
  }

  static debounce(fn: any = null, delay = 1000) {
    let timer;
    return (() => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(), delay);
    })();
  }

  //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
  static calcDistanceBetweenTwoCoordinates(lat1: number, lon1:number, lat2:number, lon2:number)
  {
    var R = 6371; // km
    var dLat = FunctionService.toRad(lat2-lat1);
    var dLon = FunctionService.toRad(lon2-lon1);
    var lat1 = FunctionService.toRad(lat1);
    var lat2 = FunctionService.toRad(lat2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d;
  }

  // Converts numeric degrees to radians
  static toRad(value: any)
  {
      return value * Math.PI / 180;
  }

  static isWebUrl(string: string) {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }
}
