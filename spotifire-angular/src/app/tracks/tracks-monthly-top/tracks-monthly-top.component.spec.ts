import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksMonthlyTopComponent } from './tracks-monthly-top.component';

describe('TracksMonthlyTopComponent', () => {
  let component: TracksMonthlyTopComponent;
  let fixture: ComponentFixture<TracksMonthlyTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TracksMonthlyTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TracksMonthlyTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
