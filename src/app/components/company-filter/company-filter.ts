import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Company } from '../../data/interfaces/company-interface';

export interface CompanyFilterData {
  search: string;
  type: string;
  industry: string;
}

@Component({
  selector: 'app-company-filter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './company-filter.html',
  styleUrl: './company-filter.scss'
})
export class CompanyFilterComponent {
  @Input() companies: Company[] = [];
  @Output() filterChange = new EventEmitter<CompanyFilterData>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      search: [''],
      type: [''],
      industry: ['']
    });

    this.form.valueChanges.subscribe(value => {
      this.filterChange.emit(value as CompanyFilterData);
    });
  }

  get uniqueTypes(): string[] {
    return [...new Set(this.companies.map(c => c.type))];
  }

  get uniqueIndustries(): string[] {
    return [...new Set(this.companies.map(c => c.industry))];
  }
}
