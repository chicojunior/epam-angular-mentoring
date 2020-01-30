import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { Store, StoreModule } from '@ngrx/store';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { of, Observable } from 'rxjs';

import { Course } from '@app-common/course.interface';
import { COURSES } from '@app-common/mock/courses';
import { BorderHighlightModule } from '@app-common/directives/border-highlight/border-highlight.module';
import { CourseDurationPipeModule } from '@app-common/pipes/course-duration.pipe.module';
import { OrderByModule } from '@app-common/pipes/order-by/order-by.module';
import { CourseService } from '@app-common/services';

import { CourseItemModule } from '../course-item/course-item.module';
import { CourseListModule } from '../course-list/course-list.module';
import { CoursePageComponent } from './course-page.component';

class MockCourseService {
  res: Course[] = COURSES;
  searchInput: Observable<string> = of('');

  getCourseList() {
    return of(this.res);
  }

  setCourses() {
    this.res = COURSES;
  }

  filterCourses(query: string) {
    return of([]);
  }
}

describe('CoursePageComponent', () => {
  let component: CoursePageComponent;
  let fixture: ComponentFixture<CoursePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePageComponent ],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        BorderHighlightModule,
        CourseDurationPipeModule,
        OrderByModule,
        MatDialogModule,
        CourseItemModule,
        CourseListModule,
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        { provide: Router, useValue: {} },
        { provide: Store, useValue: {} },
        { provide: CourseService, useClass: MockCourseService }
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


