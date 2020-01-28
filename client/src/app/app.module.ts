import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';


import { CoursesService } from './services/courses.service';
import { RatingModule } from 'ngx-bootstrap/rating';
import { NewCoursesComponent } from './components/new-courses/new-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CoursesListComponent,
    NewCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    RatingModule.forRoot()
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
