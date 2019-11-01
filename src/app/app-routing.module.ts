import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home.component';
import { AboutComponent } from './views/about.component';
import { CaseStudiesComponent } from './views/case-studies.component';
import { ContactComponent } from './views/contact.component';
import { ResumeComponent } from './views/resume.component';
import { NotFoundComponent } from './views/not-found.component';

import { Project1Component } from './projects/project1/project1.component';
import { Project2Component } from './projects/project2/project2.component';
import { Project3Component } from './projects/project3/project3.component';
import { Project4Component } from './projects/project4/project4.component';
import { Project5Component } from './projects/project5/project5.component';
import { Project6Component } from './projects/project6/project6.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { state: 'Home' },
  },
  {
    path: 'work',
    component: CaseStudiesComponent,
    data: { state: 'Work' },
  },
  {
    path: '',
    children: [
      {
        path: 'project6',
        component: Project6Component,
      },
      {
        path: 'project5',
        component: Project5Component,
      },
      {
        path: 'project4',
        component: Project4Component,
      },
      {
        path: 'project3',
        component: Project3Component,
      },
      {
        path: 'project2',
        component: Project2Component,
      },
      {
        path: 'project1',
        component: Project1Component,
      },
    ]
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { state: 'About' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { state: 'Contact' },
  },
  // {
  //   path: 'resume',
  //   component: ResumeComponent,
  //   data: { state: 'Resume' },
  // },
  {
    path: '**',
    component: NotFoundComponent,
    data: { state: '404' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      scrollPositionRestoration: 'top',
      enableTracing: true
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
