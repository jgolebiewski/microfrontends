import { Component, ViewEncapsulation } from '@angular/core';
import { SongsFeatureModule } from "@microfrontends/songs/feature";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'microfrontends-songs-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
  standalone: true,
  imports: [
    SongsFeatureModule, RouterLink,

  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class RemoteEntryComponent {
}
