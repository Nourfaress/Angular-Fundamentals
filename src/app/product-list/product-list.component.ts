import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import Item from '../models/item';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productSevice: ProductService,
        private cartService: CartService) { }

  ngOnInit(): void {
    this.productSevice.getProducts().subscribe(products => {
      this.products = products;
    });
  }
  addToCart(item: Item) {
    this.cartService.addItem(item);
  }

}
