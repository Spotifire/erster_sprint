import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsLibraryComponent } from './albums-library.component';

describe('AlbumsLibraryComponent', () => {
  let component: AlbumsLibraryComponent;
  let fixture: ComponentFixture<AlbumsLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumsLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
