import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // NgIf, NgForOf..

import { AppComponent } from './app.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SongListComponent } from './playlist/song-list/song-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PlaybarComponent } from './playbar/playbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SongItemComponent } from './playlist/song-list/song-item/song-item.component';
import Auth from './auth/auth';
import { DummySearchComponent } from './dummy-search/dummy-search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    SongListComponent,
    SidebarComponent,
    PlaybarComponent,
    NavbarComponent,
    DummySearchComponent,
    SongItemComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
