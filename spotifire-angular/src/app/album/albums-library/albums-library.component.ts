import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums-library',
  templateUrl: './albums-library.component.html',
  styleUrls: ['./albums-library.component.css']
})
export class AlbumsLibraryComponent implements OnInit {

  albums: Array<{name: String, artists: String, cover: String, album_type: String}> = [
    {name: 'Album', artists: 'Larry & Timmy', cover: 'img', album_type: 'Album'},
    {name: 'Album', artists: 'Larry & Timmy', cover: 'img', album_type: 'Single'},
    {name: 'Album', artists: 'Larry & Timmy', cover: 'img', album_type: 'Compilation'},
    {name: 'Album', artists: 'Larry & Timmy', cover: 'img', album_type: 'Album'},
    {name: 'Album', artists: 'Larry & Timmy', cover: 'img', album_type: 'Single'},
    {name: 'Album', artists: 'Larry & Timmy', cover: 'img', album_type: 'Compilation'},
    {name: 'Album', artists: 'Larry & Timmy', cover: 'img', album_type: 'Album'},
    {name: 'Album', artists: 'Larry & Timmy', cover: 'img', album_type: 'Single'},
    {name: 'Album', artists: 'Larry & Timmy', cover: 'img', album_type: 'Compilation'}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
