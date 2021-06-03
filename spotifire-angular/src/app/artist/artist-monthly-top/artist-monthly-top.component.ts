import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-monthly-top',
  templateUrl: './artist-monthly-top.component.html',
  styleUrls: ['./artist-monthly-top.component.css']
})
export class ArtistMonthlyTopComponent implements OnInit {

  artists: Array<{name: string, image: string, follower: string}> = [
    {name: 'Artist1', image: 'img', follower: '1212321'},
    {name: 'Artist2', image: 'img', follower: '1212321'},
    {name: 'Artist3', image: 'img', follower: '1212321'},
    {name: 'Artist4', image: 'img', follower: '1212321'},
    {name: 'Artist5', image: 'img', follower: '1212321'},
    {name: 'Artist6', image: 'img', follower: '1212321'},
    {name: 'Artist7', image: 'img', follower: '1212321'}
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
