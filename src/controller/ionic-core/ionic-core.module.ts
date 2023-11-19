import { AllTaigaUIModule } from 'src/app/taiga-all-module';
import { CommonModule } from '@angular/common';
import { ImageCropperComponent } from './media/image-cropper/image-cropper.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { IonicModule } from '@ionic/angular';
import { MediaOptionComponent } from './media/media-option/media-option.component';
import { MediaService } from './media/media.service';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [MediaOptionComponent, ImageCropperComponent],
  exports: [MediaOptionComponent, ImageCropperComponent],
  imports: [
    CommonModule,
    IonicModule,
    ImageCropperModule,
    AllTaigaUIModule
  ],
  providers: [MediaService]
})
export class IonicCoreModule { }
