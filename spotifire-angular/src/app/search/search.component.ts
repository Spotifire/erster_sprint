import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  searchStr;

  // tslint:disable-next-line: typedef
  searchMusic(){
    this.spotifyService.searchMusic(this.searchStr);
  }

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }

}
