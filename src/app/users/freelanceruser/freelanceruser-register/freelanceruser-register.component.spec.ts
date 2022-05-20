import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceruserRegisterComponent } from './freelanceruser-register.component';

describe('FreelanceruserRegisterComponent', () => {
  let component: FreelanceruserRegisterComponent;
  let fixture: ComponentFixture<FreelanceruserRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelanceruserRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelanceruserRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
