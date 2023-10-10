import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';



import { SongsActions } from './songs.actions';
import { fromSongs } from './songs.selectors';
import { Song } from "@microfrontends/songs/model";

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  private store = inject(Store);

  songs$ = this.store.select(fromSongs.selectAll);

  favourites$ = this.store.select(fromSongs.favourites);

  listened$ = this.store.select(fromSongs.listened);

  getSongs() {
    this.store.dispatch(SongsActions.get());
  }

  updateSong(song: Song) {
    this.store.dispatch(SongsActions.updateSong({song}));
  }
}
