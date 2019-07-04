import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer">
    <a href="" class="" title="">
      <svg class="logo">
        <use xlink:href="assets/icons/def.svg#icon-Logo-Footer"></use>
      </svg>
    </a>

    <ul>
      <li>
        <a href="https://www.linkedin.com/in/travhall/" class="link-icon" target="_blank" title="Find me on Linkedin">
          <svg class="icon">
            <use xlink:href="assets/icons/def.svg#icon-Linkedin"></use>
          </svg>
          Find me on Linkedin
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/trebor_hass/" class="link-icon" target="_blank" title="Find me on Instagram">
          <svg class="icon">
            <use xlink:href="assets/icons/def.svg#icon-Instagram"></use>
          </svg>
          Check out my Instagram
        </a>
      </li>
      <li>
        <a href="Travis_Hall_CV.pdf" class="" target="_blank" title="Download my resum&eacute;">
          <svg class="icon">
            <use xlink:href="assets/icons/def.svg#icon-Download"></use>
          </svg>
          Download my resum&eacute;
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
      <li>
        <small class="copyright">
          Website design and content &copy;&nbsp;{{ year | date: 'yyyy' }} Travis Hall.
        </small>
      </li>
    </ul>
  </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year = Date.now();

  constructor() { }

  ngOnInit() {
  }

}
