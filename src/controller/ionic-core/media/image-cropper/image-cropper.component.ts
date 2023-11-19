import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss']
})
export class ImageCropperComponent implements OnInit {


  imageURL: string = '';
  croppedImage: any = '';
  croppedImageBlob: any;

  aspectRatio = 4 / 3;
  resizeToWidth = 0;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit(): void {
    // if(this.navCtrl.navigationData) {
    //   this.aspectRatio = this.navCtrl.navigationData.aspectRatio ?? 4/3;
    //   this.resizeToWidth = this.navCtrl.navigationData.resizeToWidth ?? 0;
    //   this.imageChangedEvent = this.navCtrl.navigationData.event;
    // }
  }

  imageCropped(event: ImageCroppedEvent) {
    if(event && event.objectUrl) {
      this.croppedImage = event.objectUrl;
      // event.blob can be used to upload the cropped image
      this.croppedImageBlob = event.blob;
    }
  }

  imageLoaded(image: LoadedImage) {
    // show cropper
  }

  cropperReady() {
    // cropper ready
  }

  loadImageFailed() {
    // show message
  }

  done() {
    this.modalCtrl.dismiss({
      webPath: this.croppedImage,
      blob: this.croppedImageBlob
    })
  }

  cancel() {
    this.modalCtrl.dismiss();
  }


}
