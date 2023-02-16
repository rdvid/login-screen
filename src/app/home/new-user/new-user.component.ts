import { Router } from '@angular/router';
import { UserExistService } from './user-exist.service';
import { NewUserService } from './new-user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUser } from './new-user';
import { minusculoValidator } from './minusculo.validator';
import { userPasswordEqualValidator } from './user-password-equal.validator';
import { SubscriptionLoggable } from 'rxjs/internal/testing/SubscriptionLoggable';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  newUserForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService,
    private userExists: UserExistService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: ['', [minusculoValidator], [this.userExists.userExist()]],
        password: [''],
      },
      {
        validators: [userPasswordEqualValidator],
      }
    );
  }

  register() {
    if (this.newUserForm.valid) {
      const newUser = this.newUserForm.getRawValue() as NewUser;
      this.newUserService.registerNewUser(newUser).subscribe(
        () => {
          this.router.navigate(['']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
