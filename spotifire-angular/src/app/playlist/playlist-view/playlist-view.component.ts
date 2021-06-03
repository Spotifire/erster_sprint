import {Component, Injectable, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {PlaylistSonglistComponent} from "../playlist-songlist/playlist-songlist.component";
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-playlist-view',
  templateUrl: './playlist-view.component.html',
  styleUrls: ['./playlist-view.component.css']
})
export class PlaylistViewComponent implements OnInit {

  playListName: String;
  playlistCover: String;
  songList: PlaylistSonglistComponent;
  spotifyService = new SpotifyService();

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    let playliestId;
    this.route.paramMap.subscribe((params => {
      playliestId = params.get('id')
    }))

    console.log(playliestId)

    this.songList = new PlaylistSonglistComponent();

    this.spotifyService.setSongList(this, playliestId)
  }

  play(){
    this.spotifyService.shufflePlaylist(this.playlistCover);
  }

}
