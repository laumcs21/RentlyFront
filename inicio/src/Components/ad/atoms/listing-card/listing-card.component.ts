import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ListingCardDTO } from '../../../../models/listing.models';

@Component({
  selector: 'ad-listing-card',
  templateUrl: './listing-card.component.html',
  styleUrls: ['./listing-card.component.css'],
  standalone: false
})
export class ListingCardComponent {
  private _model!: ListingCardDTO;

  // Soporta [card] y [data] indistintamente
  @Input({ alias: 'card' }) set card(v: ListingCardDTO) { this._model = v; }
  @Input() set data(v: ListingCardDTO) { this._model = v; }

  get model(): ListingCardDTO { return this._model; }

  @Output() open = new EventEmitter<number>();
  onOpen() { if (this._model?.id != null) this.open.emit(this._model.id); }
}
