import { Injectable } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-node';
import Auth from '../auth/auth';

@Injectable()
export class SpotifyService {
 //ts-ignore
 code: string = new URLSearchParams(window.location.search).get('code');
 auth: Auth = new Auth();

 accessToken = localStorage.getItem("accessToken");

  constructor() {}

  ngOnInit() {
  }

  login(){
    this.auth.getAuth(this.code)
  }

  searchValueChanged(str: string) {
    this.accessToken = localStorage.getItem('accessToken');

    if (str != "") this.searchMusic(str);
  }

  searchMusic(str: string) {
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

  getUserPlaylists() {
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
      })
      .catch((err: any) => {
        this.auth.refresh()

        console.log(err);
      });
  }
}
