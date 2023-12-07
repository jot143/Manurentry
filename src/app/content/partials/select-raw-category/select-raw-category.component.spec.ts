import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRawCategoryComponent } from './select-raw-category.component';

describe('SelectRawCategoryComponent', () => {
  let component: SelectRawCategoryComponent;
  let fixture: ComponentFixture<SelectRawCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectRawCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectRawCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
