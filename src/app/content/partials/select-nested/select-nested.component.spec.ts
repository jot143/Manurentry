import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNestedComponent } from './select-nested.component';

describe('SelectNestedComponent', () => {
  let component: SelectNestedComponent;
  let fixture: ComponentFixture<SelectNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectNestedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
