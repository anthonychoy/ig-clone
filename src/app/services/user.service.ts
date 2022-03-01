import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserResponseResult } from '../modules/User';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl: string = 'https://randomuser.me/api';
  public userInfo = null;

  constructor(private http: HttpClient) { }

  // Get user profile API
  getUserProfileApi(userId: string): Promise<UserResponseResult> {
    return this.http.get<any>(`${this.apiUrl}`).toPromise();
  }

  // Get user profile
  async getUserProfile(userId: string): Promise<any> {
    return new Promise(resolve => {
      if (!this.userInfo) {
        this.getUserProfileApi(userId).then(response => {
          this.userInfo = response;
          resolve(response);
        });
      } else {
        resolve(this.userInfo);
      }
    });
  }
}
