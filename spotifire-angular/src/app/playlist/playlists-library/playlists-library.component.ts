import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-playlists-library',
  templateUrl: './playlists-library.component.html',
  styleUrls: ['./playlists-library.component.css']
})
export class PlaylistsLibraryComponent implements OnInit {

  spotifyService: SpotifyService = new SpotifyService();

  // tslint:disable-next-line: ban-types
  playlists: Array<{name: String, creator: String, cover: String, id: String}>;

  constructor(private spotifyservice: SpotifyService){ 
  spotifyservice.setLibraryPlaylists(this);
  }

ngOnInit(): void {
    // this.spotifyservice.getMyPlaylists();
  }
}
