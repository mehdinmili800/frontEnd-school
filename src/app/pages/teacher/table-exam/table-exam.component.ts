import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ExamService} from "../../../service/exam.service";

@Component({
  selector: 'app-table-exam',
  templateUrl: './table-exam.component.html',
  styleUrls: ['./table-exam.component.css']
})
export class TableExamComponent implements OnInit{

  exams: Exams[] = [];
  filteredExams: Exams[] = [];

  currentPage = 1;
  itemsPerPage = 10;
  searchTextStudent = '';
  searchTextTeacher = '';

  constructor(private examService: ExamService,
              private router: Router,) {}

  get totalPages(): number {
    return Math.ceil(this.exams.length / this.itemsPerPage);
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
    this.examService.getAllExams().subscribe(
      (data) => {
        console.log('Received data:', data); // Log the received data to the console
        this.exams = data;
        this.filteredExams = [...this.exams];
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }

  searchStudent(): void {
    // Case-insensitive search based on student's full name
    this.filteredExams = this.exams.filter(exam =>
      exam.student.student.fullName.toLowerCase().includes(this.searchTextStudent.toLowerCase())
    );

    // Reset pagination to the first page after searching
    this.currentPage = 1;
  }

  searchTeacher(): void {
    // Case-insensitive search based on student's full name
    this.filteredExams = this.exams.filter(exam =>
      exam.course.teacher.teacher.fullName.toLowerCase().includes(this.searchTextTeacher.toLowerCase())
    );

    // Reset pagination to the first page after searching
    this.currentPage = 1;
  }

  goBack() {
    this.router.navigate(['/dashboard-teacher']);
  }


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
