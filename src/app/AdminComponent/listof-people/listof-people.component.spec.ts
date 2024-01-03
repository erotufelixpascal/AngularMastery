import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofPeopleComponent } from './listof-people.component';

describe('ListofPeopleComponent', () => {
  let component: ListofPeopleComponent;
  let fixture: ComponentFixture<ListofPeopleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListofPeopleComponent]
    });
    fixture = TestBed.createComponent(ListofPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
