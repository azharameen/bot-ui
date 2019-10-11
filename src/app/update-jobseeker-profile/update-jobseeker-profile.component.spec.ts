import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJobseekerProfileComponent } from './update-jobseeker-profile.component';

describe('UpdateJobseekerProfileComponent', () => {
  let component: UpdateJobseekerProfileComponent;
  let fixture: ComponentFixture<UpdateJobseekerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateJobseekerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJobseekerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
