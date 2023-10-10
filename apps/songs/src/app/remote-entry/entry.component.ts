import { Component } from '@angular/core';

@Component({
  selector: 'microfrontends-songs-entry',
  template: `
    remote
    <div>
      <playlist-song-form></playlist-song-form>
    </div>

    <div class="songs">
      <playlist-song-list></playlist-song-list>
      <playlist-favourites-list></playlist-favourites-list>
      <playlist-listened-list></playlist-listened-list>
    </div>
  `,
  styles: [
    `.songs {
      display: grid;
      grid-template-columns: 25vw 25vw 25vw;
    }`
  ]
})
export class RemoteEntryComponent {}
