import {environment} from "./environments/environment";

import('./bootstrap').catch((err) => console.error(err));
import { setRemoteDefinitions } from "@nx/angular/mf";
import {EnvName} from "./environments/types";

const manifest = environment.name === EnvName.development
  ? '/assets/module-federation.manifest.json'
  : '/assets/prod-module-federation.manifest.json'


fetch(manifest)
  .then((res) => res.json())
  .then((definitions) => setRemoteDefinitions(definitions))
  .then(() => import('./bootstrap').catch((err) => console.error(err)));
