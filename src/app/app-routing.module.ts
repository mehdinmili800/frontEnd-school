import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {DashboardAdminComponent} from "./pages/admin/dashboard-admin/dashboard-admin.component";
import {DashboardTeacherComponent} from "./pages/teacher/dashboard-teacher/dashboard-teacher.component";
import {TableUserComponent} from "./pages/admin/table-user/table-user.component";
import {CreateCourseComponent} from "./pages/admin/create-course/create-course.component";
import {DashboardStudentComponent} from "./pages/student/dashboard-student/dashboard-student.component";
import {CreateExamsComponent} from "./pages/admin/create-exams/create-exams.component";
import {ProfileTeacherComponent} from "./pages/admin/profile-teacher/profile-teacher.component";
import {ProfileStudentComponent} from "./pages/admin/profile-student/profile-student.component";
import {TableStudentComponent} from "./pages/teacher/table-student/table-student.component";
import {TableCourseComponent} from "./pages/teacher/table-course/table-course.component";
import {TableExamComponent} from "./pages/teacher/table-exam/table-exam.component";
import {TableTeacherComponent} from "./pages/student/table-teacher/table-teacher.component";
import {ResultsExamsComponent} from "./pages/student/results-exams/results-exams.component";

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'dashboard-admin',component:DashboardAdminComponent
  },
  {
    path:'dashboard-teacher',component:DashboardTeacherComponent
  },
  {
    path:'dashboard-student',component:DashboardStudentComponent
  },


  //Admin
  // ------------
  {
    path:'table-user',component:TableUserComponent
  },
  {
    path:'create-course',component:CreateCourseComponent
  },
  {
    path:'create-exam',component:CreateExamsComponent
  },
  {
    path:'profile-teacher',component:ProfileTeacherComponent
  },
  {
    path:'profile-student',component:ProfileStudentComponent
  },

  // Teacher
  // ----------

  {
    path:'table-student',component:TableStudentComponent
  },
  {
    path:'table-course',component:TableCourseComponent
  },
  {
    path:'table-exam',component:TableExamComponent
  },

  // Student
  // -----------

  {
    path:'table-teacher',component:TableTeacherComponent
  },
  {
    path:'results-exams',component:ResultsExamsComponent
  },

  {
    path:'**',redirectTo:'/login',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
