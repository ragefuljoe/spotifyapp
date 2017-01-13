import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../../models/artist.model';
import { Album } from '../../models/album.model';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html',
  styles: [`
    .artist-thumb{
        width: 95px;
        height: auto;
        margin-left: 10px;
    }
  `]
})
export class ArtistComponent implements OnInit{
     
     id: string;
     artist: Artist[];
     albums: Album[];

     constructor(
         private _spotifyservice: SpotifyService, 
         private _route: ActivatedRoute){

     }

     ngOnInit(){
         this._route.params
             .map(params=>params['id'])
             .subscribe((id)=>{
                 this._spotifyservice.getArtist(id)
                     .subscribe(artist=>{
                         this.artist = artist;

                     })
                 this._spotifyservice.getAlbums(id)
                     .subscribe(albums=>{
                         this.albums = albums.items;
                     })
             })
     }
}
