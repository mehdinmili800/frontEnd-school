import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TokenStorageService} from "../../../token/token-storage-service";
import {CourseService} from "../../../service/course.service";
import {ExamService} from "../../../service/exam.service";

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit{


  constructor(private examService: ExamService,
              private courseService: CourseService,
              private router:Router,
              private tokenStorageService:TokenStorageService) {
  }

  logout(){
    this.tokenStorageService.removeToken();
    this.router.navigate(['/login'])
  }

// Course *********
  courses: Course[] = [];

  currentPage = 1;
  itemsPerPage = 4;
  totalCourses = 0; // Add this variable

// Exams *********

  exams: Exams[] = [];

  currentPageExams = 1;
  itemsPerPageExams = 4;
  totalExams = 0; // Add this variable



  get totalPages(): number {
    return Math.ceil(this.courses.length / this.itemsPerPage);
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }


  get totalPagesExams(): number {
    return Math.ceil(this.exams.length / this.itemsPerPageExams);
  }

  prevPageExams(): void {
    if (this.currentPageExams > 1) {
      this.currentPageExams--;
    }
  }

  nextPageExams(): void {
    if (this.currentPageExams < this.totalPagesExams) {
      this.currentPageExams++;
    }
  }

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(
      (data) => {
        console.log('Received data:', data);
        this.courses = data;
        this.totalCourses = this.courses.length; // Set the totalCourses value
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
    this.examService.getAllExams().subscribe(
      (data) => {
        console.log('Received data:', data); // Log the received data to the console
        this.exams = data;
        this.totalExams = this.exams.length; // Set the totalCourses value

      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }



  getCoursesOnCurrentPage(): Course[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const slicedCourses = this.courses.slice(startIndex, endIndex);
    return slicedCourses.reverse();
  }

  getCoursesOnCurrentPageExams(): Exams[] {
    const startIndexExams = (this.currentPageExams - 1) * this.itemsPerPageExams;
    const endIndexExams = startIndexExams + this.itemsPerPage;
    const slicedExams = this.exams.slice(startIndexExams, endIndexExams);
    return slicedExams.reverse();
  }



}

// course.model.ts

export interface Course {
  id: number;
  title: string;
  year: number;
  teacher: {
    id: number;
    teacher:{
      fullName:string;
    }
    // يمكنك إضافة المزيد من الخصائص هنا إذا كانت مطلوبة
  };
  // يمكنك إضافة المزيد من الخصائص هنا إذا كانت مطلوبة
}

export interface Exams {
  id:number;
  mark:number;
  writtenAt:string;
  course:{
    id:number,
    title:string,
    year:number,
    teacher:{
      id:number,
      teacher:{
        id:number,
        username:string,
        fullName:string,
      }

    }
  },
  student:{
    id:number,
    student:{
      id:number,
      fullName:String,
    }
  }

}



