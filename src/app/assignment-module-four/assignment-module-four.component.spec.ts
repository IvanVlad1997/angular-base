import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentModuleFour } from './assignment-module-four.component';

describe('ModuleTwoComponent', () => {
  let component: AssignmentModuleFour;
  let fixture: ComponentFixture<AssignmentModuleFour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentModuleFour ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentModuleFour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
