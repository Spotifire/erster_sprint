import {Injectable,Input} from '@angular/core';
import SpotifyWebApi from "spotify-web-api-node";
import Auth from "../auth/auth";


@Injectable()
export class SpotifyService{
  @Input() code: string;
  @Input() auth: Auth;

  accessToken
  testAuth

  constructor(){
    
  }

  ngOnInit() {
    this.accessToken = this.auth.getAuth(this.code);
  }



  searchValueChanged(str: string){
    this.accessToken = localStorage.getItem("accessToken");
    console.log(localStorage.getItem("accessToken"));
    this.searchMusic(str);
  }

  searchMusic(str: string){
    let spotifyApi = new SpotifyWebApi({
      clientId: "454d352b3fd84985bea141355d73c17b",
    })

    if (!this.accessToken) {
      console.error("No viable Access Token.");
      return
    }
    spotifyApi.setAccessToken(this.accessToken)

    spotifyApi.searchTracks(str).then((res : any) => {

      console.log(res)
    }).catch((err : any) => {

      console.log(err)
    })
    
  }
}

