import { Component } from '@angular/core';
import { SpotifyPlayerService } from './services/spotify-player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spotifire-angular';

  constructor(private spotifyplayer: SpotifyPlayerService){}

  ngOnInit(){
    this.spotifyplayer.instantiatePlayer();
  }
}
