import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-playlists-sidebar',
  templateUrl: './playlists-sidebar.component.html',
  styleUrls: ['./playlists-sidebar.component.css']
})
export class PlaylistsSidebarComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) {}


  ngOnInit(): void {
    this.spotifyService.setLibraryPlaylists(this);
  }

  playlists: Array<{ name: String; creator: String; cover: String, id:String }>

}
