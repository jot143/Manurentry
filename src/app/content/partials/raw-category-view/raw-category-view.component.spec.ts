import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawCategoryViewComponent } from './raw-category-view.component';

describe('RawCategoryViewComponent', () => {
  let component: RawCategoryViewComponent;
  let fixture: ComponentFixture<RawCategoryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RawCategoryViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RawCategoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
