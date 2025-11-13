import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../../../services/users.service';
import { ListingsService } from '../../../../services/listings.service';

@Component({
  selector: 'ad-host-create-alojamiento-page',
  templateUrl: './host-create-alojamiento.page.html',
  styleUrls: ['./host-create-alojamiento.page.css'],
  standalone: false
})
export class HostCreateAlojamientoPage implements OnInit {
  form!: FormGroup;
  me: any = null;

  imagenesPreview: string[] = [];
  nuevasImagenes: File[] = [];

  serviciosDisponibles = ['WiFi', 'Parqueadero', 'Piscina', 'Cocina', 'TV', 'Aire acondicionado'];
  serviciosSeleccionados = new Set<string>();

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  constructor(
    private fb: FormBuilder,
    private users: UsersService,
    private listings: ListingsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      ciudad: ['', Validators.required],
      direccion: [''],
      precioPorNoche: [0, Validators.required],
      capacidadMaxima: [1, Validators.required],
      tipoAlojamiento: ['CASA', Validators.required],
      descripcion: [''],
      latitud: [null],
      longitud: [null]
    });

    // traemos al usuario para sacar el id de anfitrión
    this.users.getMe().subscribe(me => {
      this.me = me;
    });
  }

  toggleServicio(s: string) {
    if (this.serviciosSeleccionados.has(s)) {
      this.serviciosSeleccionados.delete(s);
    } else {
      this.serviciosSeleccionados.add(s);
    }
  }

  abrirFile() {
    this.fileInput?.nativeElement.click();
  }

  onFileSelected(ev: Event) {
    const input = ev.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    Array.from(input.files).forEach(file => {
      this.nuevasImagenes.push(file);

      const reader = new FileReader();
      reader.onload = () => {
        this.imagenesPreview.push(reader.result as string);
      };
      reader.readAsDataURL(file);
    });
  }

  guardar() {
    if (this.form.invalid || !this.me) return;

    const body: any = {
      ...this.form.value,
      // el backend espera el anfitrión
      anfitrionId: this.me.id,
      eliminado: false,
      // igual que en tu página de editar
      servicios: Array.from(this.serviciosSeleccionados)
    };

    this.listings.create(body).subscribe({
      next: (alojCreado: any) => {
        // si no hay imágenes, nos vamos de una
        if (this.nuevasImagenes.length === 0) {
          this.router.navigate(['/host']);
          return;
        }

        const alojId = alojCreado.id;
        let pendientes = this.nuevasImagenes.length;

        this.nuevasImagenes.forEach(f => {
          this.listings.uploadImage(alojId, f).subscribe({
            next: () => {
              pendientes--;
              if (pendientes === 0) {
                this.router.navigate(['/host']);
              }
            },
            error: err => console.error('error subiendo imagen', err)
          });
        });
      },
      error: err => console.error('error creando alojamiento', err)
    });
  }

  cancelar() {
    this.router.navigate(['/host']);
  }
}

