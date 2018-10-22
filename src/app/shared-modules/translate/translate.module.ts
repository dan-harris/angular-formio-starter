import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CustomMissingTranslationHandler } from '@myapp/app/shared-modules/translate/utils/custom-missing-translation-handler.util';
import { setupTranslateService } from '@myapp/app/shared-modules/translate/utils/setup-translate-service.util';
import { HttpLoaderFactory } from '@myapp/app/shared-modules/translate/utils/translate-http-loader.util';
import { MissingTranslationHandler, TranslateLoader, TranslateModule as NgxTranslateModule, TranslateService } from '@ngx-translate/core';

@NgModule({
  imports: [NgxTranslateModule],
  exports: [NgxTranslateModule],
  providers: []
})
export class TranslateModule {
  /**
   * instantiate the ngx translate service
   * (ensure we only create a single instance of translate service)
   */
  static forRoot(): ModuleWithProviders<any> {
    return { ngModule: RootTranslateModule };
  }
}

/**
 * the forRoot module (this needs to be seperate due to the translate module forroot instantiation)
 */
@NgModule({
  imports: [
    NgxTranslateModule.forRoot({
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: CustomMissingTranslationHandler
      },
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [NgxTranslateModule],
  providers: []
})
export class RootTranslateModule {
  constructor(private readonly translate: TranslateService) {
    setupTranslateService(translate);
  }
}
