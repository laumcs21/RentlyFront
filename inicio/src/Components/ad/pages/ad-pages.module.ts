import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdAtomsModule }      from '../atoms/ad-atoms.module';
import { AdMoleculesModule }  from '../molecules/ad-molecules.module';
import { AdOrganismsModule }  from '@components/ad/organisms/ad-organisms.module';

import { HomePage }     from './home-page/home.page';
import { LoginPage }    from './login-page/login-page.component';
import { RegisterPage } from './register-page/register-page.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UserHomePage } from './user-home-page/user-home.page';
import { ListingDetailPage } from './listing-detail-page/listing-detail.page';
import {HostDashboardPage} from './host-dashboard-page/host-dashboard.page';
import {HostEditAlojamientoPage} from './host-edit-alojamiento-page/host-edit-alojamiento.page';
import { HostReservasPage } from './host-reservas-page/host-reservas.page';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [HomePage, LoginPage, RegisterPage, UserHomePage, ListingDetailPage, HostDashboardPage, HostEditAlojamientoPage, HostReservasPage],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule,
    AdAtomsModule, AdMoleculesModule, AdOrganismsModule,  MatSnackBarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [HomePage, LoginPage, RegisterPage, UserHomePage, ListingDetailPage, HostDashboardPage, HostEditAlojamientoPage, HostReservasPage]
})
export class AdPagesModule {}

