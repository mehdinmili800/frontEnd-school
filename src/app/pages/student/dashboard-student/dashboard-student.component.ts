import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../../../service/student.service";
import {TokenStorageService} from "../../../token/token-storage-service";

@Component({
  selector: 'app-dashboard-student',
  templateUrl: './dashboard-student.component.html',
  styleUrls: ['./dashboard-student.component.css']
})
export class DashboardStudentComponent {

  constructor(private router:Router,
              private tokenStorageService:TokenStorageService) {
  }

  logout(){
    this.tokenStorageService.removeToken();
    this.router.navigate(['/login'])
  }

}
