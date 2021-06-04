import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowProfileFollowingComponent } from './follow-profile-following.component';

describe('FollowProfileFollowingComponent', () => {
  let component: FollowProfileFollowingComponent;
  let fixture: ComponentFixture<FollowProfileFollowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowProfileFollowingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowProfileFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
