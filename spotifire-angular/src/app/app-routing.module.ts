import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {LibraryComponent} from './library/library.component';
import {PlaylistComponent} from './playlist/playlist.component';

const appRoutes: Routes = [
  {path: '', component: LibraryComponent},
  {path: 'playlist/:id', component: PlaylistComponent},
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
