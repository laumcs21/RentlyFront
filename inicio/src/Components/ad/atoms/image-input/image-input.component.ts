import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ad-image-input',
  standalone: false,
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.css'],
})
export class ImageInputComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) control!: FormControl<any>; // si prefieres typed: FormControl<string | null>
  @Output() fileSelected = new EventEmitter<File>();

  preview: string | null = null;

  onFile(ev: Event) {
    const file = (ev.target as HTMLInputElement).files?.[0];
    if (!file) return;

    this.fileSelected.emit(file);

    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
      this.control.setValue(this.preview);   // base64
      this.control.markAsDirty();
      this.control.markAsTouched();
    };
    reader.readAsDataURL(file);
  }
}
