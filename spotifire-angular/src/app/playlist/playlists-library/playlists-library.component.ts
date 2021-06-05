import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-playlists-library',
  templateUrl: './playlists-library.component.html',
  styleUrls: ['./playlists-library.component.css']
})
export class PlaylistsLibraryComponent implements OnInit {

  // tslint:disable-next-line: ban-types
  playlists: Array<{name: String, creator: String, cover: String, public: Boolean, id: String}>;

  constructor(private spotifyservice: SpotifyService){
  }

ngOnInit(): void {
    this.load()
  }

  async load() {
    this.playlists = await this.spotifyservice.getMyPlaylists();
  }
}
