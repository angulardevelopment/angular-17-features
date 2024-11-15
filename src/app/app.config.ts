import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withXsrfConfiguration } from '@angular/common/http';

export const appConfig: ApplicationConfig = {


  // providers: [provideRouter(routes), provideHttpClient()]
  // provideHttpClient(withJsonpSupport()
  providers: [provideHttpClient(withXsrfConfiguration({
    cookieName: 'TOKEN', // default is 'XSRF-TOKEN'
    headerName: 'X-TOKEN' // default is 'X-XSRF-TOKEN'
    }))]
// or you can disable it completely with withNoXsrfProtection():
// providers: [provideHttpClient(withNoXsrfProtection())]
};


