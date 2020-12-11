import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigmnetModuleTwoComponent } from './assigmnet-module-two.component';

describe('AssigmnetModuleTwoComponent', () => {
  let component: AssigmnetModuleTwoComponent;
  let fixture: ComponentFixture<AssigmnetModuleTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssigmnetModuleTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigmnetModuleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
