import { Injectable } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-node';
import Auth from '../auth/auth';
import {PlaylistViewComponent} from "../playlist/playlist-view/playlist-view.component";
import axios from "axios";
import {areTypeParametersEqual} from "@angular/compiler-cli/src/ngtsc/incremental/semantic_graph";

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

    let resArray: Array <{name: String, creator: String, cover: String, public: Boolean, id: String}> =
      new Array<{name: String, creator: String, cover: String, public: Boolean, id: String}>
      (myPlaylists.data.items.length)

    for (let i = 0; i < resArray.length; i++){
      resArray[i] = {name: myPlaylists.data.items[i].name, creator: myPlaylists.data.items[i].owner.display_name,
        cover: myPlaylists.data.items[i].images[0].url, public: myPlaylists.data.items[i].public, id: myPlaylists.data.items[i].id};
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

  async getMyTracks(timeRange: String = "medium_term") {
    this.accessToken = localStorage.getItem('accessToken');

    if (!this.accessToken) {
      console.error('No viable Access Token.');
      return;
    }

    const myTracks = await axios
      .get("https://api.spotify.com/v1/me/top/tracks?time_range=" + timeRange, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken
        }
      })

    console.log(myTracks)

    let resArr: Array<{ nr: Number, title: String, artist: String, image: String, album: String, added: String, duration: String, id: String }> =
      new Array<{ nr: Number; title: String; artist: String; image: String; album: String; added: String; duration: String, id: String }>
      (myTracks.data.items.length)

    for (let i = 0; i < resArr.length; i++) {
      let url;
      let artistId = myTracks.data.items[i].artists[0].id;
      let artistPic = await this.getArtistPic(artistId);
      if (artistPic) url = artistPic;

      let millis = myTracks.data.items[i].duration_ms;
      let minutes = Math.floor(millis / 60000);
      let seconds = ((millis % 60000) / 1000).toFixed(0);

      resArr[i] = {
        nr: i + 1, title: myTracks.data.items[i].name, artist: myTracks.data.items[i].artists[0].name, image: url,
        album: myTracks.data.items[i].album.name, added: myTracks.data.items[i].added_at,
        duration: minutes + ":" + (parseInt(seconds) < 10 ? '0' : '') + seconds, id: myTracks.data.items[i].id
      };
    }

    return resArr;
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

  async getUsersPlaylists(userId: String){
    this.accessToken = localStorage.getItem('accessToken');

    if (!this.accessToken) {
      console.error('No viable Access Token.');
      return;
    }

    this.auth.refresh();

    const usersPlaylists = await axios
      .get("https://api.spotify.com/v1/users/" + userId + "/playlists?limit=50", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken
        }
      })

    let publicPlalists = 0;

    for (let i = 0; i < usersPlaylists.data.items.length; i++){
      if (usersPlaylists.data.items[i].public) publicPlalists++;
    }

    let resArray: Array <{name: String, creator: String, cover: String, public: Boolean, id: String}> =
      new Array<{name: String, creator: String, cover: String, public: Boolean, id: String}>
      (publicPlalists)

    let posInArr = 0;

    for (let i = 0; i < usersPlaylists.data.items.length; i++){
      if (usersPlaylists.data.items[i].public) {
        resArray[posInArr] = {
          name: usersPlaylists.data.items[i].name,
          creator: usersPlaylists.data.items[i].owner.display_name,
          cover: usersPlaylists.data.items[i].images[0].url,
          public: usersPlaylists.data.items[i].public,
          id: usersPlaylists.data.items[i].id
        };

        posInArr++;
      }
    }

    return resArray;
  }

  async getUsersFollowedArtists(){
    this.accessToken = localStorage.getItem('accessToken');

    if (!this.accessToken) {
      console.error('No viable Access Token.');
      return;
    }


    const myArtists = await axios
      .get("https://api.spotify.com/v1/me/following?type=artist", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken
        }
      })

    console.log(myArtists)

    let resArray: Array <{name: String, image: String, follower: Number, id: String}> = new Array<{name: String; image: String; follower: Number; id: String}>
    (myArtists.data.artists.items.length)

    for (let i = 0; i < resArray.length; i++){
      let url;
      if (myArtists.data.artists.items[i].images.length > 0) url = myArtists.data.artists.items[i].images[0].url;

      resArray[i] = {name: myArtists.data.artists.items[i].name, image: url,
        follower: myArtists.data.artists.items[i].followers.total, id: myArtists.data.artists.items[i].id};
    }

    return resArray;
  }

  async getPlaylistTracks(playlistId: String) {
    this.accessToken = localStorage.getItem('accessToken');

    let spotifyApi = new SpotifyWebApi({
      clientId: '454d352b3fd84985bea141355d73c17b',
    });

    if (!this.accessToken) {
      console.error('No viable Access Token.');
      return;
    }
    spotifyApi.setAccessToken(this.accessToken);


    const tracks = await axios
      .get("https://api.spotify.com/v1/playlists/" + playlistId + "/tracks", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken
        }
      })

    let resArr: Array<{ nr: Number, title: String, artist: String, image: String, album: String, added: String, duration: String, id: String }> =
      new Array<{ nr: Number; title: String; artist: String; image: String; album: String; added: String; duration: String, id: String }>
      (tracks.data.items.length)

    for (let i = 0; i < resArr.length; i++) {
      let url;
      let artistId = tracks.data.items[i].track.artists[0].id;
      let artistPic = await this.getArtistPic(artistId);
      if (artistPic) url = artistPic;

      let millis = tracks.data.items[i].track.duration_ms;
      let minutes = Math.floor(millis / 60000);
      let seconds = ((millis % 60000) / 1000).toFixed(0);

      resArr[i] = {
        nr: i + 1, title: tracks.data.items[i].track.name, artist: tracks.data.items[i].track.artists[0].name, image: url,
        album: tracks.data.items[i].track.album.name, added: tracks.data.items[i].track.added_at,
        duration: minutes + ":" + (parseInt(seconds) < 10 ? '0' : '') + seconds, id: tracks.data.items[i].track.id
      };
    }

    return resArr;
  }

  async getPlaylistName(playlistId: String){
    this.accessToken = localStorage.getItem('accessToken');

    if (!this.accessToken) {
      console.error('No viable Access Token.');
      return;
    }


    const playlist = await axios
      .get("https://api.spotify.com/v1/playlists/" + playlistId, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken
        }
      })

    return playlist.data.name;
  }

  async getPlaylistCover(playlistId: String){
    this.accessToken = localStorage.getItem('accessToken');

    if (!this.accessToken) {
      console.error('No viable Access Token.');
      return;
    }


    const playlist = await axios
      .get("https://api.spotify.com/v1/playlists/" + playlistId, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken
        }
      })

    return playlist.data.images[0].url;
  }

  async getPlaylistCreator(playlistId: String){
    this.accessToken = localStorage.getItem('accessToken');

    if (!this.accessToken) {
      console.error('No viable Access Token.');
      return;
    }


    const playlist = await axios
      .get("https://api.spotify.com/v1/playlists/" + playlistId, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken
        }
      })

    return playlist.data.owner.display_name;
  }

  async getPlaylistTrackNumber(playlistId: String){
    this.accessToken = localStorage.getItem('accessToken');

    if (!this.accessToken) {
      console.error('No viable Access Token.');
      return;
    }


    const playlist = await axios
      .get("https://api.spotify.com/v1/playlists/" + playlistId, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken
        }
      })

    return playlist.data.tracks.items.length;
  }

  async getPlaylistDuration(playlistId: String) {
    this.accessToken = localStorage.getItem('accessToken');

    if (!this.accessToken) {
      console.error('No viable Access Token.');
      return;
    }


    const tracks = await axios
      .get("https://api.spotify.com/v1/playlists/" + playlistId + "/tracks", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken
        }
      })

    let playlistDuration = 0;

    for (let i = 0; i < tracks.data.items.length; i++) {
      playlistDuration += tracks.data.items[i].track.duration_ms;
    }

    let minutes = Math.floor((playlistDuration / (1000 * 60)) % 60);
    let hours = Math.floor((playlistDuration / (1000 * 60 * 60)) % 24).toFixed(0);


    return hours + ":" + (minutes < 10 ? '0':'') + minutes;
  }

  async getArtistPic(artistId: String){
    this.accessToken = localStorage.getItem('accessToken');

    if (!this.accessToken) {
      console.error('No viable Access Token.');
      return;
    }


    const artist = await axios
      .get("https://api.spotify.com/v1/artists/" + artistId, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.accessToken
        }
      })

    if (artist.data.images.length > 0) return artist.data.images[0].url;
    else return null;
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

  async getProfilePic() {
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

  async getMyUserName(){
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

  async getMyUserId(){
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

    return profile.data.id;
  }
}
