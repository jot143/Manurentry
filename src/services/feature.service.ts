import { Injectable } from '@angular/core';
import { Feature } from 'src/controller/model/Feature';
import { RequestService } from 'src/controller/utility/request.service';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  features: Feature[] = [];

  constructor(private requestService: RequestService) { }

  add(data: Partial<{parentFeature: string, name: string}>, success: (value: any) => void) {
    this.requestService.send("addFeature", data, success);
  }

  edit(data: Partial<{id: string, name: string}>, success: (value: any) => void) {
    this.requestService.send("editFeature", data, success);
  }

  getAll() {
    const success = (value) => {
      if(value.status = 'OK') {
        this.features = Feature.createFromArray(value.data);
        console.log(this.features);
      }
    }
    this.requestService.send("getFeatures", {}, success);
  }

  deleteFeature(data: Partial<{id: number}>, success: (value: any) => void) {
    const _success = (value) => {
      if(value.status = 'OK' && data?.id) {
        success && success(value);
      }
    }
    this.requestService.send("deleteFeature", data, _success);
  }
}
