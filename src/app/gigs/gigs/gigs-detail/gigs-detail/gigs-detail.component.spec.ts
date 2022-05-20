import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigsDetailComponent } from './gigs-detail.component';

describe('GigsDetailComponent', () => {
  let component: GigsDetailComponent;
  let fixture: ComponentFixture<GigsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GigsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GigsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
