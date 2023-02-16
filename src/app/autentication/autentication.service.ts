import { UserService } from './user/user.service';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { response } from 'express';

@Injectable({
  providedIn: 'root',
})
export class AutenticationService {
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  auth(user: string, password: string): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        'http://localhost:3000/user/login',
        {
          userName: user,
          password: password,
        },
        {
          observe: 'response',
        }
      )
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('x-access-token') ?? '';
          this.userService.saveToken(authToken);
        })
      );
  }
}
