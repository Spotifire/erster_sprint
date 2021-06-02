import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-playlist-overview',
  templateUrl: './playlist-overview.component.html',
  styleUrls: ['./playlist-overview.component.css'],
})
export class PlaylistOverviewComponent implements OnInit {
  constructor(private spotifyService: SpotifyService) {}

  // tslint:disable-next-line: ban-types
  playlists: Array<{ name: String; creator: String; cover: String }> = [
    { name: 'Playlist One', creator: 'Creator', cover: 'COVER' },
    { name: 'Playlist two', creator: 'Creator', cover: 'COVER' },
    { name: 'Playlist three', creator: 'Creator', cover: 'COVER' },
    { name: 'Playlist ...', creator: 'Creator', cover: 'COVER' },
    { name: 'Playlist ..', creator: 'Creator', cover: 'COVER' },
    { name: 'Playlist .', creator: 'Creator', cover: 'COVER' },
    { name: 'Playlist', creator: 'Creator', cover: 'COVER' },
  ];

  ngOnInit(): void {
    this.spotifyService.setLibraryPlaylists(this);
  }
}
