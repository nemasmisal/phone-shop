import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticle } from 'src/app/core/models/article';
import { IUser } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private userService: UserService) { }
  userId: string;
  basket: IArticle[];
  totalAmount: number;

  ngOnInit(): void {
    this.userId = sessionStorage.getItem('userId');
    this.userService.getProfile(this.userId).subscribe((user: IUser) => {
      this.basket = user.basket;
      this.totalAmount = this.basket.reduce((acc: number, curr: IArticle) => acc + curr.price, 0)
    }, err => console.error(err))
  }

  placeOrder() {
    this.userService.placeOrder().subscribe((res) => {
      console.log(res);
    }, err => console.error(err))
  }

}
