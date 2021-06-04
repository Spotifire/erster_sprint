import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowProfileFollowerComponent } from './follow-profile-follower.component';

describe('FollowProfileFollowerComponent', () => {
  let component: FollowProfileFollowerComponent;
  let fixture: ComponentFixture<FollowProfileFollowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowProfileFollowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowProfileFollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
