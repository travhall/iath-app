import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { ScrollToModule } from 'ng2-scroll-to-el';

// Page Components
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

// View Components
import { HomeComponent } from './views/home.component';
import { AboutComponent } from './views/about.component';
import { CaseStudiesComponent } from './views/case-studies.component';
import { ContactComponent } from './views/contact.component';
import { ResumeComponent } from './views/resume.component';
import { NotFoundComponent } from './views/not-found.component';

// Project Views
import { Project1Component } from './projects/project1/project1.component';
import { Project2Component } from './projects/project2/project2.component';
import { Project3Component } from './projects/project3/project3.component';
import { Project4Component } from './projects/project4/project4.component';
import { Project5Component } from './projects/project5/project5.component';
import { Project6Component } from './projects/project6/project6.component';
import { CaseComponent } from './projects/case.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    CaseStudiesComponent,
    AboutComponent,
    ContactComponent,
    ResumeComponent,
    NotFoundComponent,
    Project1Component,
    Project2Component,
    Project3Component,
    Project4Component,
    Project5Component,
    Project6Component,
    CaseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
