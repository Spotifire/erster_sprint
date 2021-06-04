import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-follow-profile-following',
  templateUrl: './follow-profile-following.component.html',
  styleUrls: ['./follow-profile-following.component.css']
})
export class FollowProfileFollowingComponent implements OnInit {

  followingUserObjects: Array<{name: String, profile_img: String, id: String}> = [
    {name: 'User 1', profile_img: 'img', id: 'id'},
    {name: 'User 2', profile_img: 'img', id: 'id'},
    {name: 'User 3', profile_img: 'img', id: 'id'},
    {name: 'User 4', profile_img: 'img', id: 'id'},
    {name: 'User 5', profile_img: 'img', id: 'id'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
