import { Component } from '@angular/core';
import Auth from "./auth/auth";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  code = new URLSearchParams(window.location.search).get('code');
  auth = new Auth();
  title = 'spotifire-angular';
}
