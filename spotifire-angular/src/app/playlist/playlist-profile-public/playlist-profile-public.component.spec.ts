import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistProfilePublicComponent } from './playlist-profile-public.component';

describe('PlaylistProfilePublicComponent', () => {
  let component: PlaylistProfilePublicComponent;
  let fixture: ComponentFixture<PlaylistProfilePublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistProfilePublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistProfilePublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
