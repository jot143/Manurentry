import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appButton]',
})
export class ButtonDirective implements OnInit, OnDestroy {

  constructor(private elementRef: ElementRef) {}


  ngOnInit(): void {
    this.elementRef.nativeElement.classList.add('appButtonRipple');
  }

  ngOnDestroy(): void {

  }

  @HostListener('click', ['$event'])
  onClick(e: any) {
    this.createRipple(e);
  }

  createRipple(event: any) {
    const button = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    this.elementRef.nativeElement.append(circle);
  }

}
