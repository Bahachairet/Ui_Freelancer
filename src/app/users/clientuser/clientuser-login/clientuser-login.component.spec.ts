import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientuserLoginComponent } from './clientuser-login.component';

describe('ClientuserLoginComponent', () => {
  let component: ClientuserLoginComponent;
  let fixture: ComponentFixture<ClientuserLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientuserLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientuserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
