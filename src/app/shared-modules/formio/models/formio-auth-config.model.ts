import { AccessRoutes } from '@myapp/app/access/models/access-routes.model';
import { AppRoutes } from '@myapp/app/core/models/app-routes.model';
import { FormioAuthConfig } from 'angular-formio/auth';

/**
 * auth config for formio
 */
export const formioAuthConfig: FormioAuthConfig = {
  login: {
    form: `${AppRoutes.FEATURE_ACCESS}/${AccessRoutes.LOGIN}`
  },
  register: {
    form: `${AppRoutes.FEATURE_ACCESS}/${AccessRoutes.REGISTER}`
  }
};
