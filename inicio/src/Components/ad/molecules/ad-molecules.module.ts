import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatIconModule }       from '@angular/material/icon';
import { MatButtonModule }     from '@angular/material/button';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { MatInputModule }      from '@angular/material/input';
import { MatSelectModule }     from '@angular/material/select';
import { MatChipsModule }      from '@angular/material/chips';

import { AdAtomsModule } from '../atoms/ad-atoms.module';

// Moléculas (standalone:false)
import { AuthFields }     from './auth-fields/auth-fields.component';
import { Pagination }     from './pagination/pagination.component';
import { FormRow }        from './form-row/form-row.component';
import { HeroTitle }      from './hero-title/hero-title.component';
import { NavCenter }      from './nav-center/nav-center.component';
import { PriceFilter }    from './price-filter/price-filter.component';
import { ServicesFilter } from './services-filter/services-filter.component';

@NgModule({
  declarations: [
    AuthFields,
    Pagination,
    FormRow,
    HeroTitle,
    NavCenter,
    PriceFilter,
    ServicesFilter
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule,
    MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, MatChipsModule,
    AdAtomsModule
  ],
  exports: [
    AuthFields,
    Pagination,
    FormRow,
    HeroTitle,
    NavCenter,
    PriceFilter,
    ServicesFilter
  ]
})
export class AdMoleculesModule {}

