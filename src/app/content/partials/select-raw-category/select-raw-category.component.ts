import { ChangeDetectorRef, Component, Input, Optional, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { RawCategoryService } from 'src/services/raw-item/category-raw.service';

export const NOOP_VALUE_ACCESSOR: ControlValueAccessor = {
  writeValue(): void {},
  registerOnChange(): void {},
  registerOnTouched(): void {},
};

@Component({
  selector: 'app-select-raw-category',
  templateUrl: './select-raw-category.component.html',
  styleUrls: ['./select-raw-category.component.css']
})
export class SelectRawCategoryComponent {
  @Input() formControlName = "";
  @Input() placeholder = "";

  @Input() selectLabel = '';
  @Input() selectKey = '';

  @ViewChild('input') input: any;

  constructor(@Self() @Optional() public ngControl: NgControl,  public categoryService: RawCategoryService,  private cd: ChangeDetectorRef) {
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
