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

  setLibraryPlaylists(library): Array<any> {
    this.accessToken = localStorage.getItem('accessToken');

    if (!this.accessToken) {
      console.error('No viable Access Token.');
      return;
    }
    axios
      .get("https://api.spotify.com/v1/me/playlists?limit=50", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken
        }
      })
      .then(res => {

        console.log(res)
        let resArray: Array <{name: String, creator: String, cover: String, id: String}> = new Array<{name: String, creator: String, cover: String, id: String}>
        (res.data.items.length)

        for (let i = 0; i < resArray.length; i++){
          let url;
          if (res.data.items[i].images.length > 0) url = res.data.items[i].images[0].url;

          resArray[i] = {name: res.data.items[i].name, creator: res.data.items[i].owner.display_name,
            cover: url, id: res.data.items[i].id};
        }

        library.playlists = resArray;
      })
      .catch((err : any) => {

        this.auth.refresh();
        this.setLibraryPlaylists(this);
        //window.location = "/"
      })
  }

  setLibraryPodcasts(library): Array<any> {
    this.accessToken = localStorage.getItem('accessToken');

    if (!this.accessToken) {
      console.error('No viable Access Token.');
      return;
    }

    axios
      .get("https://api.spotify.com/v1/me/shows", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken
        }
      })
      .then(res => {

        console.log(res)
        let resArray: Array <{name: String, creator: String, cover:String, id: String}> = new Array<{name: String; creator: String; cover: String, id: String}>
        (res.data.items.length);

        for (let i = 0; i < res.data.items.length; i++){
          resArray[i] = {name: res.data.items[i].show.name, creator: res.data.items[i].publisher,
            cover: res.data.items[i].show.images[0].url, id: res.data.items[i].show.id};
        }
        library.podcasts = resArray;
      })
      .catch(() => {
        // @ts-ignore
        //window.location = "/"
      })
  }

  setLibraryArtists(library): Array<any> {
    this.accessToken = localStorage.getItem('accessToken');

    if (!this.accessToken) {
      console.error('No viable Access Token.');
      return;
    }

    axios
      .get("https://api.spotify.com/v1/me/top/artists", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken
        }
      })
      .then(res => {

        console.log(res)
        let resArray: Array <{name: String, image: String, follower: Number, id: String}> = new Array<{name: String; image: String; follower: Number; id: String}>
        (res.data.items.length)

        for (let i = 0; i < resArray.length; i++){
          resArray[i] = {name: res.data.items[i].name, image: res.data.items[i].images[0].url,
            follower: res.data.items[i].followers.total, id: res.data.items[i].id};
        }

        library.artists = resArray;
      })
      .catch((err : any) => {
        //window.location = "/"
      })
  }

  setLibraryAlbums(library): Array<any> {
    this.accessToken = localStorage.getItem('accessToken');

    if (!this.accessToken) {
      console.error('No viable Access Token.');
      return;
    }

    axios
      .get("https://api.spotify.com/v1/me/albums", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken
        }
      })
      .then(res => {

        console.log(res)
        let resArray: Array <{name: String, artists: String, cover: String, album_type: String, id: String}> = new Array<{name: String; artists: String; cover: String; album_type: String; id: String}>
        (res.data.items.length)

        for (let i = 0; i < resArray.length; i++){
          resArray[i] = {name: res.data.items[i].album.name, artists: res.data.items[i].album.artists[0].name,
            cover: res.data.items[i].album.images[0].url, album_type: res.data.items[i].album.album_type, id: res.data.items[i].album.id};
        }

        library.albums = resArray;
      })
      .catch((err : any) => {
        console.log(err)
        //window.location = "/"
      })
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

  loadProfile(){}
}
