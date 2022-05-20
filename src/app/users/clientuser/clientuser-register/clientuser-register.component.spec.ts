import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientuserRegisterComponent } from './clientuser-register.component';

describe('ClientuserRegisterComponent', () => {
  let component: ClientuserRegisterComponent;
  let fixture: ComponentFixture<ClientuserRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientuserRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientuserRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
