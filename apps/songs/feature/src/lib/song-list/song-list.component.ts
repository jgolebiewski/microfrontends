import { Component, inject, OnInit } from '@angular/core';
import { Song } from '@microfrontends/songs/model';
import { SongsService } from '@microfrontends/songs/data';


@Component({
  selector: 'playlist-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss'],
})
export class SongListComponent implements OnInit{

  private songsService = inject(SongsService);

  songs$ = this.songsService.songs$

  ngOnInit(): void {
    this.songsService.getSongs();
  }

  updateSong(song: Song) {
    this.songsService.updateSong(song);
  }
}
