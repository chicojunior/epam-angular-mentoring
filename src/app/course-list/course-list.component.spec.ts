import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderByModule } from '../common/pipes/order-by/order-by.module';
import { CourseItemModule } from '../course-item/course-item.module';
import { MatCardModule } from '@angular/material/card';


import { CourseListComponent } from './course-list.component';
import { MatDialog } from '@angular/material/dialog';
import { CourseService } from '../common/services';
import { COURSES } from '../common/constants/course-page.constants';

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
        { provide: CourseService, useValue: {} }
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
