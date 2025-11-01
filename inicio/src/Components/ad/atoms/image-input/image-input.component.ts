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
  @Input() control!: FormControl<any>; // si prefieres typed: FormControl<string | null>
@Output() fileSelected = new EventEmitter<File | undefined>();

preview: string | null = null;

onFile(ev: Event){
  const file = (ev.target as HTMLInputElement).files?.[0];
  if(!file) { this.preview = null; this.fileSelected.emit(undefined); return; }
  this.fileSelected.emit(file);
  const reader = new FileReader();
  reader.onload = () => { this.preview = reader.result as string; };
  reader.readAsDataURL(file);
}
}
