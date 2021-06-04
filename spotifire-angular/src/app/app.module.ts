import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // NgIf, NgForOf..
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SpotifyService} from '../app/services/spotify.service';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PlaybarComponent } from './playbar/playbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import Auth from './auth/auth';
import { SearchComponent } from './search/search.component';
import { LibraryComponent } from './library/library.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { PlaylistViewComponent } from './playlist/playlist-view/playlist-view.component';
import { PlaylistsLibraryComponent } from './playlist/playlists-library/playlists-library.component';
import { PlaylistsSidebarComponent } from './playlist/playlists-sidebar/playlists-sidebar.component';
import { PlaylistSonglistComponent } from './playlist/playlist-songlist/playlist-songlist.component';
import { PodcastsLibraryComponent } from './podcast/podcasts-library/podcasts-library.component';
import { PodcastViewComponent } from './podcast/podcast-view/podcast-view.component';
import { ArtistsLibraryComponent } from './artist/artists-library/artists-library.component';
import { ArtistViewComponent } from './artist/artist-view/artist-view.component';
import { AlbumsLibraryComponent } from './album/albums-library/albums-library.component';
import { AlbumViewComponent } from './album/album-view/album-view.component';
import { ProfileComponent } from './profile/profile.component';
import { ArtistMonthlyTopComponent } from './artist/artist-monthly-top/artist-monthly-top.component';
import { TracksMonthlyTopComponent } from './tracks/tracks-monthly-top/tracks-monthly-top.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PlaybarComponent,
    NavbarComponent,
    SearchComponent,
    LibraryComponent,
    LoginComponent,
    PlaylistViewComponent,
    PlaylistsLibraryComponent,
    PlaylistsSidebarComponent,
    PlaylistSonglistComponent,
    PodcastsLibraryComponent,
    PodcastViewComponent,
    ArtistsLibraryComponent,
    ArtistViewComponent,
    AlbumsLibraryComponent,
    AlbumViewComponent,
    ProfileComponent,
    ArtistMonthlyTopComponent,
    TracksMonthlyTopComponent,
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
