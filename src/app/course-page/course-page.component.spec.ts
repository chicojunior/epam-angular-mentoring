// @angular imports
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

// Directives
import { BorderHighlightModule } from '../common/directives/border-highlight/border-highlight.module';

// Pipes
import { CourseDurationPipeModule } from '../common/pipes/course-duration.pipe.module';
import { OrderByModule } from '../common/pipes/order-by/order-by.module';

import { ICourse } from '../common/course.interface';
import { COURSE } from '../common/mock/course';

import { CourseItemModule } from '../course-item/course-item.module';
import { CourseListModule } from '../course-list/course-list.module';

// Components
import { CoursePageComponent } from './course-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { CourseService } from '../common/services';



describe('CoursePageComponent', () => {
  const course: ICourse = COURSE;

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
        RouterTestingModule
      ],
      providers: [
        { provide: Router, useValue: {} },
        { provide: CourseService, useValue: { getCourseList: () => []} }
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


