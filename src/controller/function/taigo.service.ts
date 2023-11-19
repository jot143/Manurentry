import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaigoService {

  constructor() { }

  phoneNumberMask = {
    guide: false,
    mask: ["-", /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  };
}
