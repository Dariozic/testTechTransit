import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses: any;
  public dat: string;
  private nextUrl: string;
  public finished: boolean;

  constructor(
    private coursesService: CoursesService
  ) {
    this.courses = [];
    this.dat = '';
  }

  ngOnInit() {
      this.getCourses(false);
  }

  private getCourses(nextPage: boolean) {
    let search: any;
    this.finished = false;

    if (nextPage) {
      search = this.coursesService.getCourses(this.nextUrl);
    } else {
      search = this.coursesService.getCourses(null, this.dat)
    }

    search.subscribe(
      success => {
        this.finished = true;
        this.nextUrl = success.next;
        if (nextPage) {
          this.courses = [ ...this.courses, ...success.items];
        } else {
          this.courses = success.items;
        }

      }, error => {
      }
    );
  }

  findByName() {
    if (this.dat) {
      if (this.dat.length) {
        this.getCourses(false);
      }
    }
  }

  onScroll (event: any) {
    this.getCourses(true);
    window.scrollTo(0, event.currentScrollPosition);
  }

}
