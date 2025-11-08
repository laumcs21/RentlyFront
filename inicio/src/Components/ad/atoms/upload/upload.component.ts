// src/components/ad/atoms/upload/upload.component.ts
import { Component, Input } from '@angular/core';
import { ListingsService } from '../../../../services/listings.service';

@Component({
  selector: 'ad-upload',
  template: `
    <input type="file" (change)="onFileSelected($event)" multiple>
    <button (click)="uploadImages()">Subir imágenes</button>
  `,
  standalone: false
})
export class UploadComponent {
  @Input() listingId!: number;
  selectedFiles: File[] = [];

  constructor(private listingsService: ListingsService) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    this.selectedFiles = Array.from(input.files);
  }

uploadImages() {
  this.selectedFiles.forEach(file => {
    const formData = new FormData();
    formData.append('file', file);
    this.listingsService.uploadImage(this.listingId, file)
      .subscribe({
        next: () => console.log('✅ Imagen subida correctamente'),
        error: err => console.error('❌ Error al subir imagen', err)
      });
  });
}
}
