import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../services/spotify.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profilePic: String;
  userName: String;

  constructor(private spotifyService: SpotifyService) {
  }

  async load() {
    this.profilePic = await this.spotifyService.loadProfilePic();
    this.userName = await this.spotifyService.getUserName()
  }

  ngOnInit(): void {
    this.load();
  }

}
