// src/components/ad/pages/register-page/register-page.component.ts
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../../../../services/auth.service';
import { UsersService } from '../../../../services/users.service';
import { RegisterDto } from '../../../../models/auth.models';

@Component({
  selector: 'ad-register-page',
  template: `<ad-register-form (submitForm)="onRegister($event)"></ad-register-form>`,
  standalone: false
})
export class RegisterPage{
  constructor(
    private auth: AuthService,
    private users: UsersService,
    private snack: MatSnackBar
  ) {}

  onRegister(ev: { dto: RegisterDto; file?: File }) {
    this.auth.register(ev.dto).subscribe({
      next: () => {
        // Ya se guardó el token dentro del AuthService (pipe(tap(...)))
        // 1) obtener el perfil para conocer el id
        this.users.getMe().subscribe({
          next: (me) => {
            const userId = me?.id;
            if (ev.file && userId) {
              // 2) subir foto de perfil con ese id
              this.users.uploadProfilePhoto(userId, ev.file).subscribe({
                next: () => this.snack.open('Cuenta creada y foto actualizada ✅', 'Cerrar', { duration: 3000 }),
                error: () => this.snack.open('Cuenta creada, pero falló la foto. Puedes subirla luego.', 'Cerrar', { duration: 3500 })
              });
            } else {
              this.snack.open('Cuenta creada ✅', 'Cerrar', { duration: 3000 });
            }
          },
          error: () => this.snack.open('Cuenta creada, pero no se pudo obtener el perfil.', 'Cerrar', { duration: 3500 })
        });
      },
      error: () => this.snack.open('No se pudo registrar. Intenta de nuevo.', 'Cerrar', { duration: 3500 })
    });
  }
}
