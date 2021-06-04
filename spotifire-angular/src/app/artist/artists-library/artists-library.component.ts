import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-artists-library',
  templateUrl: './artists-library.component.html',
  styleUrls: ['./artists-library.component.css']
})
export class ArtistsLibraryComponent implements OnInit {

  artists: Array<{name: String, image: String, follower: Number, id: String}>

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit(): void {
    this.load()
  }

  async load(){
    this.artists = await this.spotifyService.getMyArtists();
  }
}
