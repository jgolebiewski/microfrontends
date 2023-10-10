import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Actions as SongsActions} from '@microfrontends/songs/data';
import { Song } from '@microfrontends/songs/model';


@Component({
  selector: 'playlist-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.scss'],
})
export class SongFormComponent {

  fb = inject(NonNullableFormBuilder);

  store = inject(Store);
  form = this.fb.group({
    artist: '',
    track: '',
    listened: false,
    favourite: false,
    name: '_not_important_'
  })

  addSong() {
    console.log(this.form.value)
    const values = this.form.value;
    const song = {...values} as Song;
    this.store.dispatch(SongsActions.addSong({song}) )
  }
}
