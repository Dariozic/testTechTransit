import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

    API_URI = 'http://localhost:3000';

    constructor(private http: HttpClient) {
      let headers = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
    }

    //courses from remote database
    getCourses(url?: string,dat?: string) : Observable<any>{
      return (url) ?
        this.http.get(`https://test.mytablemesa.com${url}`) :
        this.http.get(`https://test.mytablemesa.com/api/courses?orderBy=popularity+desc&expand=provider&name=${dat}`)
    }

    //courses from local database
    getNewCourses(dat: string) {
        return (dat)? this.http.get(`${this.API_URI}/${dat}`) : this.http.get(`${this.API_URI}/`);
    }
}
