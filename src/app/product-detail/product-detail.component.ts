import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product';
import Item from '../models/item';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: number = 0;
  product: Product = new Product();
  quantity: number = 1;
  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9]


  constructor(private activeRoute: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService) {
      this.activeRoute.paramMap.subscribe((params: ParamMap)=> {
        this.id = Number(params.get('id'))
      })
    }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.product = data.find(p => {
      return p.id === this.id
    }) as Product;
  });
  }
  addItem(product: Product) {
    this.cartService.addItem(new Item(product, this.quantity))
    alert(`${product.name} added.`);
  }
}
