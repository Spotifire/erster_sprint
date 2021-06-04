import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LibraryComponent } from './library/library.component';
import { PlaylistViewComponent } from './playlist/playlist-view/playlist-view.component';
import { PodcastViewComponent } from './podcast/podcast-view/podcast-view.component';
import { ArtistViewComponent } from './artist/artist-view/artist-view.component';
import { AlbumViewComponent } from './album/album-view/album-view.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  {path: '', component: LibraryComponent},
  {path: 'playlist/:id', component: PlaylistViewComponent},
  {path: 'podcast/:id', component: PodcastViewComponent},
  {path: 'artist/:id', component: ArtistViewComponent},
  {path: 'album/:id', component: AlbumViewComponent},
  {path: 'profile', component: ProfileComponent},
  //{path: '/user/:id', component: UserComponent},
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
