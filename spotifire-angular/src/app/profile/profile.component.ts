import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../services/spotify.service";
import {TracksMonthlyTopComponent} from "../tracks/tracks-monthly-top/tracks-monthly-top.component";
import {PlaylistProfilePublicComponent} from "../playlist/playlist-profile-public/playlist-profile-public.component";
import {FollowProfileFollowingComponent} from "../follow/follow-profile-following/follow-profile-following.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profilePic: String;
  userName: String;
  topTrackList: TracksMonthlyTopComponent = new TracksMonthlyTopComponent();
  publicPlaylists: PlaylistProfilePublicComponent = new PlaylistProfilePublicComponent();
  followingArtist: FollowProfileFollowingComponent = new FollowProfileFollowingComponent();

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit(): void {
    this.load();
  }

  async load() {
    let userId = await this.spotifyService.getMyUserId();

    this.profilePic = await this.spotifyService.getProfilePic();
    this.userName = await this.spotifyService.getMyUserName();
    this.topTrackList.songs = await this.spotifyService.getMyTracks();
    this.publicPlaylists.public_playlists = await this.spotifyService.getUsersPlaylists(userId);
    this.followingArtist.artists = await this.spotifyService.getUsersFollowedArtists();
  }



}
