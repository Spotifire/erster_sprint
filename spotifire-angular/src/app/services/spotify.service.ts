import { Injectable } from '@angular/core';
import SpotifyWebApi from 'spotify-web-api-node';
import Auth from '../auth/auth';

@Injectable()
export class SpotifyService {
 //ts-ignore

 auth: Auth = new Auth();

 accessToken = localStorage.getItem("accessToken");

  constructor() {}

  ngOnInit() {
  }

  login(code){
    this.auth.getAuth(code)
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

            let resArray: Array <{name: String, creator: String, cover:String}> = new Array<{name: String; creator: String; cover: String}>
              (res.body.items.length);

          for (let i = 0; i < res.body.items.length; i++){
            resArray[i] = {name: res.body.items[i].name, creator: res.body.items[i].owner.display_name, cover: res.body.items[i].images[0].url};
          }
          library.playlists = resArray;
        })
      })
      .catch((err: any) => {
        this.auth.refresh()

        console.log(err);
      });
  }
}
