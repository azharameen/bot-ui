import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerProfileViewComponent } from './jobseeker-profile-view.component';

describe('JobseekerProfileViewComponent', () => {
  let component: JobseekerProfileViewComponent;
  let fixture: ComponentFixture<JobseekerProfileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobseekerProfileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobseekerProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
