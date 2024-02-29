import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://test-school.eu-north-1.elasticbeanstalk.com/api'; // Update with your Spring Boot backend URL

  constructor(private http: HttpClient) {}

  createProfileStudent(username:string | undefined,
                       dateOfBirth:string | undefined,
                       address:string | undefined,
                       gender:string | undefined,
                       educationId:string | undefined,
                       fullName:string | undefined,
                       parent1Name:string | undefined,
                       parent2Name:string | undefined,
                       parent1Phone:string | undefined,
                       parent2Phone:string | undefined,
  ) : Observable<any>{
    const  credentials = {username,dateOfBirth,
      address,gender,educationId,fullName,parent1Name,
      parent2Name,parent1Phone,parent2Phone};
    return this.http.post<any>(`${this.apiUrl}/students/create`,credentials);
  }

  getStudentData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/students/all`);
  }
}
