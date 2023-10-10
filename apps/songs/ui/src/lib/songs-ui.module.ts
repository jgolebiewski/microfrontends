import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongComponent } from "./song/song.component";

@NgModule({
  imports: [CommonModule],
  declarations: [SongComponent],
  exports: [
    SongComponent
  ]
})
export class SongsUiModule {}
