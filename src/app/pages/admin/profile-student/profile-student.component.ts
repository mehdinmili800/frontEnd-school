import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../../service/student.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.css']
})
export class ProfileStudentComponent implements OnInit{
  public  username:string| undefined;
  public  dateOfBirth:string| undefined;
  public  address:string| undefined;
  public  gender:string| undefined;
  public  educationId:string| undefined;
  public  fullName:string| undefined;
  public  parent1Name:string| undefined;
  public  parent2Name:string| undefined;
  public  parent1Phone:string| undefined;
  public  parent2Phone:string| undefined;



  constructor(private studentService:StudentService,
              private router: Router,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {
    // Retrieve the username from the query parameters
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
  }
  createProfileStudent():void{
    this.studentService.createProfileStudent(this.username,this.dateOfBirth,this.address,this.gender,
      this.educationId,this.fullName,this.parent1Name,this.parent2Name,this.parent1Phone,this.parent2Phone).subscribe(
      {}
    );
    this.router.navigate(['/table-user']);
  }
}
