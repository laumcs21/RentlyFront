// src/components/ad/atoms/ad-atoms.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* Angular Material usados por Átomos */
import { MatFormFieldModule }   from '@angular/material/form-field';
import { MatInputModule }       from '@angular/material/input';
import { MatIconModule }        from '@angular/material/icon';
import { MatButtonModule }      from '@angular/material/button';
import { MatCheckboxModule }    from '@angular/material/checkbox';
import { MatSelectModule }      from '@angular/material/select';
import { MatDatepickerModule }  from '@angular/material/datepicker';
import { MatNativeDateModule }  from '@angular/material/core';

/* Átomos (no-standalone, *.component.*) */
import { TextInputComponent }      from './text-input/text-input.component';
import { PasswordInputComponent }  from './password-input/password-input.component';
import { AdCheckComponent }        from './check/check.component';
import { CtaButtonComponent }      from './cta-button/cta-button.component';
import { DateInputComponent }      from './date-input/date-input.component';
import { SelectInputComponent }    from './select-input/select-input.component';
import { ImageInputComponent }     from './image-input/image-input.component';
import { AppButtonComponent }        from './app-button/app-button.component';

import { AppIconComponent }        from './app-icon/app-icon.component';
import { AppInputComponent }       from './app-input/app-input.component';
import { AppTextFieldComponent }   from './app-text-field/app-text-field.component';
import { AppChipComponent }        from './app-chip/app-chip.component';
import { AppDateFieldComponent }   from './app-date-field/app-date-field.component';
import { AppGuestStepperComponent }from './app-guest-stepper/app-guest-stepper.component';
import { NavButtonComponent }      from './nav-button/nav-button.component';
import { AppBadgeComponent }        from './app-badge/app-badge.component';
import { ListingCardComponent } from './listing-card/listing-card.component';
import { UploadComponent} from './upload/upload.component';


@NgModule({
  declarations: [
    TextInputComponent,
    PasswordInputComponent,
    DateInputComponent,
    SelectInputComponent,
    ImageInputComponent,
    AppButtonComponent,
    AdCheckComponent,
    CtaButtonComponent,
    AppIconComponent,
    AppInputComponent,
    AppTextFieldComponent,
    AppChipComponent,
    AppDateFieldComponent,
    AppGuestStepperComponent,
    NavButtonComponent,
    AppBadgeComponent,
    ListingCardComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [
    TextInputComponent,
    PasswordInputComponent,
    DateInputComponent,
    SelectInputComponent,
    ImageInputComponent,
    AppButtonComponent,
    AppBadgeComponent,
    AdCheckComponent,
    CtaButtonComponent,
    AppIconComponent,
    AppInputComponent,
    AppTextFieldComponent,
    AppChipComponent,
    AppDateFieldComponent,
    AppGuestStepperComponent,
    NavButtonComponent,
    ListingCardComponent,
    UploadComponent
  ],
})
export class AdAtomsModule {}
