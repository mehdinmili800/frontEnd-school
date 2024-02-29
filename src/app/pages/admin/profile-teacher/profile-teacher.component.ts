import {Component, OnInit} from '@angular/core';
import {TeacherService} from "../../../service/teacher.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-profile-teacher',
  templateUrl: './profile-teacher.component.html',
  styleUrls: ['./profile-teacher.component.css']
})
export class ProfileTeacherComponent implements OnInit {
  public username: string | undefined;
  public  email:string| undefined;
  public  phone:string| undefined;



  constructor(private teacherService:TeacherService,
              private router:Router,
              private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    // Retrieve the username from the query parameters
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
  }

  createProfileTeacher():void{
    this.teacherService.createProfileTeacher(this.username,this.email,this.phone).subscribe(
      {}
    );
    this.router.navigate(['/table-user']);
  }

}

