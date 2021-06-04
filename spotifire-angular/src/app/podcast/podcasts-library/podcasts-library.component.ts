import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-podcasts-library',
  templateUrl: './podcasts-library.component.html',
  styleUrls: ['./podcasts-library.component.css']
})
export class PodcastsLibraryComponent implements OnInit {

  podcasts: Array<{name: String, cover: String, creator: String, id: String}>;

  constructor(private spotifyService: SpotifyService) {

  }

  ngOnInit(): void {
    this.load()
  }

  async load(){
    this.podcasts = await this.spotifyService.getMyPodcasts();
  }
}
