import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  standalone: false
})
export class Pagination {
  @Input() page = 1;
  @Input() pages = 3;
  @Output() change = new EventEmitter<number>();

  prev(): void {
    if (this.page > 1) {
      this.page--;
      this.change.emit(this.page);
    }
  }

  next(): void {
    if (this.page < this.pages) {
      this.page++;
      this.change.emit(this.page);
    }
  }
}

