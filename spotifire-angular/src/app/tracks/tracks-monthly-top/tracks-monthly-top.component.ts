import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks-monthly-top',
  templateUrl: './tracks-monthly-top.component.html',
  styleUrls: ['./tracks-monthly-top.component.css']
})
export class TracksMonthlyTopComponent implements OnInit {

  songs: Array<{nr: number, title: string, artist: string, album: string, duration: string}> = [
    {nr: 1, title: 'Title 1', artist: 'Artist 1 feat. Artist 2', album: 'img', duration: '3:14'},
    {nr: 2, title: 'Title 2', artist: 'Artist 1 feat. Artist 2', album: 'img', duration: '3:14'},
    {nr: 3, title: 'Title 3', artist: 'Artist 1 feat. Artist 2', album: 'img', duration: '3:14'},
    {nr: 4, title: 'Title 4', artist: 'Artist 1 feat. Artist 2', album: 'img', duration: '3:14'},
    {nr: 5, title: 'Title 5', artist: 'Artist 1 feat. Artist 2', album: 'img', duration: '3:14'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
