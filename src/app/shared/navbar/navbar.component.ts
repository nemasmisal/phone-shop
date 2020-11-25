import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
  username:string;
  userId:string;
  admin:boolean ;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  
  }

  ngDoCheck() {
    this.username = sessionStorage.getItem('username');
    this.userId = sessionStorage.getItem('userId');
    this.admin = sessionStorage.getItem('admin') === 'true'? true: false;
  }

  logout() {
    this.userService.getUserLogout().subscribe(() => {
      sessionStorage.clear();
      this.router.navigate(['home']);
    }, err => {
      console.error(err)
    })
  }

}
