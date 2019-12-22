import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng7MatBreadcrumbModule } from 'ng7-mat-breadcrumb';

import { BreadcrumbComponent } from './breadcrumb.component';
import { Router, ActivatedRoute } from '@angular/router';

xdescribe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbComponent ],
      imports: [ Ng7MatBreadcrumbModule ],
      providers: [
        { provide: Router, useValue: {} },
        { provide: ActivatedRoute, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
