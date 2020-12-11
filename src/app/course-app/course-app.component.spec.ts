import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAppComponent } from './course-app.component';

describe('CourseAppComponent', () => {
  let component: CourseAppComponent;
  let fixture: ComponentFixture<CourseAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
