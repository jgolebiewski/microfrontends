import { createReducer, Action, on } from '@ngrx/store';
import { SongsActions } from './songs.actions';
import { Song } from "@microfrontends/songs/model";
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const songsFeatureKey = 'SONGS';
export interface SongsState {
    loadStatus: 'NOT_LOADED' | 'LOADING' | 'LOADED';
    data: Song[];
}

export interface SongEntityState extends EntityState<Song> {
    loadStatus: 'NOT_LOADED' | 'LOADING' | 'LOADED';
}

export const adapter: EntityAdapter<Song> = createEntityAdapter();

export const initialState = adapter.getInitialState({
    loadStatus: 'NOT_LOADED'
})
export const _initialState: SongsState = {
    loadStatus: 'NOT_LOADED',
    data: [],
};

const SongsReducer = createReducer(initialState,
    // on(SongsActions.load, (state) => ({
    //     ...state, loadStatus: 'LOADING'
    // })),
    on(SongsActions.load, (state) => {
        return adapter.removeAll({...state, loadStatus: 'LOADING'})
    }),

    on(SongsActions.loaded, (state, {songs}) => {
        return adapter.setAll(songs, {...state, loadStatus: 'LOADED'})
    }),

    on(SongsActions.updatedSong, (state, {song}) => {
      return adapter.upsertOne(song, state);
    })
    // on(SongsActions.loaded, (state, {songs}) => ({
    //     ...state, data: songs, loadStatus: 'LOADED'
    // })),
    //
    // on(SongsActions.updatedSong, (state, {song}) => {
    //     const idx = state.data.map(s => s.id === song.id ? song : s);
    //
    //     return {...state, data: idx}
    // })

    );


export function reducer(state: SongEntityState | undefined, action: Action) {
    return SongsReducer(state, action);
}
