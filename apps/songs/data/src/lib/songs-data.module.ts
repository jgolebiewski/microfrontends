import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { reducer, songsFeatureKey } from "./songs.reducer";
import { EffectsModule } from "@ngrx/effects";
import { SongsEffects } from "./songs.effects";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(songsFeatureKey, reducer),
    EffectsModule.forFeature([SongsEffects])],
})
export class SongsDataModule {
}
