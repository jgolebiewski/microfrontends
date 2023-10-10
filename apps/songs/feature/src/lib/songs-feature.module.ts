import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsDataModule } from "@microfrontends/songs/data";
import { ReactiveFormsModule } from "@angular/forms";
import { SongsUiModule } from "@microfrontends/songs/ui";
import { SongListComponent } from "./song-list/song-list.component";
import { ListenedListComponent } from "./listened-list/listened-list.component";
import { SongFormComponent } from "./song-form/song-form.component";
import { FavouritesListComponent } from "./favourites-list/favourites-list.component";

@NgModule({
  imports: [CommonModule, SongsDataModule, SongsUiModule, ReactiveFormsModule],
  declarations: [
    SongListComponent,
    FavouritesListComponent,
    ListenedListComponent,
    SongFormComponent,
  ],
  exports: [SongListComponent, ListenedListComponent, SongFormComponent, FavouritesListComponent],
})
export class SongsFeatureModule {}
