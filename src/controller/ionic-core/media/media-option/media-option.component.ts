import { Component, OnInit } from '@angular/core';

import { CameraSource } from '@capacitor/camera';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-media-option',
  templateUrl: './media-option.component.html',
  styleUrls: ['./media-option.component.scss'],
})
export class MediaOptionComponent implements OnInit {

  canDelete = false;

  cameraSource = CameraSource;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {

  }


  startCapture(cameraSource: CameraSource) {
    this.modalCtrl.dismiss({ cameraSource });
  }

  deleteMedia() {
    this.modalCtrl.dismiss({ deleteMedia: true })
  }
}
