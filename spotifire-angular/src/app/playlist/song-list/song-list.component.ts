import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  
  songs: Song[] = [
    new Song(1, 'Sky and Sand', 'Paul Kalkbrenner', 'Sky and Sand', '22/01/19', '4:18'),
    new Song(2, 'Test Title 2', 'Test Author 2', 'Test Album 2', '22/01/19', '4:18'),
    new Song(3, 'Test Title 3', 'Test Author 3', 'Test Album 3', '22/01/19', '4:18'),
    new Song(4, 'Test Title 4', 'Test Author 4', 'Test Album 4', '22/01/19', '4:18'),
    new Song(5, 'Test Title 5', 'Test Author 5', 'Test Album 5', '22/01/19', '4:18'),
    new Song(6, 'Test Title 6', 'Test Author 6', 'Test Album 6', '22/01/19', '4:18'),
    new Song(7, 'Test Title 7', 'Test Author 7', 'Test Album 7', '22/01/19', '4:18'),
    new Song(8, 'Test Title 8', 'Test Author 8', 'Test Album 8', '22/01/19', '4:18'),
    new Song(9, 'Test Title 9', 'Test Author 9', 'Test Album 9', '22/01/19', '4:18'),
    new Song(10, 'Test Title 10', 'Test Author 10', 'Test Album 10', '22/01/19', '4:18'),
    new Song(11, 'Test Title 11', 'Test Author 11', 'Test Album 11', '22/01/19', '4:18'),
    new Song(12, 'Test Title 12', 'Test Author 12', 'Test Album 12', '22/01/19', '4:18'),
    new Song(13, 'Test Title 13', 'Test Author 13', 'Test Album 13', '22/01/19', '4:18'),
    new Song(14, 'Test Title 14', 'Test Author 14', 'Test Album 14', '22/01/19', '4:18'),
    new Song(15, 'Test Title 15', 'Test Author 15', 'Test Album 15', '22/01/19', '4:18'),
    new Song(16, 'Test Title 16', 'Test Author 16', 'Test Album 16', '22/01/19', '4:18'),
  ];
   
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

