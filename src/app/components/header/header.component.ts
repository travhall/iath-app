import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <header class="header" data-aos="fade-down" data-aos-duration="400">
    <a
    class="logo"
    [routerLink]="['/']"
    title=""
    >
      <svg>
        <use xlink:href="assets/icons/def.svg#icon-Logo-Header"></use>
      </svg>
    </a>
  </header>
  <app-nav></app-nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
