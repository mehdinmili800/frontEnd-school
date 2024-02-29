import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../pages/teacher/table-course/table-course.component";
import {Exams} from "../pages/teacher/table-exam/table-exam.component";

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private baseUrl = 'http://test-school.eu-north-1.elasticbeanstalk.com/api'; // Replace with your actual backend base URL

  constructor(private http: HttpClient) {}

  getAllExams(): Observable<Exams[]> {
    return this.http.get<Exams[]>(`${this.baseUrl}/exam/all`);
  }

}
