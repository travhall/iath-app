import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';
import { PROJECTS } from '../../project-list';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: []
})
export class CardsComponent implements OnInit {
  project = PROJECTS;
  selectedProject: Project;
  constructor() { }

  ngOnInit() {
  }

  onSelect(project: Project): void {
    this.selectedProject = project;
  }
}
