import { Component, inject } from '@angular/core';
import { CompanyService } from '../../data/services/company-service';
import { CompanyItemComponent } from '../../components/company-item/company-item';
import { Observable, map } from 'rxjs';
import { Company } from '../../data/interfaces/company-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, CompanyItemComponent],
  templateUrl: './company-list.html',
  styleUrls: ['./company-list.scss'],
})
export class CompanyListComponent {
  private readonly companyService = inject(CompanyService);

  companies$: Observable<Company[]> = this.companyService
    .getCompanies()
    .pipe(map(res => res.data));

  trackById(index: number, company: Company): number {
    return company.id;
  }
}
