import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';

import { CourseItemComponent } from './course-item.component';
import { ICourse } from 'src/app/common/course.interface';
import { COURSE } from 'src/app/common/mock/course';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent ],
      imports: [ MatCardModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const course: ICourse = COURSE;

    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.course = course;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    fixture.detectChanges();
    const nativeElement: HTMLElement = fixture.nativeElement;
    const headerTitle: HTMLElement = nativeElement.querySelector('.header__title');

    expect(headerTitle.textContent).toBeTruthy();
  });
});
