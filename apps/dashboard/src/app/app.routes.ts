
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'songs',
    loadChildren: () =>
      loadRemoteModule('songs', './Module').then((m) => m.RemoteEntryModule),
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('login/Module').then((m) => m.RemoteEntryModule),
  // },
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule('login', './Module').then((m) => m.RemoteEntryModule),
  },

];
