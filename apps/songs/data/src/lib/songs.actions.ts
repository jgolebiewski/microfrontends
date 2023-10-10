import { createAction, props } from '@ngrx/store';
import { Song } from "@microfrontends/songs/model";


const module = '[SONGS]';

const get = createAction(`${module} get`);
const load = createAction(`${module} load`);
const loaded = createAction( `${module} loaded`, props<{songs: Song[]}>())

const updateSong = createAction(`${module} update song`, props<{song: Song}>());
const updatedSong = createAction(`${module} updated song`, props<{song: Song}>());

const addSong = createAction(`${module} add song`, props<{song: Song}>());

export const SongsActions = {
    get, load, loaded, updateSong, updatedSong, addSong
}

export const PublicSongActions = {
    get, load, loaded, updateSong, addSong
}
