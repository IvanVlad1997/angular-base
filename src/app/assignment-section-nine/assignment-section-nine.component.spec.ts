import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentSectionNineComponent } from './assignment-section-nine.component';

describe('AssignmentSectionNineComponent', () => {
  let component: AssignmentSectionNineComponent;
  let fixture: ComponentFixture<AssignmentSectionNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentSectionNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentSectionNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
