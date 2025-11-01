import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdAtomsModule }      from '../atoms/ad-atoms.module';
import { AdMoleculesModule }  from '../molecules/ad-molecules.module';
import { AdOrganismsModule }  from '../organisms/ad-organisms.module';

import { HomePage }     from './home-page/home.page';
import { LoginPage }    from './login-page/login-page.component';
import { RegisterPage } from './register-page/register-page.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [HomePage, LoginPage, RegisterPage],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule,
    AdAtomsModule, AdMoleculesModule, AdOrganismsModule,  MatSnackBarModule
  ],
  exports: [HomePage, LoginPage, RegisterPage]
})
export class AdPagesModule {}

