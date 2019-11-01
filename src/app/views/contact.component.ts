import { ConnectionService } from './../connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section
      class="contact hero"
      id="contact"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-anchor-placement="top-bottom"
      >

      <div class="content">

        <div class="heading">
          <!--<h2 class="title">Get in touch</h2>-->
          <p class="lead">
            Let's connect and build something, or just talk shop, whatever's
            cool with me.
          </p>
        </div>

        <form
          (ngSubmit)="processForm(contactForm.form)"
          class="form"
          id="contactForm"
          #contactForm="ngForm"
          autocomplete="false"
          >
          <div class="row">
            <input
              type="text"
              class="field"
              id="name"
              name="name"
              placeholder="Name"
              [(ngModel)]="name"
              ngModel
              required
              minlength="3"
              #nameInput="ngModel"
              />
            <label for="name">Name</label>
            <div
              class="help is-error"
              *ngIf="nameInput.invalid && nameInput.dirty"
              >
              Name is required and needs to be at least 3 characters.
            </div>
          </div>
          <div class="row">
            <input
              type="email"
              class="field"
              id="email"
              name="email"
              placeholder="Email"
              [(ngModel)]="email"
              ngModel
              required
              email
              #emailInput="ngModel"
            />
            <label for="email">Email</label>
            <div
              class="help is-error"
              *ngIf="emailInput.invalid && emailInput.dirty"
            >
              Needs to be a valid email, e.g. hello@iamtravishall.com.
            </div>
          </div>
          <div class="row">
            <textarea
              class="textarea"
              id="message"
              name="message"
              placeholder="Message"
              [(ngModel)]="message"
              ngModel
              required
              #messageInput="ngModel"
              ></textarea>
            <label for="message">Message</label>
            <div
              class="help is-error"
              *ngIf="messageInput.invalid && messageInput.dirty"
            >
              A message is required, otherwise I won't know what you want to talk about.
            </div>
          </div>
          <div class="row">
            <button class="btn" type="submit" [disabled]="!contactForm.valid">
              Send
              <svg class="icon">
                <use xlink:href="assets/icons/def.svg#icon-plane"></use>
              </svg>
            </button>
          </div>
        </form>

        <div class="links">
          <ul>
            <li>
              <a
                href="mailto:hello@iamtravishall.com?subject=Hello%20Travis!"
                class=""
                target="_blank"
                title="Email me at hello@iamtravishall.com"
              >
                <small>Email</small>
                hello@iamtravishall.com
              </a>
            </li>
            <li>
              <a href="tel:(303)335-9936‬" title="Give me a call">
                <small>Telephone</small>
                (303) 335-9936‬
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/travhall/"
                class=""
                target="_blank"
                title="Find me on Linkedin"
              >
                <svg class="icon">
                  <use xlink:href="assets/icons/def.svg#icon-Linkedin"></use>
                </svg>
                Find me on Linkedin
              </a>
            </li>
          </ul>
        </div>

      </div>

    </section>
  `,
  styles: []
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit() { }

  processForm(form) {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    console.log(allInfo);
    form.reset();
  }
}
