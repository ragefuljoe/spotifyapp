import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../../models/artist.model';
import { Album } from '../../models/album.model';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
})
export class AlbumComponent implements OnInit{
     
     id: string;
     album: Album[];

     constructor(
         private _spotifyservice: SpotifyService, 
         private _route: ActivatedRoute){

     }

     ngOnInit(){
         this._route.params
             .map(params=>params['id'])
             .subscribe((id)=>{
                 this._spotifyservice.getAlbum(id)
                     .subscribe(album=>{
                         this.album = album;

                     })
             })
     }
}
