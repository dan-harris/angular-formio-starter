/* tslint:disable */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '@myapp/app/app.module';
import { Environment } from '@myapp/app/shared-modules/environment/models/environment.model';
import { environment } from '@myapp/env/environment';
// add the fetch polyfill (because of safari not supporting fetch until later versions)
import 'whatwg-fetch';

if (environment.PRODUCTION) enableProdMode();

// where to find env settings
const URL_ASSETS_ENV_SETTINGS: string = 'assets/';
const ENVIRONMENT_SETTINGS_GLOBAL: string = 'ENVIRONMENT_SETTINGS_GLOBAL';

// fetch env settings before bootstrap (this stops problems with initialization race conditions)
fetch(`./${URL_ASSETS_ENV_SETTINGS}env.json`)
  .then(response => response.json())
  .then((config: Environment) => {
    // TODO: handle failed config load

    // stuff the config window into a global var for later
    window[ENVIRONMENT_SETTINGS_GLOBAL] = config;

    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      // TODO: add logging
      .catch((error: any) => console.log(error));
  })
  .catch((error: any) => console.log(error));
