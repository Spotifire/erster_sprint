import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import SpotifyWebApi from "spotify-web-api-node";
import {type} from "os";
import {findNamespaceOfIdentifier} from "@angular/compiler-cli/ngcc/src/host/commonjs_umd_utils";
import Auth from "../auth/auth";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-dummy-search',
  templateUrl: './dummy-search.component.html',
  styleUrls: ['./dummy-search.component.css']
})

export class DummySearchComponent {
  constructor() {
  }

  searchValue;
  searchForm: FormGroup = new FormGroup({
    searchValue: new FormControl()
  })




  searchValueChanged(){
    this.searchValue = this.searchForm.get('searchValue');
    this.searchMusic();
  }

  searchMusic(){
    let sentCode = new URLSearchParams(window.location.search).get('code');
    let spotifyApi = new SpotifyWebApi({
      clientId: "454d352b3fd84985bea141355d73c17b",
    })

    let accessToken = new AppComponent().auth

    console.log(accessToken)

    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)

    spotifyApi.searchTracks(this.searchValue).then((res : any) => {
      console.log(res)
    })
  }
}
