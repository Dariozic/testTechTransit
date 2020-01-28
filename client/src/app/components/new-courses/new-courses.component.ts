import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-new-courses',
  templateUrl: './new-courses.component.html',
  styleUrls: ['./new-courses.component.css']
})
export class NewCoursesComponent implements OnInit {

  courses: any;
  public dat: string;

  constructor(
    private coursesService: CoursesService
  ) {
    this.courses = [];
    this.dat = '';
  }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.coursesService.getNewCourses(this.dat).subscribe(
      res => {
        this.courses = res;
      },
      err => console.log(err)
    );
  }

  findByName() {
    if (this.dat) {
      if (this.dat.length) {
        this.getCourses();
      }
    }
  }
}
