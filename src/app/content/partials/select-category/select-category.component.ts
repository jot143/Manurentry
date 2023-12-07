import { ChangeDetectorRef, Component, Input, Optional, Self, ViewChild } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormGroupDirective, NgControl } from '@angular/forms';
import { CategoryService } from 'src/services/item/category.service';

export const NOOP_VALUE_ACCESSOR: ControlValueAccessor = {
  writeValue(): void {},
  registerOnChange(): void {},
  registerOnTouched(): void {},
};


@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class SelectCategoryComponent {
  @Input() formControlName = "";
  @Input() placeholder = "";

  @Input() selectLabel = '';
  @Input() selectKey = '';

  @ViewChild('input') input: any;

  constructor(@Self() @Optional() public ngControl: NgControl,  public categoryService: CategoryService,  private cd: ChangeDetectorRef) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = NOOP_VALUE_ACCESSOR;
    }
  }

  ngOnInit() {
    this.categoryService.getAll();
  }

  setValue(value) {
    this.ngControl.control.patchValue(value);
  }

  registerOnChange(fn: (value: any) => void): void {}

  writeValue() {}

  registerOnTouched() {}

  onSelected(e) {
   
    if(this.selectLabel) {
      this.input.nativeElement.value = e[this.selectLabel];
    } else {
      this.input.nativeElement.value = e;
    }

    if(this.selectKey) {
      this.setValue(e[this.selectKey]);
    } else {
      this.setValue(e);
    }
  }
  
  onSyncEmitter(e: "edit" | "delete") {
    this.cd.detectChanges();
  }
}
