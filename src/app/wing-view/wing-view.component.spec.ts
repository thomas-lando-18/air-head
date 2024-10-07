import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WingViewComponent } from './wing-view.component';

describe('WingViewComponent', () => {
  let component: WingViewComponent;
  let fixture: ComponentFixture<WingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WingViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
