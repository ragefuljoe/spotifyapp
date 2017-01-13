import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../models/artist.model';

@Component({
  selector: 'search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
    constructor(private _spotifyservice: SpotifyService){}

    searchStr: string;
    searchRes: Artist[];

    searchMusic(){
        this._spotifyservice.searchMusic(this.searchStr)
            .subscribe(res=>{
                this.searchRes = res.artists.items;
            })
        // console.log(this.searchStr);
    }
}
