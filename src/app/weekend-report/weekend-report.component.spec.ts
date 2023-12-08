import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekendReportComponent } from './weekend-report.component';

describe('WeekendReportComponent', () => {
  let component: WeekendReportComponent;
  let fixture: ComponentFixture<WeekendReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeekendReportComponent]
    });
    fixture = TestBed.createComponent(WeekendReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
