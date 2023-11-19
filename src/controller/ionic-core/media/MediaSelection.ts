import { EventEmitter } from "@angular/core"
import { Photo } from "@capacitor/camera";

export interface MediaType extends Photo {
  blob?: Blob
}

export class MediaSelection {

  onMediaSelected = new EventEmitter();
  onDeleteMediaSelected = new EventEmitter();

  media: MediaType | null = null;
  fileName = 'filename';

  size: { width: number | undefined, height: number | undefined } = {
    width: undefined,
    height: undefined
  }

  constructor(size?: { width: number | undefined, height: number | undefined }) {
    if(size) {
      this.size = size
    }
  }

  selectMedia(photo: MediaType) {
    this.media = photo;
    this.onMediaSelected.emit(this.media);
  }

  async getBlob() {
    if(this.media?.webPath) {
      return await fetch(this.media.webPath).then(r => r.blob());
    }
    return Promise.reject(false);
  }

  async getFile() {
    let blob: null | Blob = null;
    if(this.media?.blob) {
      blob = this.media.blob;
    } else {
      blob = await this.getBlob();
    }

    if(blob && this.media) {
      return new File([blob],`${this.fileName}.${this.media.format}`, { type: blob.type, lastModified: new Date().getTime()});
    }

    return Promise.reject(false);
  }

}
