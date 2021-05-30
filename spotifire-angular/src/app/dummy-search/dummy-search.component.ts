import {Component, Input, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import SpotifyWebApi from "spotify-web-api-node";
import Auth from "../auth/auth";

@Component({
  selector: 'app-dummy-search',
  templateUrl: './dummy-search.component.html',
  styleUrls: ['./dummy-search.component.css']
})

export class DummySearchComponent implements OnInit {
  @Input() code: string;
  @Input() auth: Auth;


  accessToken
  searchValue
  searchForm

  constructor(fb: FormBuilder) {
    this.searchForm = fb.group({
      searchValue: fb.control('', Validators.required)
    })
  }

  ngOnInit() {
    this.accessToken = this.auth.getAuth(this.code);
  }



  searchValueChanged(){
    this.accessToken = localStorage.getItem("accessToken");

    this.searchMusic();
  }

  searchMusic(){
    let spotifyApi = new SpotifyWebApi({
      clientId: "454d352b3fd84985bea141355d73c17b",
    })

    if (!this.accessToken) return
    spotifyApi.setAccessToken(this.accessToken)

    console.log(this.searchForm.get("searchValue").value)
    spotifyApi.searchTracks(this.searchForm.get('searchValue').value).then((res : any) => {

      console.log(res)
    }).catch((err : any) => {

      console.log(err)
    })
  }
}
