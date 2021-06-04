import { Injectable } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-node';
import Auth from '../auth/auth';
import {PlaylistViewComponent} from "../playlist/playlist-view/playlist-view.component";

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

    let spotifyApi = new SpotifyWebApi({
      clientId: '454d352b3fd84985bea141355d73c17b',
    });

    if (!this.accessToken) {
      console.error('No viable Access Token.');
      return;
    }
    spotifyApi.setAccessToken(this.accessToken);

    spotifyApi
      .getMe()
      .then((res: any) => {
        console.log(res);

        let userId = res.body.id;
        spotifyApi
          .getUserPlaylists(userId).then((res : any) => {
          console.log(res)

            let resArray: Array <{name: String, creator: String, cover:String, id: String}> = new Array<{name: String; creator: String; cover: String, id: String}>
              (res.body.items.length);

          for (let i = 0; i < res.body.items.length; i++){
            resArray[i] = {name: res.body.items[i].name, creator: res.body.items[i].owner.display_name,
              cover: res.body.items[i].images[0].url, id: res.body.items[i].id};
          }
          library.playlists = resArray;
        })
      })
      .catch((err: any) => {

        this.auth.refresh()
        this.setLibraryPlaylists(library);

      });
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
}
