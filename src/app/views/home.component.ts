import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Project } from './../project';
import { PROJECTS } from './../project-list';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero home" id="hero" data-aos="fade-up" data-aos-duration="500" data-aos-anchor-placement="top-center">
      <div class="content">
        <h2 class="title">Hello, I'm Travis&nbsp;&hellip;</h2>
        <h3 class="h4 subtitle">and I enjoy making things for the web.</h3>
        <p>
          In other words,
          <em>I specialize in crafting digital experiences that transform challenges into opportunities</em>. But I'm
          guessing you're not here to read a bunch of industry jargon, are you?
        </p>
        <button class="btn -ghost" [scrollTo]="'#projects'">
          Featured work
          <svg class="icon">
            <use xlink:href="assets/icons/def.svg#icon-arrow-down-circle"></use>
          </svg>
        </button>
      </div>
    </section>

    <section class="card__container home" id="projects" data-aos="fade-up" data-aos-duration="500" data-aos-anchor-placement="top-bottom">
      <div
        class="card"
        *ngFor="let project of project | slice:0:3; let i = index"
        (click)="onSelect(project)"
        [class.selected]="project === selectedProject"
        routerLink="/project{{project.id}}"
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="90"
      >
        <div class="content">
            <div class="title">{{project.title}}</div>
            <div>
            <span class="role">{{project.role}}</span> &nbsp;<span class="client">{{project.client}}</span>
            </div>
            <div class="date">{{project.date}}</div>
        </div>
        <img src="{{project.cardImage}}" alt="{{project.alt}}" class="image" loading="lazy">
      </div>
    </section>

    <div class="btn-group" data-aos="fade-up" data-aos-duration="500" data-aos-anchor-placement="top-bottom">
      <button class="btn -ghost -lg" [routerLink]="'/work'">
        Check out my work
        <svg class="icon">
          <use xlink:href="assets/icons/def.svg#icon-arrow-right"></use>
        </svg>
      </button>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }
  project = PROJECTS;
  selectedProject: Project;
  @Output() change: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  onSelect(project: Project): void {
    this.selectedProject = project;
    this.change.emit(this.selectedProject);
    // console.log(this.selectedProject);
  }

}
