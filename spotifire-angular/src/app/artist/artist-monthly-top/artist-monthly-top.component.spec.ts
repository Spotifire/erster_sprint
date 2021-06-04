import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistMonthlyTopComponent } from './artist-monthly-top.component';

describe('ArtistMonthlyTopComponent', () => {
  let component: ArtistMonthlyTopComponent;
  let fixture: ComponentFixture<ArtistMonthlyTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistMonthlyTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistMonthlyTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
