// This API requires the following permissions be added to your AndroidManifest.xml:
// <uses-permission android:name="android.permission.READ_MEDIA_IMAGES"/>
// <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
// <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { MediaSelection, MediaType } from './MediaSelection';

import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { Injectable } from '@angular/core';
import { MediaOptionComponent } from './media-option/media-option.component';
import { ModalController } from '@ionic/angular';

interface Options {
  size: { width: number | undefined, height: number | undefined },
  canEdit: boolean,
  canDelete: boolean,
  aspectRatio: number,
  resizeToWidth: number
}

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private modalCtrl: ModalController) { }

  async openOptionSelection(options: Options = { size: { width: undefined, height: undefined }, canEdit: true, canDelete: false, aspectRatio: 4 / 3, resizeToWidth: 0 }) {

    const mediaSelection = new MediaSelection(options.size);

    const modal = await this.modalCtrl.create({ component: MediaOptionComponent, componentProps: options, keyboardClose: true, initialBreakpoint: 1, breakpoints: [0, 1], cssClass: 'ion-modal-action-sheet' });
    modal.present();

    modal.onDidDismiss().then(({ role, data }) => {
      if (!role) {
        if (data.cameraSource) {
          this.takePicture(data.cameraSource, options.canEdit ? undefined : options.size).then((photo: MediaType) => {
            if (options.canEdit) {
              this.openImageEditor(mediaSelection, photo, options);
            } else {
              mediaSelection.selectMedia(photo);
            }
          }).catch((err) => {
            console.error(err)
          })
        } else if (data.deleteMedia) {
          mediaSelection.onDeleteMediaSelected.emit(true);
        }
      }
    });

    return mediaSelection;
  }

  takePicture(cameraSource: CameraSource, size: { width: number | undefined, height: number | undefined } = { width: undefined, height: undefined }) {
    return Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: cameraSource,
      width: size.width,
      height: size.height
    });
  }

  async openImageEditor(mediaSelection: MediaSelection, photo: MediaType, options: Options) {
    const modal = await this.modalCtrl.create({ component: ImageCropperComponent, componentProps: { ...options, imageURL: photo.webPath } });
    modal.present();

    modal.onDidDismiss().then(({ role, data }) => {
      if (!role) {
        mediaSelection.selectMedia({
          webPath: data.webPath,
          format: 'png',
          saved: false
        })
      }
    });
  }
}
