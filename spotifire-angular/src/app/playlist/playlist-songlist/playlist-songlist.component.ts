import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playlist-songlist',
  templateUrl: './playlist-songlist.component.html',
  styleUrls: ['./playlist-songlist.component.css']
})
export class PlaylistSonglistComponent implements OnInit {

  @Input() songs: Array<{nr: Number, title: String, artist: String, album: String, added: String, duration: Number, id: String}>

  constructor() { }

  ngOnInit(): void {
  }

}
