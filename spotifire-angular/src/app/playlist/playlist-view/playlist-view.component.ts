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

    this.load(playlistId)
  }

  async load(playlistId){
    this.songList.songs = await this.spotifyService.getPlaylistTracks(playlistId);
    this.playListName = await this.spotifyService.getPlaylistName(playlistId);
    this.playlistCover = await this.spotifyService.getPlaylistCover(playlistId);
    this.playlistCreator = await this.spotifyService.getPlaylistCreator(playlistId);
    this.playlistTrackNumber = await this.spotifyService.getPlaylistTrackNumber(playlistId);
    this.playlistDuration = await this.spotifyService.getPlaylistDuration(playlistId);
  }

  play(){
    this.spotifyService.shufflePlaylist(this.playlistCover);
  }

  scrollDown(){
    let content = document.body;
    content.scrollIntoView(false);
 }

}
