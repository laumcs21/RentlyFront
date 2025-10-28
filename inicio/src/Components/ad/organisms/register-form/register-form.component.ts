import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

// Tipado del formulario (Typed Forms)
type RegForm = FormGroup<{
  nombre:          FormControl<string>;
  email:           FormControl<string>;
  telefono:        FormControl<string>;
  contrasena:      FormControl<string>;
  confirm:         FormControl<string>;
  fechaNacimiento: FormControl<Date | null>;
  rol:             FormControl<string | null>;
  fotoPerfil:      FormControl<string | null>;
  terms:           FormControl<boolean>;
}>;

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  standalone: false
})
export class RegisterFormComponent {
  rolOptions = [
    { value: 'USER', label: 'Usuario' },
    { value: 'HOST', label: 'Anfitrión' },
  ];

  form: RegForm;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.nonNullable.group({
      nombre:     ['', [Validators.required, Validators.minLength(3)]],
      email:      ['', [Validators.required, Validators.email]],
      telefono:   ['', [Validators.required, Validators.pattern(/^[\d\s()+-]{7,}$/)]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      confirm:    ['', [Validators.required]],

      fechaNacimiento: this.fb.control<Date | null>(null, { validators: Validators.required }),
      rol:             this.fb.control<string | null>(null, { validators: Validators.required }),
      fotoPerfil:      this.fb.control<string | null>(null, { validators: Validators.required }),
      terms:           this.fb.control(false, { validators: Validators.requiredTrue }),
    }) as RegForm;

    // Validación de coincidencia de contraseñas
    this.form.addValidators(() => {
      const pw = this.form.controls['contrasena'].value;
      const cf = this.form.controls['confirm'].value;
      return pw && cf && pw !== cf ? { mismatch: true } : null;
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const toISO = (d: Date) => d.toISOString().slice(0, 10);

    const payload = {
      nombre: v.nombre,
      email: v.email,
      telefono: v.telefono,
      contrasena: v.contrasena,
      fechaNacimiento: v.fechaNacimiento ? toISO(v.fechaNacimiento) : null,
      rol: v.rol!,
      fotoPerfil: v.fotoPerfil!,
    };

    console.log('[REGISTER] payload', payload);
  }
}
