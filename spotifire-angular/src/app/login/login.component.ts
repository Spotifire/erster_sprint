import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  client_id = '454d352b3fd84985bea141355d73c17b'
  redirect_uri = 'http://localhost:4200'
  AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=' + this.client_id + '&response_type=code&redirect_uri=' + this.redirect_uri +
    '&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

}