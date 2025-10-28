import { Component, EventEmitter, Output } from '@angular/core';

export type SortField = 'name' | 'type' | 'industry';

@Component({
  selector: 'app-company-sort',
  templateUrl: './company-sort.html',
  styleUrl: './company-sort.scss'
})
export class CompanySortComponent {
  @Output() sortChange = new EventEmitter<SortField>();

  onSort(field: SortField) {
    this.sortChange.emit(field);
  }
}
