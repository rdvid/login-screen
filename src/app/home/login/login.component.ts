import { Router, RouterModule } from '@angular/router';
import { AutenticationService } from './../../autentication/autentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  ngOnInit(): void {}

  constructor(
    private authService: AutenticationService,
    private router: Router
  ) {}

  login() {
    this.authService.auth(this.username, this.password).subscribe(
      () => {
        this.router.navigate(['animals']);
      },
      (err) => {
        alert('username or password invalid');
      }
    );
  }
}
