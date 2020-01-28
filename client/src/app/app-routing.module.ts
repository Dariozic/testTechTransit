import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { NewCoursesComponent } from './components/new-courses/new-courses.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    component: CoursesListComponent
  },
  {
    path: 'new_courses',
    component: NewCoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
