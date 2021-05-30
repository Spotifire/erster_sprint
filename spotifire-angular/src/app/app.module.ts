import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // NgIf, NgForOf..
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SpotifyService} from '../app/services/spotify.service';

import { AppComponent } from './app.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SongListComponent } from './playlist/song-list/song-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PlaybarComponent } from './playbar/playbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SongItemComponent } from './playlist/song-list/song-item/song-item.component';
import Auth from './auth/auth';
import { SearchComponent } from './search/search.component';
import { LibraryComponent } from './library/library.component';
import { AppRoutingModule } from './app-routing.module';
import { PlaylistOverviewComponent } from './sidebar/playlist-overview/playlist-overview.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    SongListComponent,
    SidebarComponent,
    PlaybarComponent,
    NavbarComponent,
    SongItemComponent,
    SearchComponent,
    LibraryComponent,
    PlaylistOverviewComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
