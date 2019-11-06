import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoursePageComponent } from './course-page.component';
import { CourseItemComponent } from '../course-item/course-item.component';

import { ICourse } from 'src/app/common/course.interface';
import { COURSE } from 'src/app/common/mock/course';

@Component({
  template: `
    <app-course-item
      [course]="course">
      <button
        class="delete-button"
        (click)="deleteCourse(course)">
        Delete
      </button>
    </app-course-item>
  `
})

class CourseItemTestComponent {
  public course: ICourse = COURSE;
  public courseId: number;
  public deleteCourse(course: ICourse) { this.courseId = course.id; }
}

describe('CoursePageComponent', () => {
  let component: CoursePageComponent;
  let fixture: ComponentFixture<CoursePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePageComponent, CourseItemComponent ],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});


