import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../services/spotify.service';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  spotifyService: SpotifyService = new SpotifyService();
  code: string = new URLSearchParams(window.location.search).get('code');

  value = 1;

  // tslint:disable-next-line: ban-types
  playlists: Array<{name: String, creator: String, cover: String, id: String}>;

  constructor(private spotifyservice: SpotifyService){
  spotifyservice.setLibraryPlaylists(this);
}

  ngOnInit(): void {
    if (this.code) this.spotifyservice.login(this.code);
    // this.spotifyservice.getMyPlaylists();
  }

  setValue(value){
    this.value = value;
  }
  getValue(){
    return this.value;
  }

}



// PlaylistObject[]
