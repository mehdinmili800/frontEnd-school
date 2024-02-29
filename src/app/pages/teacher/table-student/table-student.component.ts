import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../../service/student.service";
import {Router} from "@angular/router";
import {Exams} from "../table-exam/table-exam.component";

@Component({
  selector: 'app-table-student',
  templateUrl: './table-student.component.html',
  styleUrls: ['./table-student.component.css']
})
export class TableStudentComponent implements OnInit{

  studentData: any[] = [];
  filteredStudent: any[] = [];
  error:any;
  showAddUserFormFlag: boolean = false;


  currentPage = 1;
  itemsPerPage = 10;
  searchText = '';

  constructor(private studentService:StudentService,
              private router: Router,) {
  }

  get totalPages(): number {
    return Math.ceil(this.studentData.length / this.itemsPerPage);
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

  ngOnInit():void {
    this.studentService.getStudentData().subscribe(
      data => {
        this.studentData = data;
        this.filteredStudent = [...this.studentData];
      },
      error => {
        console.error('Error:', error);
        this.error = error;
      }
    )
  }

  // New method for searching
  search(): void {
    // Case-insensitive search based on student's full name
    this.filteredStudent = this.studentData.filter(student =>
      student.student.fullName.toLowerCase().includes(this.searchText.toLowerCase())
    );

    // Reset pagination to the first page after searching
    this.currentPage = 1;
  }

  goBack() {
    this.router.navigate(['/dashboard-teacher']);
  }

}
