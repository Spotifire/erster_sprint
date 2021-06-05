import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-playbar',
  templateUrl: './playbar.component.html',
  styleUrls: ['./playbar.component.css']
})
export class PlaybarComponent implements OnInit {

  constructor(private spot:SpotifyService) { }

  ngOnInit(): void {
  }

  test(){
    this.spot.connectPlayer();
  }

}
