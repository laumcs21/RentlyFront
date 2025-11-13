import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingsService } from '../../../../services/listings.service';

@Component({
  selector: 'ad-host-edit-alojamiento-page',
  templateUrl: './host-edit-alojamiento.page.html',
  styleUrls: ['./host-edit-alojamiento.page.css'],
  standalone: false
})
export class HostEditAlojamientoPage implements OnInit {
  form!: FormGroup;
  id!: number;
  loading = true;

  imagenes: string[] = [];
  tiposPermitidos = ['CASA', 'APARTAMENTO', 'FINCA', 'CABAÑA'];
  nuevasImagenes: File[] = [];

  serviciosDisponibles = ['WiFi', 'Parqueadero', 'Piscina', 'Cocina', 'TV', 'Aire acondicionado'];
  serviciosSeleccionados = new Set<string>();

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
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
      tipoAlojamiento: ['Casa', Validators.required],
      descripcion: ['']
    });

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.listings.getById(this.id).subscribe({
      next: (aloj: any) => {
        this.imagenes = aloj.imagenes ?? [];
      const tipoBack = aloj.tipoAlojamiento ?? '';
      const tipoNormalizado = this.tiposPermitidos.includes(tipoBack) ? tipoBack : 'Casa';
        (aloj.servicios ?? []).forEach((s: string) => this.serviciosSeleccionados.add(s));

        this.form.patchValue({
          titulo: aloj.titulo ?? '',
          ciudad: aloj.ciudad ?? '',
          direccion: aloj.direccion ?? '',
          precioPorNoche: aloj.precioPorNoche ?? 0,
          capacidadMaxima: aloj.capacidadMaxima ?? 1,
          tipoAlojamiento: tipoNormalizado,
          descripcion: aloj.descripcion ?? ''
        });

        this.loading = false;
      },
      error: err => {
        console.error('No se pudo cargar alojamiento', err);
        this.loading = false;
      }
    });
  }

  toggleServicio(s: string) {
    this.serviciosSeleccionados.has(s)
      ? this.serviciosSeleccionados.delete(s)
      : this.serviciosSeleccionados.add(s);
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
        this.imagenes.push(reader.result as string);
      };
      reader.readAsDataURL(file);
    });
  }

eliminarImagen(index: number) {
  const url = this.imagenes[index];

  this.imagenes.splice(index, 1);

  if (url.startsWith('data:')) {
    return;
  }

  this.listings.deleteImage(this.id, url).subscribe({
    error: err => {
      console.error('no se pudo borrar en backend', err);
    }
  });
}

  guardar() {
    if (this.form.invalid) return;

    const body = {
      ...this.form.value,
      servicios: Array.from(this.serviciosSeleccionados)
    };

    this.listings.update(this.id, body).subscribe({
      next: () => {
        if (this.nuevasImagenes.length === 0) {
          this.router.navigate(['/host']);
          return;
        }

        let pendientes = this.nuevasImagenes.length;
        this.nuevasImagenes.forEach(f => {
          this.listings.uploadImage(this.id, f).subscribe({
            next: () => {
              pendientes--;
              if (pendientes === 0) {
                this.router.navigate(['/host']);
              }
            },
            error: err => console.error('error subiendo imagen', err)
          });
        });

        this.nuevasImagenes = [];
      },
      error: err => console.error('error guardando alojamiento', err)
    });
  }

  cancelar() {
    this.router.navigate(['/host']);
  }
}
