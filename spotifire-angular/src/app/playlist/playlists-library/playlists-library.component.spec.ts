import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistsLibraryComponent } from './playlists-library.component';

describe('PlaylistsLibraryComponent', () => {
  let component: PlaylistsLibraryComponent;
  let fixture: ComponentFixture<PlaylistsLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistsLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
