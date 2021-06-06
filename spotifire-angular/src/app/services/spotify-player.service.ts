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
  playerid: String;

  accessToken = localStorage.getItem('accessToken');

  constructor() {}

  ngOnInit() {
    this.auth.refresh();
  }

  // Player Instantion Method
  instantiatePlayer(){
    this.createPlayerScripts();
  }

  // Player Connection Method
  async connectPlayer(){
    this.accessToken = localStorage.getItem('accessToken');

    if (!this.accessToken) {
      console.error('No viable Access Token.');
      return;
    }

    this.playerid = document.getElementById('player_id').title;
    console.log('id: '+this.playerid)

    const profile = await axios
    .put("https://api.spotify.com/v1/me/player", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.accessToken,
      },
      json:{
        'device_ids':[
          ''+this.playerid
        ]
      }
    })
  }

  /* 
  
    This method creates scripts which instantiate a spotify player
    instance by using the Spotify Web Player SDK.
  
  */
  private createPlayerScripts(){
    this.accessToken = localStorage.getItem('accessToken');

    if (!this.accessToken) {
      console.error('No viable Access Token.');
      return;
    }

    let script = document.createElement('script');
    script.src = "https://sdk.scdn.co/spotify-player.js";
    document.body.appendChild(script);

    let script2 = document.createElement('script');
    script2.id = 'WebPlayerScript';
    script2.text = 
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

    return;
  }
}
