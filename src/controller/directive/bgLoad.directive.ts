import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appBgLoad]',
})
export class BgLoadDirective implements OnInit, OnChanges {

  @Input() url: any;

  constructor(private ele: ElementRef) {
  }

  ngOnInit() {
    this.onLoadData();
  }

  onLoadData() {
    if (this.url) {
      this.ele.nativeElement.style.backgroundImage = 'url(' + this.url + ')';
    }
  }

  ngOnChanges(): void {
    this.onLoadData();
  }
}
