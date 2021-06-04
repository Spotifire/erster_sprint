import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-monthly-top',
  templateUrl: './artist-monthly-top.component.html',
  styleUrls: ['./artist-monthly-top.component.css']
})
export class ArtistMonthlyTopComponent implements OnInit {

  artists: Array<{name: string, image: string, follower: string}> = [
    {name: 'Artist 1', image: 'img', follower: '1212321'},
    {name: 'Artist 2', image: 'img', follower: '1212321'},
    {name: 'Artist 3', image: 'img', follower: '1212321'},
    {name: 'Artist 4', image: 'img', follower: '1212321'},
    {name: 'Artist 5', image: 'img', follower: '1212321'},
    {name: 'Artist 6', image: 'img', follower: '1212321'},
    {name: 'Artist 7', image: 'img', follower: '1212321'}
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
