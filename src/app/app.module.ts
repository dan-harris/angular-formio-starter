import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from '@myapp/app/app.routes';
import { CoreModule } from '@myapp/app/core/core.module';
import { EnvironmentModule } from '@myapp/app/shared-modules/environment/environment.module';
import { TranslateModule } from '@myapp/app/shared-modules/translate/translate.module';
import { environment } from '@myapp/env/environment';
import { FormioModule } from 'angular-formio';
import { AppViewComponent } from './core/views/app.view';

@NgModule({
  declarations: [],
  imports: [
    // common angular module (conatins directives, pipes .etc)
    CommonModule,
    // default browser module for Angular bootstrapping
    BrowserModule,
    // http client
    HttpClientModule,
    // set global app routes
    RouterModule.forRoot(routes, {
      enableTracing: !environment.PRODUCTION && environment.LOG_ENABLE_ROUTE_TRACING,
      // preloadingStrategy: AppPreloadingStrategy // TODO: implement this
      initialNavigation: 'enabled'
    }),
    // core app module
    CoreModule,
    // shared/package modules
    EnvironmentModule,
    TranslateModule.forRoot(),
    FormioModule
  ],
  providers: [],
  bootstrap: [AppViewComponent]
})
export class AppModule {}
