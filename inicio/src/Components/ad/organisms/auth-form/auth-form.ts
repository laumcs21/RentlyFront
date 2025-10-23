import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FormRow } from '../../molecules/form-row/form-row';
import { AppButtonComponent } from '../../atoms/app-button/app-button';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormRow, AppButtonComponent],
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()" style="max-width:360px; margin:auto">
      <h2 style="margin-bottom:16px">Iniciar sesión</h2>

      <app-form-row
        label="Correo"
        [placeholder]="'tucorreo@dominio.com'"
        [type]="'email'"
        [error]="emailErr"
      ></app-form-row>

      <app-form-row
        label="Contraseña"
        [type]="'password'"
        [error]="pwdErr"
      ></app-form-row>

      <app-button label="Entrar" color="primary"></app-button>
    </form>
  `,
})
export class AuthForm implements OnInit {
  @Output() login = new EventEmitter<{ email: string; password: string }>();
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get emailErr() {
    const c = this.form.controls['email'];
    if (!c.touched && !c.dirty) return null;
    if (c.hasError('required')) return 'El correo es obligatorio';
    if (c.hasError('email')) return 'Formato de correo inválido';
    return null;
  }

  get pwdErr() {
    const c = this.form.controls['password'];
    if (!c.touched && !c.dirty) return null;
    if (c.hasError('required')) return 'La contraseña es obligatoria';
    return null;
  }

  submit() {
    if (this.form.valid) this.login.emit(this.form.value);
    else this.form.markAllAsTouched();
  }
}
