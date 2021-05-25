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

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    SongListComponent,
    SidebarComponent,
    PlaybarComponent,
    NavbarComponent,
    SongItemComponent

  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
