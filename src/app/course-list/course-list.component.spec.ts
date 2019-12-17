import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { COURSES } from '@app-common/constants/course-page.constants';
import { OrderByModule } from '@app-common/pipes/order-by/order-by.module';
import { CourseService } from '@app-common/services';

import { CourseItemModule } from '../course-item/course-item.module';
import { CourseListComponent } from './course-list.component';
import { Router } from '@angular/router';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListComponent ],
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        OrderByModule,
        CourseItemModule
      ],
      providers: [
        { provide: MatDialog, useValue: {} },
        { provide: CourseService, useValue: {} },
        { provide: Router, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    component.courses = COURSES;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
