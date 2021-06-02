import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../services/spotify.service';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  spotifyService: SpotifyService = new SpotifyService();

// tslint:disable-next-line: ban-types
playlists: Array<{name: String, creator: String, cover: String}>;
  /*this.spotifyService.getUserPlaylists();
  [
    {name: 'NAME', creator: 'Creator', cover: 'COVER'},
    {name: 'NAME', creator: 'Creator', cover: 'COVER'},
    {name: 'NAME', creator: 'Creator', cover: 'COVER'},
    {name: 'NAME', creator: 'Creator', cover: 'COVER'},
    {name: 'NAME', creator: 'Creator', cover: 'COVER'},
    {name: 'NAME', creator: 'Creator', cover: 'COVER'},
    {name: 'NAME', creator: 'Creator', cover: 'COVER'},
    {name: 'NAME', creator: 'Creator', cover: 'COVER'},
    {name: 'NAME', creator: 'Creator', cover: 'COVER'},
    {name: 'NAME', creator: 'Creator', cover: 'COVER'},
    {name: 'NAME', creator: 'Creator', cover: 'COVER'},
    {name: 'NAME', creator: 'Creator', cover: 'COVER'},
    {name: 'NAME', creator: 'Creator', cover: 'COVER'},
    {name: 'NAME', creator: 'Creator', cover: 'COVER'},
    {name: 'NAME', creator: 'Creator', cover: 'COVER'},
    {name: 'NAME', creator: 'Creator', cover: 'COVER'},
    {name: 'NAME', creator: 'Creator', cover: 'COVER'},
    {name: 'NAME', creator: 'Creator', cover: 'COVER'},
    {name: 'NAME', creator: 'Creator', cover: 'COVER'},
    {name: 'NAME', creator: 'Creator', cover: 'COVER'},
    {name: 'NAME', creator: 'Creator', cover: 'COVER'},
    {name: 'NAME', creator: 'Creator', cover: 'COVER'},
    {name: 'NAME', creator: 'Creator', cover: 'COVER'},
    {name: 'NAME', creator: 'Creator', cover: 'COVER'},

];*/

constructor(private spotifyservice: SpotifyService){
  spotifyservice.setLibraryPlaylists(this);
}

ngOnInit(): void {
    // this.spotifyservice.getMyPlaylists();
  }

}


// PlaylistObject[]
