import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../../service/course.service";
import {Router} from "@angular/router";
import {Exams} from "../table-exam/table-exam.component";

@Component({
  selector: 'app-table-course',
  templateUrl: './table-course.component.html',
  styleUrls: ['./table-course.component.css']
})
export class TableCourseComponent implements OnInit{

  courses: Course[] = [];
  filteredExams: Course[] = [];


  currentPage = 1;
  itemsPerPage = 10;
  searchText = '';

  constructor(private courseService: CourseService,
              private router: Router,) {}

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

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(
      (data) => {
        console.log('Received data:', data); // Log the received data to the console
        this.courses = data;
        this.filteredExams = [...this.courses]; // Initialize filteredExams with all exams

      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }

  // New method for searching
  search(): void {
    // Case-insensitive search based on student's full name
    this.filteredExams = this.courses.filter(course =>
      course.teacher.teacher.fullName.toLowerCase().includes(this.searchText.toLowerCase())
    );

    // Reset pagination to the first page after searching
    this.currentPage = 1;
  }


  goBack() {
    this.router.navigate(['/dashboard-teacher']);
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

