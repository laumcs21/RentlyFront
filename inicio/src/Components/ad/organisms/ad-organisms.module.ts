import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatToolbarModule }    from '@angular/material/toolbar';
import { MatIconModule }       from '@angular/material/icon';
import { MatButtonModule }     from '@angular/material/button';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { MatInputModule }      from '@angular/material/input';
import { MatSelectModule }     from '@angular/material/select';
import { MatChipsModule }      from '@angular/material/chips';
import { MatSliderModule }     from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule }       from '@angular/material/card';
import { MatMenuModule }     from '@angular/material/menu';
import { MatDividerModule }  from '@angular/material/divider';

import { AdAtomsModule }      from '../atoms/ad-atoms.module';
import { AdMoleculesModule }  from '../molecules/ad-molecules.module';

// Organisms (standalone:false)
import { AdvancedFilters }         from './advanced-filters/advanced-filters.component';
import { FeaturedList }            from './featured-list/featured-list.component';
import { PropertyCard }            from './property-card/property-card.component';
import { HomeHero }                from './home-hero/home-hero.component';
import { TopBarComponent }         from './top-bar/top-bar.component';
import { AuthForm }                from './auth-form/auth-form.component';
import { RegisterFormComponent }   from './register-form/register-form.component';
import { FeaturedGridComponent }   from './featured-grid/featured-grid.component';
import { TopbarUserComponent }     from './top-bar-user/top-bar-user.component';


@NgModule({
  declarations: [
    AdvancedFilters,
    FeaturedList,
    PropertyCard,
    HomeHero,
    TopBarComponent,
    AuthForm,
    RegisterFormComponent,
    FeaturedGridComponent,
    TopbarUserComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule,
    MatToolbarModule, MatIconModule, MatButtonModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatChipsModule,
    MatSliderModule, MatDatepickerModule, MatNativeDateModule, MatCardModule,
    AdAtomsModule, AdMoleculesModule,     MatMenuModule, MatDividerModule
  ],
  exports: [
    AdvancedFilters,
    FeaturedList,
    PropertyCard,
    HomeHero,
    TopBarComponent,
    AuthForm,
    RegisterFormComponent,
    FeaturedGridComponent,
    TopbarUserComponent
  ]
})
export class AdOrganismsModule {}
