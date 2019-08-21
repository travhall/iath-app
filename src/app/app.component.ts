import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'IamTravisHall(dot)com';
  ngOnInit() {
    AOS.init({
      startEvent: 'load',
      easing: 'ease-out',
      once: true
    });
  }
}
