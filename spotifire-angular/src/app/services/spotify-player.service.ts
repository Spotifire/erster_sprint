import { Injectable } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-node';
import Auth from '../auth/auth';
import {PlaylistViewComponent} from "../playlist/playlist-view/playlist-view.component";
import axios from "axios";

@Injectable({
  providedIn: 'root',
})
export class SpotifyPlayerService {
  auth: Auth = new Auth();
  playerid: any;

  accessToken = localStorage.getItem('accessToken');

  constructor() {}

  ngOnInit() {
    this.auth.refresh();
  }

  async instantiatePlayer(){
    let script = document.createElement('script');
    script.src = "https://sdk.scdn.co/spotify-player.js";
    document.body.appendChild(script);

    let script2 = document.createElement('script');
    script2.id = 'WebPlayerScript';
    script2.text = 
    'var player_id;\n'+
    'window.onSpotifyWebPlaybackSDKReady = () => {\n'+
      '\tconst token = \''+this.accessToken+'\';\n'+
      '\tconst player = new Spotify.Player({\n'+
        '\t\tname: \'Web Playback SDK Quick Start Player\',\n'+
        '\t\tgetOAuthToken: cb => { cb(token); }\n'+
      '\t});\n\n'+
      '\tplayer.addListener(\'initialization_error\', ({ message }) => { console.error(message); });\n'+
      '\tplayer.addListener(\'authentication_error\', ({ message }) => { console.error(message); });\n'+
      '\tplayer.addListener(\'account_error\', ({ message }) => { console.error(message); });\n'+
      '\tplayer.addListener(\'playback_error\', ({ message }) => { console.error(message); });\n'+
      '\tplayer.addListener(\'player_state_changed\', state => { console.log(state); });\n\n'+
    
      // Ready
      '\tplayer.addListener(\'ready\', ({ device_id }) => {\n'+
        '\t\tdocument.getElementById(\'player_id\').title = device_id;\n'+
        '\t\tconsole.log(\'Ready with Device ID\', device_id);\n'+
      '\t});\n\n'+
    
      // Not Ready
      '\tplayer.addListener(\'not_ready\', ({ device_id }) => {\n'+
        '\t\tconsole.log(\'Device ID has gone offline\', device_id);\n'+
      '\t});\n\n'+
    
      // Connect to the player!
      '\tplayer.connect();\n'+
    '};';
    
    /* 'window.onSpotifyWebPlaybackSDKReady = () => {'+
      'var player = new Spotify.Player({'+
        'name: \'Test1337\','+
        'getOAuthToken: callback => {'+
          '(\''+this.accessToken+'\');'+
        '},'+
        'volume: 0.5});'+
      'console.log(player);'+
      'player.connect().then(success => {'+
        'console.log(success);'+
      '});'+
      'player.getCurrentState().then(state => {if (!state) {console.error(\'User is not playing music through the Web Playback SDK\');return;}let {current_track,next_tracks: [next_track]} = state.track_window;console.log(\'Currently Playing\', current_track);console.log(\'Playing Next\', next_track);});'+
    '};'; */
    document.body.appendChild(script2);

    this.playerid = document.getElementById('player_id').title;
  }

  async connectPlayer(){
    this.accessToken = localStorage.getItem('accessToken');

    if (!this.accessToken) {
      console.error('No viable Access Token.');
      return;
    }

    const player = await axios
    .get("https://api.spotify.com/v1/me/player/devices", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken
        }
    })
    console.log(player.data);
  }

  play(){

  }
}
