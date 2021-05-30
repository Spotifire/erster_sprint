import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-overview',
  templateUrl: './playlist-overview.component.html',
  styleUrls: ['./playlist-overview.component.css']
})
export class PlaylistOverviewComponent implements OnInit {

  constructor() { }

  // tslint:disable-next-line: ban-types
  playlists: Array<{name: String, creator: String, cover: String}> = [
    {name: 'Playlist One', creator: 'Creator', cover: 'COVER'},
    {name: 'Playlist two', creator: 'Creator', cover: 'COVER'},
    {name: 'Playlist three', creator: 'Creator', cover: 'COVER'},
    {name: 'Playlist ...', creator: 'Creator', cover: 'COVER'},
    {name: 'Playlist ..', creator: 'Creator', cover: 'COVER'},
    {name: 'Playlist .', creator: 'Creator', cover: 'COVER'},
    {name: 'Playlist', creator: 'Creator', cover: 'COVER'},
];

  ngOnInit(): void {
  }

}
