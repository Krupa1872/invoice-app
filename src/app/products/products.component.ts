import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  id: number;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Parachute Pants', price:	 29.99 },
  {id: 2, name: 'Phone Holder', price:	 9.99},
  {id: 3, name: 'Pet Rock', price:	5.99},
  {id: 4, name: 'Egg Timer', price: 15.99},
  {id: 5, name: 'Neon Green Hat', price:  21.99}
]
  
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
