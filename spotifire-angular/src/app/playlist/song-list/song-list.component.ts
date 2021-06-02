import { Component, OnInit, Input } from '@angular/core';

@Input()

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  @Input() songs: Array<{nr: Number, title: String, artist: String, album: String, added: String, duration: Number, id: String}>

  constructor() { }

  ngOnInit(): void {
  }

  // add songs to playist
}

class Song{
  private nr: Number;
  private title: String;
  private author: String;
  private album: String;
  private hzgfgt: String;
  private duration: String;

  constructor(nr, title, author, album, hzgfgt, duration){
    this.nr = nr;
    this.title = title;
    this.author = author;
    this.album = album;
    this.hzgfgt = hzgfgt;
    this.duration = duration;
  }

}

