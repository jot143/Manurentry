import { BehaviorSubject } from 'rxjs';
import { City } from '../model/City';
import { Country } from '../model/Country';
import { Injectable } from '@angular/core';
import { RequestService } from '../utility/request.service';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  countries =  new BehaviorSubject<Country[]>([]);
  cities =  new BehaviorSubject<Country[]>([]);
  provinces =  new BehaviorSubject<Country[]>([]);

  constructor(public request: RequestService) { }

  countryIndex(response: any = null) {
    const success = (value: any) => {
      if (value.status == 'OK') {
        this.countries.next(Country.createFromArray(value.data));
        response && response(this.countries);
      }
    };

    this.request.send('countryIndex', {}, success);
  }

  cityIndex(response: any = null) {
    const success = (value: any) => {
      if (value.status == 'OK') {
        this.cities.next(City.createFromArray(value.data));
        response && response(this.cities);
      }
    };

    this.request.send('cityIndex', {}, success);
  }

  
  provinceIndex(response: any = null) {
    const success = (value: any) => {
      if (value.status == 'OK') {
        this.provinces.next(City.createFromArray(value.data));
        response && response(this.provinces);
      }
    };

    this.request.send('provinceIndex', {}, success);
  }

}
