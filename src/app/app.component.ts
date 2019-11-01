import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class="site-container">
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
})
export class AppComponent {
  title = 'iamtravishall.com - Travis Hall UX, UI & Visual Design Professional - Denver | Minneapolis';
  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    AOS.init({
      startEvent: 'load',
      easing: 'ease-out',
      once: true,
      // disable: 'mobile',
    });
  }
}
