import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../../data/services/company-service';
import { Company } from '../../data/interfaces/company-interface';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-detail.html',
  styleUrl: './company-detail.scss',
})
export class CompanyDetailComponent {
  private route = inject(ActivatedRoute);
  private companyService = inject(CompanyService);

  company$: Observable<Company> = this.route.params.pipe(
    switchMap(params => this.companyService.getCompanyById(+params['id']))
  );
}
