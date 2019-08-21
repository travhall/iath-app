import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ScrollToModule } from 'ng2-scroll-to-el';

// Page Components
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';

// View Components
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ResumeComponent } from './components/resume/resume.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { Project1Component } from './views/projects/project1/project1.component';
import { Project2Component } from './views/projects/project2/project2.component';
import { Project3Component } from './views/projects/project3/project3.component';
import { Project4Component } from './views/projects/project4/project4.component';
import { Project5Component } from './views/projects/project5/project5.component';
import { Project6Component } from './views/projects/project6/project6.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    CardsComponent,
    HomeComponent,
    AboutComponent,
    TestimonialsComponent,
    ResumeComponent,
    NotFoundComponent,
    Project1Component,
    Project2Component,
    Project3Component,
    Project4Component,
    Project5Component,
    Project6Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    ScrollToModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
