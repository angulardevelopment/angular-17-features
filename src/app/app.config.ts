import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withXsrfConfiguration } from '@angular/common/http';

export const appConfig: ApplicationConfig = {


  // providers: [, provideHttpClient()]
  // provideHttpClient(withJsonpSupport()
  providers: [
    provideHttpClient(withXsrfConfiguration({
    cookieName: 'TOKEN', // default is 'XSRF-TOKEN'
    headerName: 'X-TOKEN' // default is 'X-XSRF-TOKEN'
    })), 
    provideRouter(routes)]
// or you can disable it completely with withNoXsrfProtection():
// providers: [provideHttpClient(withNoXsrfProtection())]
};


