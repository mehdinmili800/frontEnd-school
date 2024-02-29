// create-course.component.ts
import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements  OnInit{

  course: any = { title: '', year: null, teacher_id: null };
  apiUrl = 'http://test-school.eu-north-1.elasticbeanstalk.com/api/courses/create';
  teachers: any[] = [];

  ngOnInit() {
    // Set headers if needed
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add any other headers if necessary
    });

    // Fetch the list of teachers when the component initializes
    this.http.get<any[]>('http://test-school.eu-north-1.elasticbeanstalk.com/api/teachers/all', { headers })
      .subscribe(
        (teachers) => {
          this.teachers = teachers;
        },
        (error) => {
          console.error('API Error:', error);
          // Handle the error as needed
        }
      );
  }

  constructor(private http: HttpClient,
              private router: Router) { }

  // Method to make the API request for a single course
  createCourse() {
    this.http.post(this.apiUrl, this.course)
      .subscribe(
        (response) => {
          console.log('API Response:', response);
          // Handle the response as needed
          this.router.navigate(['/dashboard-admin']);

        },
        (error) => {
          console.error('API Error:', error);
          // Handle the error as needed
        }
      );
  }

  goBack() {
    this.router.navigate(['/dashboard-admin']);
  }
}
