import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastsLibraryComponent } from './podcasts-library.component';

describe('PodcastsLibraryComponent', () => {
  let component: PodcastsLibraryComponent;
  let fixture: ComponentFixture<PodcastsLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodcastsLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
