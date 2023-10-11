
import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { RemoteEntryComponent } from "./app/remote-entry/entry.component";


// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));

bootstrapApplication(RemoteEntryComponent, appConfig).catch((err) =>
  console.error(err)
);
