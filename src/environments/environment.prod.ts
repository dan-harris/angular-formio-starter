/**
 * this file can be replaced during build by using the `fileReplacements` array.
 * `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
 * the list of file replacements can be found in `angular.json`.
 */
import { Environment } from '@myapp/app/shared-modules/environment/models/environment.model';
/*
 * used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.
 */
import 'core-js/es7/reflect';
/*
 * in development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
import 'zone.js/dist/zone-error'; // included with Angular CLI.
import processEnv from '../../.env.process.json';

/**
 * get versions from env vars
 */
const PROJECT_VERSION: string = processEnv && processEnv.PACKAGE_VERSION ? processEnv.PACKAGE_VERSION : '0.0.0-alpha';
const BUILD_NUMBER: string = processEnv && processEnv.BUILD_BUILDNUMBER ? processEnv.BUILD_BUILDNUMBER : '00000000.0';

/**
 * app wide static environment settings
 */
export const environment: Environment = {
  // angular production flag
  PRODUCTION: false,
  // auth settings
  AUTH_STORAGE: localStorage,
  AUTH_STORAGE_KEY: 'myappAuth',
  AUTH_PUBLIC_ROUTE: ['access'],
  AUTH_DEFAULT_URL: '',
  AUTH_CHECK_DELAY: 1000,
  AUTH_RENEW_DELAY: 21600,
  // formio settings
  FORMIO_APP_URL: '',
  FORMIO_API_URL: '',
  // internal urls
  URL_ASSETS_I18N: 'assets/i18n/',
  URL_ASSETS_ENV_SETTINGS: 'assets/',
  // cache bust string
  CACHE_BUST_QUERY_STRING: `${PROJECT_VERSION}.${BUILD_NUMBER}`,
  // i18n language for text translation
  I18N_DEFAULT_LANGUAGE: 'en',
  I18N_DEFAULT_LANGUAGE_CULTURE: 'en-AU',
  I18N_LANGUAGES_AVAILABLE: ['en', 'en-AU', 'en-US'],
  // logging flags
  LOG_ENABLE_ROUTE_TRACING: false,
  LOG_ENABLE_APP_EXCEPTIONS: false,
  LOG_ENABLE_NGXS_DEVTOOLS: true,
  LOG_ENABLE_NGXS_CONSOLE_LOG: false,
  // app toast
  APP_TOAST_DEFAULT_TIMEOUT: 5000,
  // text default lengths
  DEFAULT_FIELD_TEXT_MAX_LENGTH: 100
};
