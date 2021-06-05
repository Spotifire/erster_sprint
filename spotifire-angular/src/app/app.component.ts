import { Component } from '@angular/core';
import { SpotifyService } from './services/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spotifire-angular';

  constructor(private spotify: SpotifyService){}

  ngOnInit(){
    this.spotify.instantiatePlayer();
  }
}
