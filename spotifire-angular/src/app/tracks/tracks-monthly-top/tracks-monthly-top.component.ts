import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tracks-monthly-top',
  templateUrl: './tracks-monthly-top.component.html',
  styleUrls: ['./tracks-monthly-top.component.css']
})
export class TracksMonthlyTopComponent implements OnInit {

  @Input() songs: Array<{nr: Number, title: String, artist: String, image: String, album: String, added: String, duration: String, id: String}>

  constructor() {
  }

  ngOnInit(): void {
  }



}
