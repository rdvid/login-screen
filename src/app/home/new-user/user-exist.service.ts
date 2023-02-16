import { AbstractControl } from '@angular/forms';
import { NewUserService } from './new-user.service';
import { Injectable } from '@angular/core';
import { first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserExistService {
  constructor(private newUserService: NewUserService) {}

  userExist() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((newUser) => this.newUserService.verifyExistentUser(newUser)),
        map((newUser) => (newUser ? { UserExist: true } : null)),
        first()
      );
    };
  }
}
