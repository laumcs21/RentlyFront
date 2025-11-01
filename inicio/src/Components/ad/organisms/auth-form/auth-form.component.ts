import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'ad-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
  standalone: false
})
export class AuthForm {
  @Output() login = new EventEmitter<{ email: string; password: string }>();

  // ✅ Typed FormGroup: ya no es AbstractControl al acceder desde template
  form: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }>;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.nonNullable.group({
      email: this.fb.nonNullable.control('', { validators: [Validators.required, Validators.email] }),
      password: this.fb.nonNullable.control('', { validators: [Validators.required] }),
    });
  }

  get emailErr(): string | null {
    const c = this.form.controls.email;
    if (!c.touched && !c.dirty) return null;
    if (c.hasError('required')) return 'El correo es obligatorio';
    if (c.hasError('email')) return 'Formato de correo inválido';
    return null;
  }

  get pwdErr(): string | null {
    const c = this.form.controls.password;
    if (!c.touched && !c.dirty) return null;
    if (c.hasError('required')) return 'La contraseña es obligatoria';
    return null;
  }

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.login.emit(this.form.getRawValue());
  }
}
