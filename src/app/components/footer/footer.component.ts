import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer">
    <a href="" class="logo" title="">
      <svg class="">
        <use xlink:href="assets/icons/def.svg#icon-Logo-Footer"></use>
      </svg>
    </a>
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/travhall/" class="link-icon" target="_blank" title="Find me on Linkedin">
          <svg class="icon">
            <use xlink:href="assets/icons/def.svg#icon-Linkedin"></use>
          </svg>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/trebor_hass/" class="link-icon" target="_blank" title="Find me on Instagram">
          <svg class="icon">
            <use xlink:href="assets/icons/def.svg#icon-Instagram"></use>
          </svg>
        </a>
      </li>
      <li>
        <a href="mailto:hello@iamtravishall.com?subject=Hello Travis!" class="" target="_blank" title="Email me at hello@iamtravishall.com">
          <svg class="icon">
            <use xlink:href="assets/icons/def.svg#icon-Envelope"></use>
          </svg>
          hello@iamtravishall.com
        </a>
      </li>
    </ul>
    <small class="copyright">
      Website design and content &copy;{{ year | date: 'yyyy' }} Travis Hall.
    </small>
  </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {
  year = Date.now();

  constructor() { }

  ngOnInit() {
  }

}
