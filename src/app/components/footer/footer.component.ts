import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer
    class="footer"
    id="footer"
    data-aos="fade-up"
    data-aos-duration="800"
    data-aos-anchor-placement="top-bottom"
    data-aos-once="false"
    >
      <a
        class="logo"
        title="iamtravishall.com"
        [scrollTo]="'#top'"
        >
        <svg class="">
          <use xlink:href="assets/icons/def.svg#icon-Logo-Footer"></use>
        </svg>
      </a>
      <ul>
        <li>
          <a
            href="https://www.instagram.com/trebor_hass/"
            class="link-icon"
            target="_blank"
            title="Find me on Instagram"
          >
            <svg class="icon">
              <use xlink:href="assets/icons/def.svg#icon-Instagram"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/travhall/"
            class="link-icon"
            target="_blank"
            title="Find me on Linkedin"
          >
            <svg class="icon">
              <use xlink:href="assets/icons/def.svg#icon-Linkedin"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="tel:(303)335-9936‬">
            <b>t:</b>
            (303) 335-9936‬
          </a>
        </li>
        <li>
          <a
            href="mailto:hello@iamtravishall.com?subject=Hello%20Travis!"
            class=""
            target="_blank"
            title="Email me at hello@iamtravishall.com"
          >
            <b>e:</b>
            hello@iamtravishall.com
          </a>
        </li>
      </ul>
      <small class="copyright">
        Website design and content &copy;{{ year | date: "yyyy" }} Travis Hall.
      </small>
    </footer>
    <!--<button
      class="btn -ghost -borderless back-to-top"
      [scrollTo]="'#top'"
      data-aos="fade-right"
      data-aos-anchor-placement="bottom-center"
      data-aos-once="false"
      data-aos-anchor="#hero"
    >
      <svg class="icon -lg">
        <use xlink:href="assets/icons/def.svg#icon-arrow-up-circle"></use>
      </svg>
    </button>-->
  `,
  styles: []
})
export class FooterComponent implements OnInit {
  year = Date.now();

  constructor() { }

  ngOnInit() { }
}
