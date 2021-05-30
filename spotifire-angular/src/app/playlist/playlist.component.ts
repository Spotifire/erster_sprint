import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // edit playlist etc..

}



/*
    API:
        - paging object
            - href: String (Web API Endpoint)
            - items : Array[Object] (req data)
            - limit: Int
            - next: String (Url o next page of items)
            - offset: Int
            - previous
            - total

        - simplified playlist object
            - name: String
            - owner: PublicUserObject
            - public: boolean
            - snapshot_id: String
            - tracks: PlaylistTracksRefObject 
            - type: String
            - uri: String 
            - collabrotaive: Boolean
            - description: String 
            - id: String
            - images: Array[ImageObject]
        
        - track object
            - artists: Array[SimplifiedArtistObject]
            - availabe_markets: Array[String]
            - disc_number: Int
            - duration_ms: Int
            - explicit : Boolean
            - external_urls: ExternalUrlObject 
            - href: String
            - id: String
            - is_local: Boolean
            - is_playable: Boolean
            - linked_from: LinkedTrackObject
            - name: String
            - preview_url: String
            - restrictions: TrackRestrictionsbject 
            - track_number: Int
            - type: String
            - uri: String 

        - episode object 
            - audio_preview_url: String
            - description: String   
            - explicit: Integer
            - href: ExternalUrlObject
            - html_description: String
            - id: String
            - images: String
            - is_externally_hosted: Array[ImageObject]
            - is_playable: Boolean
            - language: Boolean
            - name: Array[String]
            - release_date: String
            - release_date_precision: String
            - restrictions: String
            - resume_point: EpisodeRestrictionObject
            - show: ResumePointObject
            - type: SimplifiedShowObject
            - uri: String


    - GET PLAYLIST LIST
    
        - CURRENT USER: GET https://api.spotify.com/v1/me/playlists
        - A USER: GET https://api.spotify.com/v1/users/{user_id}/playlists // Spotify User ID 
        -  Response: []Simplified Playlist Object, wrapped in paging object, in JSON format 
            

    - CREATE NEW PLAYLIST 

        - POST https://api.spotify.com/v1/me/playlists ? 
        - POST https://api.spotify.com/v1/users/{user_id}/playlists
        - Response: Created Playlist as simplified Playlist Object in JSON
            - (name, public, collaborative, description)
            - empty till tracks are added 


    - GET A PLAYLIST

        - GET https://api.spotify.com/v1/playlists/{playlist_id}
        - Response: PlaylistObject in JSON 


    - CHANGE DETAILS
    
        - PUT https://api.spotify.com/v1/playlists/{playlist_id}
        - Response: 200 OK 


    - GET PLAYLIST ITEMS

        - GET https://api.spotify.com/v1/playlists/{playlist_id}/tracks
        - Response: TrackObjcts, (EpisodeObjects) 

    - ADD ITEM TO PLAYLIST

        - POST https://api.spotify.com/v1/playlists/{playlist_id}/tracks
        - Response: snapshot_id in JSON format -> version of playlist


    - reorder, replace items
    - remove items 
    - cover img 
    
*/