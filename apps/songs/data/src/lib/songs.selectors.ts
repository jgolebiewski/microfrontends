import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SongEntityState, songsFeatureKey } from './songs.reducer';


const selectSongsState = createFeatureSelector<SongEntityState>(songsFeatureKey);

const selectAll = createSelector(selectSongsState, (state) => Object.values(state.entities));

const favourites = createSelector(selectSongsState, (state) => Object.values(state.entities).filter(s => s?.favourite));

const listened = createSelector(selectSongsState, (state) => Object.values(state.entities).filter(s => s?.listened));



export const fromSongs = {
    selectAll, favourites, listened
}