import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <header
    class="header"
    data-aos="fade-down"
    data-aos-duration="400"
  >
    <a href="" class="logo" title="" [routerLink]="['/']">
      <svg>
        <use xlink:href="assets/icons/def.svg#icon-Logo-Header"></use>
      </svg>
    </a>

    <!--<a href="" class="" title="">
      <svg class="icon -md">
        <use xlink:href="assets/icons/def.svg#icon-Plane"></use>
      </svg>
    </a>

    <a href="" class="" title="">
      <svg class="icon -md">
        <use xlink:href="assets/icons/def.svg#icon-resume"></use>
      </svg>
    </a>-->

  </header>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
