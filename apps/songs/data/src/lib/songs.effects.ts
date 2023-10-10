import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map,  switchMap } from 'rxjs';
import { SongsActions } from './songs.actions';
import { SongsRepository } from './songs.repository';

@Injectable()
export class SongsEffects {
    getSongs$ = createEffect(() => this.actions$.pipe(
        ofType(SongsActions.get),
        switchMap(() => this.repository.getSongs()),
        map(songs => SongsActions.loaded({songs}))
    ));

    updateSong$ = createEffect(() => this.actions$.pipe(
        ofType(SongsActions.updateSong),
        switchMap(({song}) => this.repository.updateSong(song)),
        map((song) => SongsActions.updatedSong({song}))
    ))

    addSong$ = createEffect(() => this.actions$.pipe(
        ofType(SongsActions.addSong),
        switchMap(({song}) => this.repository.addSong(song)),
        map(() => SongsActions.get())
    ))
    constructor(private actions$: Actions, private repository: SongsRepository) {
    }
}