import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule }  from '@angular/material/button';

import { App } from './app';
import { MainLayout } from './layout/main-layout.component';

import { AdAtomsModule }      from '@components/ad/atoms/ad-atoms.module';
import { AdMoleculesModule }  from '@components/ad/molecules/ad-molecules.module';
import { AdOrganismsModule }  from '@components/ad/organisms/ad-organisms.module';
import { AdPagesModule }      from '@components/ad/pages/ad-pages.module';

@NgModule({
  declarations: [App, MainLayout],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    MatToolbarModule, MatButtonModule,
    AdAtomsModule, AdMoleculesModule, AdOrganismsModule, AdPagesModule
  ],
  bootstrap: [App]
})
export class AppModule {}

