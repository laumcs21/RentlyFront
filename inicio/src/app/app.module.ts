import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule }  from '@angular/material/button';

import { App } from './app';
import { AppRoutingModule } from './app-routing.module';
import { MainLayout } from './layout/main-layout.component';

import { AdAtomsModule }      from '@components/ad/atoms/ad-atoms.module';
import { AdMoleculesModule }  from '@components/ad/molecules/ad-molecules.module';
import { AdOrganismsModule }  from '@components/ad/organisms/ad-organisms.module';
import { AdPagesModule }      from '@components/ad/pages/ad-pages.module';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../interceptors/auth.interceptor';

@NgModule({
  declarations: [App, MainLayout],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatButtonModule,
    AppRoutingModule,
    AdAtomsModule, AdMoleculesModule, AdOrganismsModule, AdPagesModule
  ],
    providers: [
    provideHttpClient(
      withInterceptorsFromDi(),
    ),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

  ],
  bootstrap: [App]
})
export class AppModule {}

