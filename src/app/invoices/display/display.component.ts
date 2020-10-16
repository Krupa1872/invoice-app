import { Component, OnInit } from '@angular/core';
import{CountryService} from'../../shared/country.service';
import{Country} from'../../country';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  public countries:Country[];
  constructor(public _countryService:CountryService) { }

  ngOnInit(){
    this.readCountries();
  }
  readCountries(){
    this._countryService.readCountries().subscribe(
      data=>{
        console.log(data);
        this.countries=data['msg'];
      },
      error=>{
        console.log(error);
      }
    )
  }
}
