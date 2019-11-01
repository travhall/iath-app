import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="nav">
      <ul>
        <li class="nav__item">
          <a
            [routerLink]="['']"
            [routerLinkActiveOptions]="{exact:true}"
            routerLinkActive="active"
            class="nav__link"
            title=""
            >
            <svg class="icon -md">
              <use xlink:href="assets/icons/def.svg#icon-home"></use>
            </svg>
              Home
            </a>
        </li>
        <li class="nav__item">
          <a
            [routerLink]="['/work']"
            [routerLinkActiveOptions]="{exact:true}"
            routerLinkActive="active"
            class="nav__link"
            title=""
            >
            <svg class="icon -md">
              <use xlink:href="assets/icons/def.svg#icon-case"></use>
            </svg>
              Work
            </a>
        </li>
        <li class="nav__item">
          <a
            [routerLink]="['/about']"
            [routerLinkActiveOptions]="{exact:true}"
            routerLinkActive="active"
            class="nav__link"
            title=""
          >
            <svg class="icon -md">
              <use xlink:href="assets/icons/def.svg#icon-about"></use>
            </svg>
            About
          </a>
        </li>
        <li class="nav__item">
          <a
            [routerLink]="['/contact']"
            [routerLinkActiveOptions]="{exact:true}"
            routerLinkActive="active"
            class="nav__link"
            title=""
          >
            <svg class="icon -md">
              <use xlink:href="assets/icons/def.svg#icon-envelope"></use>
            </svg>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  `,
  styles: []
})
export class NavComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
