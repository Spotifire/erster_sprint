import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-follow-profile-follower',
  templateUrl: './follow-profile-follower.component.html',
  styleUrls: ['./follow-profile-follower.component.css']
})
export class FollowProfileFollowerComponent implements OnInit {

  followedUserObjects: Array<{name: String, profile_img: String, id: String}> = [
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
