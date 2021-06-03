import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {LibraryComponent} from './library/library.component';
import { PlaylistViewComponent} from './playlist/playlist-view/playlist-view.component'

const appRoutes: Routes = [
  {path: '', component: LibraryComponent},
  {path: 'playlist/:id', component: PlaylistViewComponent},
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
