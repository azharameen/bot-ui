import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerProfileViewComponent } from './employer-profile-view.component';

describe('EmployerProfileViewComponent', () => {
  let component: EmployerProfileViewComponent;
  let fixture: ComponentFixture<EmployerProfileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerProfileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
