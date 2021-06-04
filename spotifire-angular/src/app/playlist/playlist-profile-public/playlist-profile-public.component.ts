import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-profile-public',
  templateUrl: './playlist-profile-public.component.html',
  styleUrls: ['./playlist-profile-public.component.css']
})
export class PlaylistProfilePublicComponent implements OnInit {

  public_playlists: Array<{name: String, creator: String, cover: String, id: String}> = [
    {name: 'Playlist 1', creator: 'Creator', cover: 'img', id: '1'},
    {name: 'Playlist 2', creator: 'Creator', cover: 'img', id: '1'},
    {name: 'Playlist 3', creator: 'Creator', cover: 'img', id: '1'},
    {name: 'Playlist 4', creator: 'Creator', cover: 'img', id: '1'},
    {name: 'Playlist 5', creator: 'Creator', cover: 'img', id: '1'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
