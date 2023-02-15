import { Observable } from 'rxjs';
import { AbstractControl } from '@angular/forms';
import { NewUserService } from './new-user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserExistService {
  constructor(private newUserService: NewUserService) {}

  userExist() {
    return (control: AbstractControl) => {
      return Observable;
    };
  }
}
