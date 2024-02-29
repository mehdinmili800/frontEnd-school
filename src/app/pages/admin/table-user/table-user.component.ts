import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../service/authentication.service";
import {UserService} from "../../../service/user.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserResponseDTO} from "../../../dto/auth/user-response-dto";

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})
export class TableUserComponent implements OnInit {

  userData: any[] = [];  // Initialize userData as an empty array
  error: any;
  showAddUserFormFlag: boolean = false;

  public username: string | undefined ;
  public password: string | undefined ;
  public fullName: string | undefined ;
  public role: string | undefined ;


  constructor(private authService: AuthenticationService,
              private userService: UserService,
              private router: Router,
              private fb: FormBuilder) {
  }

  currentPage = 1;
  itemsPerPage = 10;

  get totalPages(): number {
    return Math.ceil(this.userData.length / this.itemsPerPage);
  }

// Update your ngOnInit method
  ngOnInit(): void {
    this.userService.getUserData().subscribe(
      data => {
        this.userData = data;
      },
      error => {
        console.error('Error:', error);
        this.error = error;
      }
    );
  }

// Add these methods for pagination
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

// Add methods for edit and delete actions
  editUser(user: any): void {
    // Implement edit logic here
  }

  deleteUser(user: any): void {
    debugger
    this.userService.deleteUser(user.id).subscribe(
      () => {
        // Update userData array after successful deletion
        this.userData = this.userData.filter(u => u.id !== user.id);
      },
      (error) => {
        console.error("Error deleting user:", error);
        // Optionally, you can handle the error and provide feedback to the user
      }
    );
  }


  showAddUserForm() {
    this.showAddUserFormFlag = true;
  }

  addNewUser(): void {
    console.log("Role:", this.role);

    this.userService.createUser(this.username, this.password, this.fullName, this.role).subscribe(
      () => {
        this.showAddUserFormFlag = false;

        // Check the role and navigate to the appropriate dashboard
        if (this.role === 'ROLE_TEACHER') {
          this.router.navigate(['/profile-teacher'], { queryParams: { username: this.username } });
        } else if (this.role === 'ROLE_STUDENT') {
          this.router.navigate(['/profile-student'], { queryParams: { username: this.username } });
        } else {
          console.error("Invalid role:", this.role);
          // Handle the case when the role is not recognized
        }
      },
      (error) => {
        console.error("Error creating user:", error);
        // Optionally, you can handle the error and provide feedback to the user
      }
    );
  }



  goBack() {
    this.router.navigate(['/dashboard-admin']);
  }
}
