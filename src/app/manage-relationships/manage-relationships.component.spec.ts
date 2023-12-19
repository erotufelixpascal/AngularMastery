import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRelationshipsComponent } from './manage-relationships.component';

describe('ManageRelationshipsComponent', () => {
  let component: ManageRelationshipsComponent;
  let fixture: ComponentFixture<ManageRelationshipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageRelationshipsComponent]
    });
    fixture = TestBed.createComponent(ManageRelationshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
