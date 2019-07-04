import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <header class="header">
    <a href="" class="" title="">
      <svg class="logo">
        <use xlink:href="assets/icons/def.svg#icon-Logo-Header"></use>
      </svg>
    </a>

    <!--<a href="" class="" title="">
      <svg class="icon -lg">
        <use xlink:href="assets/icons/def.svg#icon-Plane"></use>
      </svg>
    </a>

    <a href="" class="" title="">
      <svg class="icon -lg">
        <use xlink:href="assets/icons/def.svg#icon-resume"></use>
      </svg>
    </a>-->

  </header>
  `
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}