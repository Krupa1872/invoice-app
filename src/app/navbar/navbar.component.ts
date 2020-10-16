import { Component, OnInit } from '@angular/core';
import{Router} from'@angular/router';
import { CountryService } from '../shared/country.service';
import{Country} from '../country';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router:Router, public countryService:CountryService) { }

  ngOnInit(): void {
  }
  newCountry(event:any){
    event.preventDefault();
    this.countryService.setter(new Country());
    this.router.navigate(['/invoices/display']);
  }

}
