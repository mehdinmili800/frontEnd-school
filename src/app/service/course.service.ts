import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../pages/teacher/table-course/table-course.component";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = 'http://test-school.eu-north-1.elasticbeanstalk.com/api'; // Replace with your actual backend base URL

  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/course/all`);
  }

}
