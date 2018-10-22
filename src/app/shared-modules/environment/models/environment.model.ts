import { environment } from '@myapp/env/environment';

// get the pre-cached env settings
const ENVIRONMENT_SETTINGS_GLOBAL: string = 'ENVIRONMENT_SETTINGS_GLOBAL';

export class EnvironmentModel implements Environment {
  // angular production flag
  PRODUCTION: boolean;
  // auth creds
  AUTH_CLIENT_ID: string;
  AUTH_DOMAIN: string;
  AUTH_RESPONSE_TYPE: string;
  AUTH_AUDIENCE: string;
  AUTH_REDIRECT_URI: string;
  AUTH_SCOPE: string;
  AUTH_LOGOUT_REDIRECT_URI: string;
  // auth settings
  AUTH_STORAGE: Storage;
  AUTH_STORAGE_KEY: string;
  AUTH_PUBLIC_ROUTE: Array<string>;
  AUTH_DEFAULT_URL: string;
  AUTH_CHECK_DELAY: number;
  AUTH_RENEW_DELAY: number;
  // formio settings
  FORMIO_APP_URL: string;
  FORMIO_API_URL: string;
  // external urls
  // internal urls
  URL_ASSETS_I18N: string;
  URL_ASSETS_ENV_SETTINGS: string;
  // cache bust string
  CACHE_BUST_QUERY_STRING: string;
  // i18n language for text translation
  I18N_DEFAULT_LANGUAGE: string;
  I18N_DEFAULT_LANGUAGE_CULTURE: string;
  I18N_LANGUAGES_AVAILABLE: Array<string>;
  // logging flags
  LOG_ENABLE_ROUTE_TRACING: boolean;
  LOG_ENABLE_APP_EXCEPTIONS: boolean;
  LOG_ENABLE_NGXS_DEVTOOLS: boolean;
  LOG_ENABLE_NGXS_CONSOLE_LOG: boolean;
  // app toast
  APP_TOAST_DEFAULT_TIMEOUT: number;
  // text default lengths
  DEFAULT_FIELD_TEXT_MAX_LENGTH: number;

  constructor() {
    // get the globally stored env settings
    const storedEnv: Environment = window[ENVIRONMENT_SETTINGS_GLOBAL] ? window[ENVIRONMENT_SETTINGS_GLOBAL] : {};
    // mash globals with static settings
    const env: Environment = { ...environment, ...storedEnv };
    // set class properties
    this.setProperties(env);
  }

  /**
   * helper function to set the properties of class
   */
  private setProperties(env: Environment): void {
    // angular production flag
    this.PRODUCTION = env.PRODUCTION;
    // auth creds
    this.AUTH_CLIENT_ID = env.AUTH_CLIENT_ID;
    this.AUTH_DOMAIN = env.AUTH_DOMAIN;
    this.AUTH_RESPONSE_TYPE = env.AUTH_RESPONSE_TYPE;
    this.AUTH_AUDIENCE = env.AUTH_AUDIENCE;
    this.AUTH_REDIRECT_URI = env.AUTH_REDIRECT_URI;
    this.AUTH_SCOPE = env.AUTH_SCOPE;
    this.AUTH_LOGOUT_REDIRECT_URI = env.AUTH_LOGOUT_REDIRECT_URI;
    // auth settings
    this.AUTH_STORAGE = env.AUTH_STORAGE;
    this.AUTH_STORAGE_KEY = env.AUTH_STORAGE_KEY;
    this.AUTH_PUBLIC_ROUTE = env.AUTH_PUBLIC_ROUTE;
    this.AUTH_DEFAULT_URL = env.AUTH_DEFAULT_URL;
    this.AUTH_CHECK_DELAY = env.AUTH_CHECK_DELAY;
    this.AUTH_RENEW_DELAY = env.AUTH_RENEW_DELAY;
    // formio settings
    this.FORMIO_APP_URL = env.FORMIO_APP_URL;
    this.FORMIO_API_URL = env.FORMIO_API_URL;
    // external urls
    // internal urls
    this.URL_ASSETS_I18N = env.URL_ASSETS_I18N;
    this.URL_ASSETS_ENV_SETTINGS = env.URL_ASSETS_ENV_SETTINGS;
    // cache bust string
    this.CACHE_BUST_QUERY_STRING = env.CACHE_BUST_QUERY_STRING;
    // i18n language for text translation
    this.I18N_DEFAULT_LANGUAGE = env.I18N_DEFAULT_LANGUAGE;
    this.I18N_DEFAULT_LANGUAGE_CULTURE = env.I18N_DEFAULT_LANGUAGE_CULTURE;
    this.I18N_LANGUAGES_AVAILABLE = env.I18N_LANGUAGES_AVAILABLE;
    // logging flags
    this.LOG_ENABLE_ROUTE_TRACING = env.LOG_ENABLE_ROUTE_TRACING;
    this.LOG_ENABLE_APP_EXCEPTIONS = env.LOG_ENABLE_APP_EXCEPTIONS;
    this.LOG_ENABLE_NGXS_DEVTOOLS = env.LOG_ENABLE_NGXS_DEVTOOLS;
    this.LOG_ENABLE_NGXS_CONSOLE_LOG = env.LOG_ENABLE_NGXS_CONSOLE_LOG;
    // app toast
    this.APP_TOAST_DEFAULT_TIMEOUT = env.APP_TOAST_DEFAULT_TIMEOUT;
    // text default lengths
    this.DEFAULT_FIELD_TEXT_MAX_LENGTH = env.DEFAULT_FIELD_TEXT_MAX_LENGTH;
  }
}

export interface Environment {
  // angular production flag
  PRODUCTION: boolean;
  // auth creds
  AUTH_CLIENT_ID?: string;
  AUTH_DOMAIN?: string;
  AUTH_RESPONSE_TYPE?: string;
  AUTH_AUDIENCE?: string;
  AUTH_REDIRECT_URI?: string;
  AUTH_SCOPE?: string;
  AUTH_LOGOUT_REDIRECT_URI?: string;
  // auth settings
  AUTH_STORAGE: Storage;
  AUTH_STORAGE_KEY: string;
  AUTH_PUBLIC_ROUTE: Array<string>;
  AUTH_DEFAULT_URL: string;
  AUTH_CHECK_DELAY: number;
  AUTH_RENEW_DELAY: number;
  // formio settings
  FORMIO_APP_URL?: string;
  FORMIO_API_URL?: string;
  // external urls
  // internal urls
  URL_ASSETS_I18N: string;
  URL_ASSETS_ENV_SETTINGS: string;
  // cache bust string
  CACHE_BUST_QUERY_STRING: string;
  // i18n language for text translation
  I18N_DEFAULT_LANGUAGE: string;
  I18N_DEFAULT_LANGUAGE_CULTURE: string;
  I18N_LANGUAGES_AVAILABLE: Array<string>;
  // logging flags
  LOG_ENABLE_ROUTE_TRACING: boolean;
  LOG_ENABLE_APP_EXCEPTIONS: boolean;
  LOG_ENABLE_NGXS_DEVTOOLS: boolean;
  LOG_ENABLE_NGXS_CONSOLE_LOG: boolean;
  // app toast
  APP_TOAST_DEFAULT_TIMEOUT: number;
  // text default lengths
  DEFAULT_FIELD_TEXT_MAX_LENGTH: number;
}
