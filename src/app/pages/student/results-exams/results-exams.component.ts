import {Component, OnInit} from '@angular/core';
import {Exams} from "../../teacher/table-exam/table-exam.component";
import {ExamService} from "../../../service/exam.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-results-exams',
  templateUrl: './results-exams.component.html',
  styleUrls: ['./results-exams.component.css']
})
export class ResultsExamsComponent implements OnInit{

  exams:Exams[] = [];
  filteredExams: Exams[] = []; // New array to store filtered exams


  currentPage = 1;
  itemsPerPage = 10;
  searchText = ''; // Binding for the search input




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
        console.log('Received data:', data);
        this.exams = data;
        this.filteredExams = [...this.exams]; // Initialize filteredExams with all exams
      },
      (error) => {
        console.error('Error fetching exams:', error);
      }
    );
  }

  // New method for searching
  search(): void {
    // Case-insensitive search based on student's full name
    this.filteredExams = this.exams.filter(exam =>
      exam.student.student.fullName.toLowerCase().includes(this.searchText.toLowerCase())
    );

    // Reset pagination to the first page after searching
    this.currentPage = 1;
  }

  goBack() {
    this.router.navigate(['/dashboard-student']);
  }

}

