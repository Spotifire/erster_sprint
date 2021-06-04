import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-albums-library',
  templateUrl: './albums-library.component.html',
  styleUrls: ['./albums-library.component.css']
})
export class AlbumsLibraryComponent implements OnInit {

  albums: Array<{name: String, artists: String, cover: String, album_type: String, id: String}>

  constructor(private spotifyService: SpotifyService) {
    this.spotifyService.setLibraryAlbums(this)
  }

  ngOnInit(): void {
  }

}
