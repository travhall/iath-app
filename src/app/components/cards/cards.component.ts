import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from '../../project';
import { PROJECTS } from '../../project-list';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {
  constructor() { }
  project = PROJECTS;
  selectedProject: Project;
  @Output() change: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  onSelect(project: Project): void {
    this.selectedProject = project;
    this.change.emit(this.selectedProject);
    console.log(this.selectedProject);
  }
}
