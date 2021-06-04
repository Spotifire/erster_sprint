import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavSonglistComponent } from './fav-songlist.component';

describe('FavSonglistComponent', () => {
  let component: FavSonglistComponent;
  let fixture: ComponentFixture<FavSonglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavSonglistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavSonglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
