import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private apiUrl = 'http://test-school.eu-north-1.elasticbeanstalk.com/api'
  constructor(private http:HttpClient) { }


  createProfileTeacher(username:string | undefined,
                       email:string | undefined,
                       phone:string | undefined
  ) : Observable<any>{
    const  credentials = {email,phone,username};
    return this.http.post<any>(`${this.apiUrl}/teachers/create`,credentials);
  }


  getTeachers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/teachers/all`);
  }

  getTeachersCourses(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/course/all`);
  }




}
