import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../models/Products';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit{
  @Input() productList: Products | undefined;
  constructor(){

  }
  ngOnInit(): void {
      
  }
}
