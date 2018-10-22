// common angular modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { formioAppConfig } from '@myapp/app/shared-modules/formio/models/formio-app-config.model';
import { formioAuthConfig } from '@myapp/app/shared-modules/formio/models/formio-auth-config.model';
import { FormioAppConfig, FormioModule as AngularFormioModule } from 'angular-formio';
import { FormioAuth as FormioAuthModule, FormioAuthConfig, FormioAuthService } from 'angular-formio/auth';

@NgModule({
  imports: [CommonModule, AngularFormioModule],
  exports: [AngularFormioModule, FormioAuthModule],
  providers: [
    FormioAuthService,
    { provide: FormioAppConfig, useValue: formioAppConfig },
    { provide: FormioAuthConfig, useValue: formioAuthConfig }
  ]
})
export class FormioModule {}
