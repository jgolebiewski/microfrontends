import { Component, inject } from '@angular/core';
import { SongsService } from "@microfrontends/songs/data";
import { Song } from "@microfrontends/songs/model";



@Component({
  selector: 'playlist-favourites-list',
  templateUrl: './favourites-list.component.html',
  styleUrls: ['./favourites-list.component.scss'],
})
export class FavouritesListComponent {

  private songsService = inject(SongsService);

  favourites$ = this.songsService.favourites$

  updateSong(song: Song) {
    this.songsService.updateSong(song);
  }
}
