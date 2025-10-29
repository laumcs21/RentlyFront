import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'ad-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
  standalone: false

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
