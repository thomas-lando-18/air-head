import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WingShapeSelectionComponent } from './wing-shape-selection.component';

describe('WingShapeSelectionComponent', () => {
  let component: WingShapeSelectionComponent;
  let fixture: ComponentFixture<WingShapeSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WingShapeSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WingShapeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
