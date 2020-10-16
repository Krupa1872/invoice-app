import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  id: number;
  number: number;
  address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Mark Benson', number: 555-534-2342, address: '353 Rochester St, Rialto FL 43250	'},
  {id: 2, name: 'Bob Smith', number: 555-534-2342, address: '215 Market St, Dansville CA 94325'},
  {id: 3, name: 'John Draper', number: 555-534-2342, address: '890 Main St, Fontana IL 31450	'},
]
  

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'address', 'number'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
