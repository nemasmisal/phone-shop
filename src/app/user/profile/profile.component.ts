import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: string;
  user$: Observable<IUser>;
  constructor(private userService: UserService) { }

  ngOnInit(){
    this.userId = sessionStorage.getItem('userId');
    this.user$ = this.userService.profile(this.userId);
  }

}
