import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcasts-library',
  templateUrl: './podcasts-library.component.html',
  styleUrls: ['./podcasts-library.component.css']
})
export class PodcastsLibraryComponent implements OnInit {

  podcasts: Array<{name: String, cover: String, creator: String}> = [
    {name: 'Podcast', cover: 'Cover', creator: 'Author'},
    {name: 'Podcast', cover: 'Cover', creator: 'Author'},
    {name: 'Podcast', cover: 'Cover', creator: 'Author'},
    {name: 'Podcast', cover: 'Cover', creator: 'Author'},
    {name: 'Podcast', cover: 'Cover', creator: 'Author'},
    {name: 'Podcast', cover: 'Cover', creator: 'Author'},
    {name: 'Podcast', cover: 'Cover', creator: 'Author'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
