import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { Project1Component } from './views/projects/project1/project1.component';
import { Project2Component } from './views/projects/project2/project2.component';
import { Project3Component } from './views/projects/project3/project3.component';
import { Project4Component } from './views/projects/project4/project4.component';
import { Project5Component } from './views/projects/project5/project5.component';
import { Project6Component } from './views/projects/project6/project6.component';
// import { ProjectComponent } from './views/project/project.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: { state: 'Home' }
  },
  {
    path: 'views/projects',
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
