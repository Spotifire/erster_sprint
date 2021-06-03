import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistSonglistComponent } from './playlist-songlist.component';

describe('PlaylistSonglistComponent', () => {
  let component: PlaylistSonglistComponent;
  let fixture: ComponentFixture<PlaylistSonglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistSonglistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistSonglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
