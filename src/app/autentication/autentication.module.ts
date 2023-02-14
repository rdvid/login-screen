import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AutenticationModule {
  constructor(private httpClient: HttpClient) {}

  auth(user: string, password: string): Observable<any> {
    return this.httpClient.post('http://localhost:3000/user/login', {
      userName: user,
      password: password,
    });
  }
}
