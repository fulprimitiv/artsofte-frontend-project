import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-company-yandex-map',
  templateUrl: './company-yandex-map.html',
  styleUrl: './company-yandex-map.scss',
})
export class CompanyYandexMapComponent {
  @Input() lat!: number;
  @Input() lon!: number;

  constructor(private sanitizer: DomSanitizer) { }

  get mapUrl(): SafeResourceUrl {
    const url = `https://yandex.ru/map-widget/v1/?ll=${this.lon},${this.lat}&z=15&pt=${this.lon},${this.lat},pm2rdm`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
