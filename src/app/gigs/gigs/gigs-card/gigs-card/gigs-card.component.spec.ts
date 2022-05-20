import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigsCardComponent } from './gigs-card.component';

describe('GigsCardComponent', () => {
  let component: GigsCardComponent;
  let fixture: ComponentFixture<GigsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GigsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GigsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
