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
import { BorderHighlightModule } from '../../common/directives/border-highlight/border-highlight.module';

// Pipes
import { CourseDurationPipeModule } from '../../common/pipes/course-duration.pipe.module';
import { OrderByModule } from '../../common/pipes/order-by/order-by.module';

import { ICourse } from '../../common/course.interface';
import { COURSE } from '../../common/mock/course';

// Components
import { CoursePageComponent } from './course-page.component';
import { CourseItemComponent } from '../course-item/course-item.component';



describe('CoursePageComponent', () => {
  const course: ICourse = COURSE;

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
        MatInputModule,
        BorderHighlightModule,
        CourseDurationPipeModule,
        OrderByModule,
        MatDialogModule
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

  it('should call deleteCourse method', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;
    const button: HTMLElement = nativeElement.querySelector('.delete-button');

    spyOn(component, 'deleteCourse');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.deleteCourse).toHaveBeenCalledWith(course.id);
  });

  it('should test if string is empty', () => {
    const testString = 'Not Empty String';

    expect(component.isNotEmptyString(testString)).toBeTruthy();
  });

});


