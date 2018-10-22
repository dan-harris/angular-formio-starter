import { HttpClient } from '@angular/common/http';
import { environment } from '@myapp/env/environment';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/**
 *  loader factory function for http translate
 */
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, environment.URL_ASSETS_I18N, `.json?${environment.CACHE_BUST_QUERY_STRING}`);
}
