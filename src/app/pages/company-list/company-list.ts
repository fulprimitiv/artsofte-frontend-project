import { Component, inject } from '@angular/core';
import { CompanyService } from '../../data/services/company-service';
import { Company } from '../../data/interfaces/company-interface';
import { map } from 'rxjs';
import { CompanySortComponent, SortField } from '../../components/company-sort/company-sort';
import { CompanyItemComponent } from '../../components/company-item/company-item';

@Component({
  selector: 'app-company-list',
  imports: [CompanySortComponent, CompanyItemComponent],
  templateUrl: './company-list.html',
  styleUrl: './company-list.scss'
})
export class CompanyListComponent {
  private readonly companyService = inject(CompanyService);

  companies: Company[] = [];
  sortedCompanies: Company[] = [];

  constructor() {
    this.companyService.getCompanies()
      .pipe(map(res => res.data))
      .subscribe(data => {
        this.companies = data;
        this.sortedCompanies = [...data];
      });
  }

  sortCompanies(field: SortField) {
    this.sortedCompanies = [...this.companies].sort((a, b) => {
      if (field === 'name') {
        return a.business_name.localeCompare(b.business_name);
      }
      if (field === 'type') {
        return a.type.localeCompare(b.type);
      }
      if (field === 'industry') {
        return a.industry.localeCompare(b.industry);
      }
      return 0;
    });
  }
}
