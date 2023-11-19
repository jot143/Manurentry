import { BgLoadDirective } from './bgLoad.directive';
import { ButtonDirective } from './button.directive';
import { CommonModule } from '@angular/common';
import { DivDirective } from './div.directive';
import { ImgLoadDirective } from './imgLoad.directive';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [BgLoadDirective, DivDirective, ButtonDirective, ImgLoadDirective],
  imports: [CommonModule],
  exports: [BgLoadDirective, DivDirective, ButtonDirective, ImgLoadDirective],
})
export class DirectiveModule {}
