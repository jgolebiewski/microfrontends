import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'standalone',
    loadChildren: () =>
      loadRemoteModule('standalone-app', './Routes').then(
        (m) => m.remoteRoutes
      ),
  },
  {
    path: 'songs',
    loadChildren: () =>
      loadRemoteModule('songs', './Routes').then((m) => m.remoteRoutes),
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
