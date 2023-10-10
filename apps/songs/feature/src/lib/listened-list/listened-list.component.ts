import { Component, inject } from '@angular/core';
import { SongsService } from '@microfrontends/songs/data';
import { Song } from '@microfrontends/songs/model';

@Component({
  selector: 'playlist-listened-list',
  templateUrl: './listened-list.component.html',
  styleUrls: ['./listened-list.component.scss'],
})
export class ListenedListComponent {

    songsService = inject(SongsService);
    listened$ = this.songsService.listened$;

    updateSong(song: Song) {
        this.songsService.updateSong(song);
    }
}
