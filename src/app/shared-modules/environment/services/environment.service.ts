import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment, EnvironmentModel } from '@myapp/app/shared-modules/environment/models/environment.model';
import { environment } from '@myapp/env/environment';
import { Observable } from 'rxjs';

@Injectable()
export class EnvironmentService {
  constructor(private http: HttpClient, private env: EnvironmentModel) {}

  // return the injected global environment settings object
  get configuration(): Environment {
    return this.env as Environment;
  }

  // load the environment settings from json file on server
  load(): Promise<Environment> {
    // retrieve environment settings json
    const environment$: Observable<EnvironmentModel> = this.http.get<EnvironmentModel>(
      `./${environment.URL_ASSETS_ENV_SETTINGS}env.json?${environment.CACHE_BUST_QUERY_STRING}`
    );

    // create promise from env settings call
    const environmentInit: Promise<Environment> = environment$.toPromise().then((env: EnvironmentModel) => {
      // set global object
      Object.assign(this.env, environment, env); // configure properties on the injected object
      return this.env as Environment;
    });

    return environmentInit;
  }
}
