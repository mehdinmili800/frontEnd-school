import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserResponseDTO} from "../dto/auth/user-response-dto";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://test-school.eu-north-1.elasticbeanstalk.com/api';

  constructor(private http:HttpClient) { }

  getUserData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user/all`);
  }


  createUser(username: string | undefined,
             password: string | undefined,
             fullName: string | undefined,
             role: string | undefined,
             ): Observable<any> {
    const credentials = { username, password,fullName,role };
    return this.http.post<any>(`${this.apiUrl}/user/create`, credentials);
  }


  deleteUser(userId: number): Observable<any> {
    const url = `${this.apiUrl}/user/${userId}`;
    return this.http.delete(url);
  }


}
