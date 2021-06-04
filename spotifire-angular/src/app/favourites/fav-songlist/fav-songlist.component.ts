import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-songlist',
  templateUrl: './fav-songlist.component.html',
  styleUrls: ['./fav-songlist.component.css']
})
export class FavSonglistComponent implements OnInit {

  favSongs: Array<{nr: Number, title: String, artist: String, album: String, added: String, duration: Number, id: String}> = [
    {nr: 1, title: 'Title 1', artist: 'Artist', album: 'img', added: '16/06/2018', duration: 3.14, id: 'id'},
    {nr: 2, title: 'Title 2', artist: 'Artist', album: 'img', added: '16/06/2018', duration: 3.14, id: 'id'},
    {nr: 3, title: 'Title 3', artist: 'Artist', album: 'img', added: '16/06/2018', duration: 3.14, id: 'id'},
    {nr: 4, title: 'Title 4', artist: 'Artist', album: 'img', added: '16/06/2018', duration: 3.14, id: 'id'},
    {nr: 5, title: 'Title 5', artist: 'Artist', album: 'img', added: '16/06/2018', duration: 3.14, id: 'id'},
    {nr: 6, title: 'Title 6', artist: 'Artist', album: 'img', added: '16/06/2018', duration: 3.14, id: 'id'},
    {nr: 7, title: 'Title 7', artist: 'Artist', album: 'img', added: '16/06/2018', duration: 3.14, id: 'id'},
    {nr: 8, title: 'Title 8', artist: 'Artist', album: 'img', added: '16/06/2018', duration: 3.14, id: 'id'},
    {nr: 9, title: 'Title 9', artist: 'Artist', album: 'img', added: '16/06/2018', duration: 3.14, id: 'id'},
    {nr: 10, title: 'Title 10', artist: 'Artist', album: 'img', added: '16/06/2018', duration: 3.14, id: 'id'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
