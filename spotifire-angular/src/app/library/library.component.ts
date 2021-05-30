import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../services/spotify.service';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

// tslint:disable-next-line: ban-types
playlists: Array<{name: String, creator: String, cover: String}> = [
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
   
];

constructor(private spotifyservice: SpotifyService){

}

ngOnInit(): void {
    // this.spotifyservice.getMyPlaylists();
  }

}


// PlaylistObject[]
