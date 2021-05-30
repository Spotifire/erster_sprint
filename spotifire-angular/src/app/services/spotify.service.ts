import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class SpotifyService{
    private searchUrl: string;
    private artistUrl: string;
    private albumsUrl: string;
    private albumUrl: string;

    constructor(private http: HttpClient){
    }

    // tslint:disable-next-line: typedef
    searchMusic(str: string, type= 'artist'){
        this.http.get('https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US')
        .pipe(map(data => {})).subscribe(result => {
          console.log(result);
        });
    }

    // tslint:disable-next-line: typedef
    getMyPlaylists(){
      this.http.get('https://api.spotify.com/v1/me/playlists')
      .pipe(map(data => {})).subscribe(result => {
        console.log(result);
      });
  }
}

