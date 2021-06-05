import { Injectable } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-node';
import Auth from '../auth/auth';
import {PlaylistViewComponent} from "../playlist/playlist-view/playlist-view.component";
import axios from "axios";

@Injectable()
export class SpotifyService {
 //ts-ignore

 auth: Auth = new Auth();

 accessToken = localStorage.getItem("accessToken");

  constructor() {}

  ngOnInit() {
    this.auth.refresh();
  }

  login(code){
    this.auth.getAuth(code)
  }

  searchMusic(str: string) {
    if (str == "") return;

    this.accessToken = localStorage.getItem('accessToken')

    let spotifyApi = new SpotifyWebApi({
      clientId: '454d352b3fd84985bea141355d73c17b',
    });

    if (!this.accessToken) {
      console.error('No viable Access Token.');
      return;
    }
    spotifyApi.setAccessToken(this.accessToken);

    spotifyApi
      .searchTracks(str)
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        this.auth.refresh()

        console.log(err);
      });
  }

  async getMyPlaylists() {
    this.accessToken = localStorage.getItem('accessToken');

    if (!this.accessToken) {
      console.error('No viable Access Token.');
      return;
    }

    this.auth.refresh();

    const myPlaylists = await axios
      .get("https://api.spotify.com/v1/me/playlists?limit=50", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken
        }
      })

    let resArray: Array <{name: String, creator: String, cover: String, id: String}> = new Array<{name: String, creator: String, cover: String, id: String}>
    (myPlaylists.data.items.length)

    for (let i = 0; i < resArray.length; i++){
      resArray[i] = {name: myPlaylists.data.items[i].name, creator: myPlaylists.data.items[i].owner.display_name,
        cover: myPlaylists.data.items[i].images[0].url, id: myPlaylists.data.items[i].id};
    }

    return resArray;
  }

  async getMyPodcasts() {
    this.accessToken = localStorage.getItem('accessToken');

    if (!this.accessToken) {
      console.error('No viable Access Token.');
      return;
    }

    const myPodcasts = await axios
      .get("https://api.spotify.com/v1/me/shows", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken
        }
      })

    let resArray: Array <{name: String, creator: String, cover:String, id: String}> = new Array<{name: String; creator: String; cover: String, id: String}>
    (myPodcasts.data.items.length);

    for (let i = 0; i < myPodcasts.data.items.length; i++){
      resArray[i] = {name: myPodcasts.data.items[i].show.name, creator: myPodcasts.data.items[i].publisher,
        cover: myPodcasts.data.items[i].show.images[0].url, id: myPodcasts.data.items[i].show.id};
    }

    return resArray;
  }

  async getMyArtists(timeRange: String = "medium_term") {
    this.accessToken = localStorage.getItem('accessToken');

    if (!this.accessToken) {
      console.error('No viable Access Token.');
      return;
    }

    const myArtists = await axios
      .get("https://api.spotify.com/v1/me/top/artists?time_range=" + timeRange, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken
        }
      })

    let resArray: Array <{name: String, image: String, follower: Number, id: String}> = new Array<{name: String; image: String; follower: Number; id: String}>
    (myArtists.data.items.length)

    for (let i = 0; i < resArray.length; i++){
      resArray[i] = {name: myArtists.data.items[i].name, image: myArtists.data.items[i].images[0].url,
        follower: myArtists.data.items[i].followers.total, id: myArtists.data.items[i].id};
    }

    return resArray;
  }

  async getMyAlbums() {
    this.accessToken = localStorage.getItem('accessToken');

    if (!this.accessToken) {
      console.error('No viable Access Token.');
      return;
    }

    const myAlbums = await axios
      .get("https://api.spotify.com/v1/me/albums", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken
        }
      })

    let resArray: Array <{name: String, artists: String, cover: String, album_type: String, id: String}> = new Array<{name: String; artists: String; cover: String; album_type: String; id: String}>
    (myAlbums.data.items.length)

    for (let i = 0; i < resArray.length; i++){
      resArray[i] = {name: myAlbums.data.items[i].album.name, artists: myAlbums.data.items[i].album.artists[0].name,
        cover: myAlbums.data.items[i].album.images[0].url, album_type: myAlbums.data.items[i].album.album_type, id: myAlbums.data.items[i].album.id};
    }

    return resArray;
  }

  setSongList(playlist: PlaylistViewComponent, playlistId: String){
    this.accessToken = localStorage.getItem('accessToken');

    let spotifyApi = new SpotifyWebApi({
      clientId: '454d352b3fd84985bea141355d73c17b',
    });

    if (!this.accessToken) {
      console.error('No viable Access Token.');
      return;
    }
    spotifyApi.setAccessToken(this.accessToken);


    spotifyApi.getPlaylist(playlistId).then((res : any) => {
      playlist.playListName = res.body.name;
      playlist.playlistCover = res.body.images[0].url;
      console.log(res)

      let resArr: Array<{nr: Number, title: String, artist: String, album: String, added: String, duration: Number, id: String}> =
        new Array<{nr: Number; title: String; artist: String; album: String; added: String; duration: Number, id: String}>
        (res.body.tracks.items.length)

      for (let i = 0; i <resArr.length; i++){
        resArr[i] = {nr: i + 1, title: res.body.tracks.items[i].track.name, artist: res.body.tracks.items[i].track.artists[0].name,
          album: res.body.tracks.items[i].track.album.name, added: res.body.tracks.items[i].track.added_at,
          duration: res.body.tracks.items[i].track.duration_ms / 1000 / 60, id: res.body.tracks.items[i].track.id};

        playlist.songList.songs = resArr;
      }

    }).catch((err : any) => {
      console.log(err)
    })
  }

  shufflePlaylist(playlistId: String){
    this.accessToken = localStorage.getItem('accessToken');

    let spotifyApi = new SpotifyWebApi({
      clientId: '454d352b3fd84985bea141355d73c17b',
    });

    if (!this.accessToken) {
      console.error('No viable Access Token.');
      return;
    }
    spotifyApi.setAccessToken(this.accessToken);

    spotifyApi.play()
  }

  async loadProfilePic() {
    this.accessToken = localStorage.getItem('accessToken');

    if (!this.accessToken) {
      console.error('No viable Access Token.');
      return;
    }

    const profilePic = await axios
      .get("https://api.spotify.com/v1/me", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken
        }
      })
    return profilePic.data.images[0].url;
  }

  async getUserName(){
    this.accessToken = localStorage.getItem('accessToken');

    if (!this.accessToken) {
      console.error('No viable Access Token.');
      return;
    }

    const profile = await axios
      .get("https://api.spotify.com/v1/me", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken
        }
      })

    return profile.data.display_name;
  }

  instantiatePlayer(){
    let script = document.createElement('script');
    script.src = "https://sdk.scdn.co/spotify-player.js";
    document.body.appendChild(script);

    let script2 = document.createElement('script');
    script2.text = 
    'window.onSpotifyWebPlaybackSDKReady = () => {'+
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
    '};';
    document.body.appendChild(script2);
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
