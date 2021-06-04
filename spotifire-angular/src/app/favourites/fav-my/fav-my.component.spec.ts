import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavMyComponent } from './fav-my.component';

describe('FavMyComponent', () => {
  let component: FavMyComponent;
  let fixture: ComponentFixture<FavMyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavMyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
