import {Component, OnInit} from '@angular/core';
import {TeacherService} from "../../../service/teacher.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-table-teacher',
  templateUrl: './table-teacher.component.html',
  styleUrls: ['./table-teacher.component.css']
})
export class TableTeacherComponent implements OnInit{

  teachers:Teachers[] = [];

  currentPage = 1;
  itemsPerPage = 10;

  constructor(private teacherService:TeacherService,
              private router:Router) {
  }

  get totalPages(): number {
    return Math.ceil(this.teachers.length / this.itemsPerPage);
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
    this.teacherService.getTeachersCourses().subscribe(
      (data) => {
        console.log('Received data:', data); // Log the received data to the console
        this.teachers = data;
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }

  goBack() {
    this.router.navigate(['/dashboard-student']);
  }


}

export interface  Teachers{
  id:number,
  title:string,
  year:string,
  teacher:{
    id:number,
    teacher:{
      id:number,
      fullName:string
    },
    phone:string
  }
}


