import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PlaylistSonglistComponent} from '../playlist-songlist/playlist-songlist.component';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-playlist-view',
  templateUrl: './playlist-view.component.html',
  styleUrls: ['./playlist-view.component.css']
})
export class PlaylistViewComponent implements OnInit {

  playListName: String;
  playlistCover: String;
  playlistCreator: String;
  playlistTrackNumber: Number;
  playlistDuration: String;
  songList: PlaylistSonglistComponent;
  spotifyService = new SpotifyService();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let playlistId;
    this.route.paramMap.subscribe((params => {
      playlistId = params.get('id');
    }));

    console.log(playlistId);

    this.songList = new PlaylistSonglistComponent();

    this.spotifyService.setSongList(this, playlistId);
  }

  play(){
    this.spotifyService.shufflePlaylist(this.playlistCover);
  }

}
