import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from './../project';
import { PROJECTS } from './../project-list';

@Component({
  selector: 'app-projects',
  template: `
  <section
    class="card__container projects"
    id="projects"
    data-aos="fade-up"
    data-aos-duration="500"
    data-aos-anchor-placement="top-bottom"
    >
    <div class="card"
      *ngFor="let project of project; let i = index"
      (click)="onSelect(project)"
      [class.selected]="project === selectedProject"
      routerLink="/project{{project.id}}"
      data-aos="fade-up"
      data-aos-duration="300"
      data-aos-anchor-placement="top-bottom"
      data-aos-offset="20"
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
  `,
})
export class CaseStudiesComponent implements OnInit {

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
