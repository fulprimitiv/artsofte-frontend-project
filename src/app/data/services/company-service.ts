import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company, CompanyResponse } from '../interfaces/company-interface';

@Injectable({
  providedIn: 'root'
})

export class CompanyService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://faker-api.milki.space';

  getCompanies(
    page: number = 1,
    perPage: number = 50
  ): Observable<CompanyResponse> {
    return this.http.get<CompanyResponse>(`${this.baseUrl}/companies`, {
      params: { page, per_page: perPage }
    });
  }

  getCompanyById(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.baseUrl}/companies/${id}`);
  }
}
