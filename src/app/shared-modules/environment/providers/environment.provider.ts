import { APP_INITIALIZER, Provider } from '@angular/core';
import { Environment } from '@myapp/app/shared-modules/environment/models/environment.model';
import { EnvironmentService } from '@myapp/app/shared-modules/environment/services/environment.service';

/**
 * creates a new environment object from loaded environment settings
 * @param environmentService service for loading environment settings
 */
export function environmentFactory(environmentService: EnvironmentService): () => Promise<Environment> {
  return () => environmentService.load();
}

/**
 * provides a global, lazy-loaded environment object
 */
export const environmentProvider: Provider = {
  provide: APP_INITIALIZER,
  useFactory: environmentFactory,
  deps: [EnvironmentService],
  multi: true
};
