import { User } from './user';
import jwtDecode from 'jwt-decode';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private tokenService: TokenService) {
    if (this.tokenService.hasToken()) {
      this.decodeJwt();
    }
  }

  private userSubject = new BehaviorSubject<User>({});

  private decodeJwt() {
    const token = this.tokenService.returnToken();
    const user = jwt_decode(token) as User;
    this.userSubject.next(user);
  }

  returnUser() {
    return this.userSubject.asObservable();
  }

  saveToken(token: string) {
    this.tokenService.saveToken(token);
    this.decodeJwt();
  }

  logOut() {
    this.tokenService.deleteToken();
    this.userSubject.next({});
  }

  isLogin() {
    return this.tokenService.hasToken();
  }
}
