import { Routes } from '@angular/router';
import { AccessRoutes } from '@myapp/app/access/models/access-routes.model';
import { FormioAuthComponent, FormioAuthLoginComponent, FormioAuthRegisterComponent } from 'angular-formio/auth';

/**
 * route setup
 */
export const routes: Routes = [
  {
    path: AccessRoutes.AUTH,
    component: FormioAuthComponent,
    children: [
      {
        path: '',
        redirectTo: AccessRoutes.LOGIN,
        pathMatch: 'full'
      },
      {
        path: AccessRoutes.LOGIN,
        component: FormioAuthLoginComponent
      },
      {
        path: AccessRoutes.REGISTER,
        component: FormioAuthRegisterComponent
      }
    ]
  }
];
