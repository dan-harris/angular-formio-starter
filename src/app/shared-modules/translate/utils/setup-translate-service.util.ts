import { environment } from '@myapp/env/environment';
import { TranslateService } from '@ngx-translate/core';

/**
 * setup translate service language
 */
export function setupTranslateService(translate: TranslateService): void {
  // add current languages available to translate service
  translate.addLangs(environment.I18N_LANGUAGES_AVAILABLE);

  // TODO: retrieve current language settings from user account in localstorage

  // try to set current language using browser language
  // const browserLang: string = translate.getBrowserLang();
  // let currentLang: string =  environment.I18N_LANGUAGES_AVAILABLE.find((lang: string) => lang === browserLang) || I18N_DEFAULT_LANGUAGE;
  translate.setDefaultLang(environment.I18N_DEFAULT_LANGUAGE);

  // try to set current language localisation settings via browser
  // const browserCultureLang: string = translate.getBrowserCultureLang();
  // currentLang =  environment.I18N_LANGUAGES_AVAILABLE.find((lang: string) => lang === browserCultureLang) || environment.I18N_DEFAULT_LANGUAGE_CULTURE;
  translate.use(environment.I18N_DEFAULT_LANGUAGE_CULTURE);
}
