import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {TokenStorageService} from "../../../token/token-storage-service";


@Component({
  selector: 'app-dashboard-teacher',
  templateUrl: './dashboard-teacher.component.html',
  styleUrls: ['./dashboard-teacher.component.css']
})
export class DashboardTeacherComponent {

  constructor(private router:Router,
              private tokenStorageService:TokenStorageService) {
  }

  logout(){
    this.tokenStorageService.removeToken();
    this.router.navigate(['/login'])
  }
}
