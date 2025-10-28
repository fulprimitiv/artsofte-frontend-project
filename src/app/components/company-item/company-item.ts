import { Component, Input } from '@angular/core';
import { Company } from '../../data/interfaces/company-interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-company-item',
  imports: [RouterModule],
  templateUrl: './company-item.html',
  styleUrl: './company-item.scss',
})
export class CompanyItemComponent {
  @Input() company!: Company;
}
