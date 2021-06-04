import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists-library',
  templateUrl: './artists-library.component.html',
  styleUrls: ['./artists-library.component.css']
})
export class ArtistsLibraryComponent implements OnInit {

  artists: Array<{name: String, image: String, follower: String}> = [
    {name: 'Artist', image: 'img', follower: '63478'},
    {name: 'Artist', image: 'img', follower: '63478'},
    {name: 'Artist', image: 'img', follower: '63478'},
    {name: 'Artist', image: 'img', follower: '63478'},
    {name: 'Artist', image: 'img', follower: '63478'},
    {name: 'Artist', image: 'img', follower: '63478'},
    {name: 'Artist', image: 'img', follower: '63478'},
    {name: 'Artist', image: 'img', follower: '63478'},
    {name: 'Artist', image: 'img', follower: '63478'},
    {name: 'Artist', image: 'img', follower: '63478'}
  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
