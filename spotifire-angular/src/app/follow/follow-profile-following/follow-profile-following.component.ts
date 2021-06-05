import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-follow-profile-following',
  templateUrl: './follow-profile-following.component.html',
  styleUrls: ['./follow-profile-following.component.css']
})
export class FollowProfileFollowingComponent implements OnInit {
  @Input() artists: Array<{name: String, image: String, follower: Number, id: String}>


  constructor() { }

  ngOnInit(): void {
  }

}
