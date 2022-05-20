import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceruserLoginComponent } from './freelanceruser-login.component';

describe('FreelanceruserLoginComponent', () => {
  let component: FreelanceruserLoginComponent;
  let fixture: ComponentFixture<FreelanceruserLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelanceruserLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelanceruserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
