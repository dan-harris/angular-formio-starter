import { Routes } from '@angular/router';
import { AppRoutes } from '@myapp/app/core/models/app-routes.model';

/**
 * route setup
 */
export const routes: Routes = [
  {
    path: AppRoutes.FEATURE_ACCESS,
    loadChildren: '@myapp/app/access/access.module#AccessModule'
    // data: { hideNavBar: true } as RouteData
  },
  {
    path: '**',
    redirectTo: AppRoutes.FEATURE_ACCESS
  }
];
