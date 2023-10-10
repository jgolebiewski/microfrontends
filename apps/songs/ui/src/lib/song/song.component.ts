import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Song } from '@microfrontends/songs/model';

@Component({
  selector: 'playlist-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SongComponent {

  @Input()
  song: Song | undefined;

  @Output()
  listenedEv = new EventEmitter<Song>();

  @Output()
  favouriteEv = new EventEmitter<Song>();

  onListened() {
    if (!this.song) {
      throw Error('No song provided')
    }
    this.listenedEv.emit({...this.song, listened: !this.song.listened});
  }

  onFavourite() {
    if (!this.song) {
      throw Error('No song provided')
    }
    this.favouriteEv.emit({...this.song, favourite: !this.song.favourite});
  }
}
