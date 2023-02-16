import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from 'src/app/autentication/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user$ = this.userService.returnUser();

  constructor(private userService: UserService, private router: Router) {}

  logout() {
    this.userService.logOut();
    this.router.navigate(['']);
  }
}
