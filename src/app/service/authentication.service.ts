import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {TokenStorageService} from "../token/token-storage-service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'http://test-school.eu-north-1.elasticbeanstalk.com/api/v1/auth'; // Update with your API URL

  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {}

  authenticate(username: string | undefined, password: string | undefined): Observable<any> {
    const credentials = { username, password };
    return this.http.post<any>(`${this.apiUrl}/authenticate`, credentials)
      .pipe(tap(response => {
        // Save token to local storage upon successful login
        this.tokenStorageService.saveToken(response.access_token);
      }));
  }


  logout(): void {
    // Remove the token from local storage upon logout
    this.tokenStorageService.removeToken();
  }

}
