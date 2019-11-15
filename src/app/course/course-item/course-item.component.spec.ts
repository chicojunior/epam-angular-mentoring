import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';



import { CourseItemComponent } from './course-item.component';
import { ICourse } from 'src/app/common/course.interface';
import { COURSE } from 'src/app/common/mock/course';
import { BorderHighlightModule } from '../../common/directives/border-highlight/border-highlight.module';
import { CourseDurationPipeModule } from '../../common/pipes/course-duration.pipe.module';


@Component({
  template: `
    <app-course-item [course]="course" (deleteCourse)="deleteCourse($event)"></app-course-item>
  `
})

class CourseItemTestComponent {
  public course: ICourse = COURSE;
  public courseId: number;

  deleteCourse(courseId: number) {
    console.log(courseId);
  }

}

describe('CourseItemComponent', () => {
  const course: ICourse = COURSE;

  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent ],
      imports: [ MatCardModule, BorderHighlightModule, CourseDurationPipeModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    component.course = course;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const headerTitle: HTMLElement = nativeElement.querySelector('.header__title');

    fixture.detectChanges();

    expect(headerTitle.textContent).toBeTruthy();
  });

  it('should emit course id', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const button: HTMLElement = nativeElement.querySelector('.delete-button');

    spyOn(component.deleteCourse, 'emit');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.deleteCourse.emit).toHaveBeenCalledWith(course.id);
  });
});

describe('CourseItemTestComponent', () => {
  let parentComponent: CourseItemTestComponent;
  let parentFixture: ComponentFixture<CourseItemTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemTestComponent, CourseItemComponent ],
      imports: [ BorderHighlightModule, CourseDurationPipeModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    parentFixture = TestBed.createComponent(CourseItemTestComponent);
    parentComponent = parentFixture.componentInstance;
    parentFixture.detectChanges();
  });

  it('should create', () => {
    expect(parentComponent).toBeTruthy();
  });

  it('should call parent deleteCourse method', () => {
    const nativeElement: HTMLElement = parentFixture.nativeElement;
    const button: HTMLElement = nativeElement.querySelector('.delete-button');

    spyOn(parentComponent, 'deleteCourse');
    button.dispatchEvent(new Event('click'));
    parentFixture.detectChanges();
    expect(parentComponent.deleteCourse).toHaveBeenCalledWith(parentComponent.course.id);
  });

});
