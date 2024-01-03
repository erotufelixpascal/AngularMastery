import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListOfPeopleComponent } from './add-list-of-people.component';

describe('AddListOfPeopleComponent', () => {
  let component: AddListOfPeopleComponent;
  let fixture: ComponentFixture<AddListOfPeopleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddListOfPeopleComponent]
    });
    fixture = TestBed.createComponent(AddListOfPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
