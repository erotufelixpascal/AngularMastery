import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallRecordComponent } from './call-record.component';

describe('CallRecordComponent', () => {
  let component: CallRecordComponent;
  let fixture: ComponentFixture<CallRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallRecordComponent]
    });
    fixture = TestBed.createComponent(CallRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
