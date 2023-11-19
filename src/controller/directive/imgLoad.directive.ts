import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appImgLoad]',
})
export class ImgLoadDirective implements OnInit, OnChanges {
  @Input() url: any;
  @Input() localUrl: any = null;

  constructor(private ele: ElementRef) {
    this.ele.nativeElement.src = 'assets/images/icons/no-photo.png';
  }

  ngOnInit() {
    this.onLoadData();
  }

  onLoadData() {
    if (this.url && this.url != null && this.url !== '') {
      this.ele.nativeElement.style.backgroundImage = 'url(' + this.url + ')';
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.onLoadData();
  }
}
