import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardAdminComponent } from './pages/admin/dashboard-admin/dashboard-admin.component';
import { DashboardTeacherComponent } from './pages/teacher/dashboard-teacher/dashboard-teacher.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";
import { TableUserComponent } from './pages/admin/table-user/table-user.component';
import {TokenInterceptor} from "./token/token-interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { CreateCourseComponent } from './pages/admin/create-course/create-course.component';
import { CreateExamsComponent } from './pages/admin/create-exams/create-exams.component';
import { DashboardStudentComponent } from './pages/student/dashboard-student/dashboard-student.component';
import { ProfileTeacherComponent } from './pages/admin/profile-teacher/profile-teacher.component';
import { ProfileStudentComponent } from './pages/admin/profile-student/profile-student.component';
import { TableStudentComponent } from './pages/teacher/table-student/table-student.component';
import { TableCourseComponent } from './pages/teacher/table-course/table-course.component';
import { TableExamComponent } from './pages/teacher/table-exam/table-exam.component';
import { TableTeacherComponent } from './pages/student/table-teacher/table-teacher.component';
import { ResultsExamsComponent } from './pages/student/results-exams/results-exams.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardAdminComponent,
    DashboardTeacherComponent,
    TableUserComponent,
    CreateCourseComponent,
    CreateExamsComponent,
    DashboardStudentComponent,
    ProfileTeacherComponent,
    ProfileStudentComponent,
    TableStudentComponent,
    TableCourseComponent,
    TableExamComponent,
    TableTeacherComponent,
    ResultsExamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterOutlet,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
