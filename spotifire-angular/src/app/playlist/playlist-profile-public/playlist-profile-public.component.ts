import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-playlist-profile-public',
  templateUrl: './playlist-profile-public.component.html',
  styleUrls: ['./playlist-profile-public.component.css']
})
export class PlaylistProfilePublicComponent implements OnInit {

  @Input() public_playlists: Array<{name: String, creator: String, cover: String, public: Boolean, id: String}>;

  constructor() { }

  ngOnInit(): void {
  }

}
