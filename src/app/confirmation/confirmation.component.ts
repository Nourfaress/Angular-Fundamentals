import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})


export class ConfirmationComponent implements OnInit {

  totalPrice: number = 0;
  fullName: string = '';

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.totalPrice = this.cartService.calTotal();
    this.fullName = this.cartService.getFullName();
  }

}
