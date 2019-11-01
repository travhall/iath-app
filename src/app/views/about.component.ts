import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section
      class="hero about"
      id="hero"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-anchor-placement="top-bottom"
      >
      <div class="content">
        <h2 class="title">Hello again!</h2>
        <p class="lead">
          Like I said, my name is Travis <i>(and that's Wylie)</i>.
        </p>
        <p>
          I'm a Denver based UX designer and UI developer, currently leading
          user experience for Arrow Electronics. Previously, I wrote code for
          <a
            href="https://ideapark.com/"
            class=""
            target="_blank"
            title="ideapark"
            >ideapark</a
          >
          and
          <a
            href="https://www.lacek.com/"
            class=""
            target="_blank"
            title="The Lacek Group"
            >The Lacek Group</a
          >. I've also worked with some great agencies like
          <a
            href="http://www.mccannmpls.com/"
            class=""
            target="_blank"
            title="McCann"
            >McCann</a
          >,
          <a
            href="https://morsekode.com/"
            class=""
            target="_blank"
            title="Morsekode"
            >Morsekode</a
          >, and
          <a
            href="http://www.playworkgroup.com/"
            class=""
            target="_blank"
            title="playworkgroup"
            >playworkgroup</a
          >.
        </p>
        <button class="btn -ghost" [scrollTo]="'#resume'">
          More about me
          <svg class="icon">
            <use xlink:href="assets/icons/def.svg#icon-arrow-down-circle"></use>
          </svg>
        </button>
      </div>
    </section>

    <section
      class="resume"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-anchor-placement="top-center"
      id="resume"
      >

      <div class="content">
        <h2>Travis Hall</h2>
        <a
          href="mailto:hello@iamtravishall.com?subject=Hello%20Travis!"
          target="_blank"
          title="Email me at hello@iamtravishall.com"
        >
          hello@iamtravishall.com&nbsp;
          <svg class="icon">
            <use xlink:href="assets/icons/def.svg#icon-plane"></use>
          </svg>
        </a>
        <a class="btn -ghost" title="Download my resum&eacute;">
          Download resum&eacute;
          <svg class="icon">
            <use xlink:href="assets/icons/def.svg#icon-download"></use>
          </svg>
        </a>
      </div>

      <ul class="overview">
        <li
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <h4>Skills</h4>
          <ul>
            <li>User Experience Design</li>
            <li>User Interface Development</li>
            <li>Scalable Design Systems</li>
            <li>Wireframing &amp; Prototyping</li>
            <li>User Research &amp; Usability Testing</li>
            <li>Information Architecture</li>
            <li>Product Strategy</li>
            <li>Agile Development Methodology</li>
          </ul>
        </li>
        <li
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="300"
        >
          <h4>Tools</h4>
          <ul>
            <li>Sketch, Zeplin</li>
            <li>Adobe Creative Suite</li>
            <li>Invision, Invision Studio</li>
            <li>VS Code, Sublime Text</li>
            <li>Command Line Interface</li>
            <li>Atlassian Suite</li>
            <li>Gliffy, Draw.io, Omnigaffle</li>
            <li>Pen, Paper &amp; Post-it's</li>
          </ul>
        </li>
        <li
          class="panel"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="400"
        >
          <h4>Technologies</h4>
          <ul>
            <li>HTML5</li>
            <li>CSS, SASS</li>
            <li>Javascript, jQuery</li>
            <li>Bootstrap, Foundation</li>
            <li>GitHub, Bitbucket</li>
            <li>Wordpress</li>
            <li>Shopify <span>(Moderate)</span></li>
            <li>Angular <span>(Novice)</span></li>
          </ul>
        </li>
      </ul>

    </section>

    <section
      class="panel"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      >

      <div class="content">
        <h3>UX Lead / Design Manager</h3>
        <h4>
          Arrow Digital : Arrow Electronics, Inc. <span>2016 - present</span>
        </h4>
        <p>
          As UX Lead I oversee all facets of end-to-end UX design for Arrow
          Electronics eCommerce platforms,
          <a
            href="https://www.arrow.com"
            target="_blank"
            title="Arrow Electronics, Inc."
            >Arrow.com</a
          >
          and
          <a href="https://my.arrow.com/" target="_blank" title="MyArrow"
            >MyArrow.com</a
          >. Working directly with product owners, developers, and stakeholders,
          my team delivers all UX design needs. As Design Manager, I developed
          and continue to nurture all UX processes, including; UX strategy,
          usability testing, and issue tracking.
        </p>
        <p>
          <b>Key Projects:</b>
        </p>
      </div>

    </section>

    <section
      class="panel"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      >

      <div class="content">
        <h3>Senior Front End Developer</h3>
        <h4>ideapark <span>2012 - 2015</span></h4>
        <p>
          While working at
          <a href="https://ideapark.com/" target="_blank" title="ideapark"
            >ideapark</a
          >, I was responsible for front end development for a variety of
          clients, including; Target, Betty Crocker, Box Tops for Education and
          Stunt Puppy. I worked directly with visual designers and marketing
          managers to deliver standards driven, compliant front end code for
          websites and targeted email campaigns.
        </p>
        <p>
          <b>Key Projects:</b> I built the first Shopify theme for Stunt Puppy
          and lead email development for Target Canada.
        </p>
      </div>

    </section>

    <section
      class="panel"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      >

      <div class="content">
        <h3>Front End Developer</h3>
        <h4>The Lacek Group <span>2010 - 2012</span></h4>
        <p>
          At
          <a
            href="https://www.lacek.com/"
            target="_blank"
            title="The Lacek Group"
            >The Lacek Group</a
          >, I worked directly with art directors and visual designers to
          deliver sites and dynamic emails for loyalty marketing campaigns.
          While supporting campaigns for brands like US Bank, Enterprise and
          National Car Rental, and Ameriprise, I built several of The Lacek
          Group's earliest responsive sites.
        </p>
        <p>
          <b>Key Projects:</b> I designed and built The Lacek Group’s first
          responsive agency website.
        </p>
      </div>

    </section>

    <section
      class="panel"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      >

      <div class="content">
        <h3>Visiting Artist / Faculty</h3>
        <h4>
          Minneapolis College of Art &amp; Design <span>2008 - 2010</span>
        </h4>
        <p>
          Upon completion of my MFA, I was invited to serve as a Visiting Artist
          for MCAD's Media Arts Department. In this role, I instructed courses
          in digital media design & web development. Coursework examined a wide
          array of digital mediums, processes, and methodologies, including,
          digital image creation and manipulation, audio and video production,
          as well as, HTML, CSS, and Javascript.
        </p>
      </div>

    </section>

    <section
      class="panel"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      >

      <div class="content">
        <h3>Freelance Designer &amp; Developer</h3>
        <h4>iamtravishall <span>2005 - present</span></h4>
        <p>
          I've been fortunate enough to work on projects for some great
          companies. Services ranging from art direction and branding to
          wireframing and building custom themes. Some companies I've worked
          with include; <em>McCann</em>, <em>Likeletter Projects</em>,
          <em>Morsekode</em>, <em>playworkgroup</em>, <em>Winter Group</em>,
          <em>Ramon Lawrence Designs</em>, <em>Grossman Design</em>, and
          <em>Merit Mile</em>.
        </p>
      </div>

    </section>

    <section
      class="panel"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      >

      <div class="content">
        <h3>Education</h3>
        <ul>
          <li data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <h4>Master of Fine Arts <span>Interactive Media</span></h4>
            <h5>Minneapolis College of Art &amp; Design</h5>
            <small>Visual Studies concentration in Interaction Design</small>
            <small>Teaching Assistant for Foundation Media Courses</small>
          </li>
          <li data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <h4>Bachelor of Fine Arts <span>Multimedia Design</span></h4>
            <h5>University of Wisconsin Stout</h5>
          </li>
        </ul>
      </div>

    </section>
  `
})
export class AboutComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
