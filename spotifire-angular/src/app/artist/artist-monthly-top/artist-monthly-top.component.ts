import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-artist-monthly-top',
  templateUrl: './artist-monthly-top.component.html',
  styleUrls: ['./artist-monthly-top.component.css']
})
export class ArtistMonthlyTopComponent implements OnInit {

  artists: Array<{name: String, image: String, follower: Number, id: String}>


  constructor(private spotifyService : SpotifyService) {
  }

  ngOnInit(): void {
    this.load()
  }

  async load(){
    this.artists = await this.spotifyService.getMyArtists("short_term")
  }

}
