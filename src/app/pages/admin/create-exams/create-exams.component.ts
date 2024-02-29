import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-exams',
  templateUrl: './create-exams.component.html',
  styleUrls: ['./create-exams.component.css']
})
export class CreateExamsComponent implements OnInit{

  constructor(private http: HttpClient,
              private router: Router) {
  }

  exam: any = {mark:null,written_at:'',course_id:null,student_id:null}
  apiUrl = 'http://localhost:5000/api/exams/create';
  courses: any[] =[];
  students:any[]=[];

  ngOnInit() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',

    });

    this.http.get<any[]>('http://test-school.eu-north-1.elasticbeanstalk.com/api/course/all',{headers})
      .subscribe(
        (courses) =>{
          this.courses = courses;
        },
        (error) =>{
          console.error('API Error:',error);
        }
      );
    this.http.get<any[]>('http://test-school.eu-north-1.elasticbeanstalk.com/api/students/all',{headers})
      .subscribe(
        (students) => {
          this.students = students;
        },
        (error) => {
          console.error('API Error:', error);
        }
      );
  }

  createExams(){
    this.http.post(this.apiUrl,this.exam)
      .subscribe(
        (response) =>{
          console.log('API Response:',response);
          this.router.navigate(['/dashboard-admin']);

        },
        (error)=>{
          console.error('API Error:', error);
        }
      )
  }

  goBack() {
    this.router.navigate(['/dashboard-admin']);
  }

}
