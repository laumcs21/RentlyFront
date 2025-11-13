import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
import { ListingsService } from '../../../../services/listings.service'; 
import { ListingCardDTO, ListingFilters } from '../../../../models/listing.models'; 

@Component({
  selector: 'ad-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  standalone: false
})
export class HomePage implements OnInit {
  page = 1;
  cards$!: Observable<ListingCardDTO[]>;

  constructor(private listings: ListingsService, private router: Router) {}

  ngOnInit(): void {
    const filters: ListingFilters = {};          
    this.cards$ = this.listings.getFeatured(filters, 12).pipe(
      map(list => list.map(x => ({
        ...x,
        portadaUrl: x.portadaUrl ?? x.imagenes?.[0] ?? 'assets/placeholder.webp'
      })))
    );
  }

  trackById = (_: number, item: ListingCardDTO) => item.id;

  goToDetail(card: ListingCardDTO | number) {
    const id = typeof card === 'number' ? card : card.id;
    this.router.navigate(['/alojamientos', id]);
  }
}
