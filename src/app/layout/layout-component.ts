import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-layout-component',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.scss',
})

export class LayoutComponent { }
