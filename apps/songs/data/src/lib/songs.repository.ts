import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Song } from "@microfrontends/songs/model";


@Injectable({
    providedIn: 'root'
})
export class SongsRepository {

    private httpClient = inject(HttpClient);

    private readonly api = 'http://localhost:3004/api'
    getSongs(): Observable<Song[]> {
        return this.httpClient.get<Song[]>(this.api + '/playlist');
    }

    updateSong(song: Song): Observable<Song> {
        return this.httpClient.put<Song>(this.api + '/playlist/' + song.id, song);
    }

    addSong(song: Song): Observable<Song> {
        return this.httpClient.post<Song>(this.api + '/playlist', song);
    }
}
