import { Component, OnInit } from '@angular/core';
import { SpotifyPlayerService } from '../services/spotify-player.service';

@Component({
  selector: 'app-playbar',
  templateUrl: './playbar.component.html',
  styleUrls: ['./playbar.component.css']
})
export class PlaybarComponent implements OnInit {

  constructor(private spot:SpotifyPlayerService) { }

  ngOnInit(): void {
  }

  test(){
    this.spot.connectPlayer();
  }

  start_stop(){
    this.spot.startOrStopPlayer();
  }

}
