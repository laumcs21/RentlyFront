import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Rol, RegisterDto } from '../../../../models/auth.models';
import { SelectOption } from '../../atoms/select-input/select-input.component';

type RegForm = FormGroup<{
  nombre:          FormControl<string>;
  email:           FormControl<string>;
  telefono:        FormControl<string>;
  contrasena:      FormControl<string>;
  confirm:         FormControl<string>;
  fechaNacimiento: FormControl<Date | null>;
  fotoPerfil:      FormControl<string | null>;
  rol:             FormControl<Rol | null>;
  terms:           FormControl<boolean>;
}>;

@Component({
  selector: 'ad-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  standalone: false
})
export class RegisterFormComponent {
  @Output() submitForm = new EventEmitter<{ dto: RegisterDto; file?: File }>();

    rolOptions: SelectOption[] = [
      { value: Rol.USUARIO,   label: 'Usuario' },
      { value: Rol.ANFITRION, label: 'Anfitrión' },
    ];

  form: RegForm;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.nonNullable.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^[\d\s()+-]{7,}$/)]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', [Validators.required]],
      fechaNacimiento: this.fb.control<Date | null>(null, { validators: Validators.required }),
      rol: this.fb.control<Rol | null>(null, { validators: Validators.required }),
      fotoPerfil: this.fb.control<string | null>(null),
      terms: this.fb.control(false, { validators: Validators.requiredTrue }),
    }) as RegForm;

    this.form.addValidators(() => {
      const pw = this.form.controls['contrasena'].value;
      const cf = this.form.controls['confirm'].value;
      return pw && cf && pw !== cf ? { mismatch: true } : null;
    });
  }

    private selectedFile?: File;

    onFileSelected(file?: File) {
      if (file) this.selectedFile = file;
    }

  private toISO(d: Date) { return d.toISOString().slice(0, 10); }

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const v = this.form.getRawValue();

    const dto: RegisterDto = {
      nombre: v.nombre,
      email: v.email,
      telefono: v.telefono,
      contrasena: v.contrasena,
      fechaNacimiento: v.fechaNacimiento ? this.toISO(v.fechaNacimiento) : null,
      rol: v.rol!, // ← ahora es Rol, no string
    };

    this.submitForm.emit({ dto, file: this.selectedFile });
  }
}
