import { Component, OnInit } from '@angular/core';
import{Router} from'@angular/router';
import{CountryService} from '../../shared/country.service';
import{Country} from '../../country';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public country:Country;
  constructor(public countryService:CountryService, public router:Router) { }

  ngOnInit() {
    this.country=this.countryService.getter();
  }
  createOrUpdate(){
    this.countryService.createCountry(this.country).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['/invoices/display']);
      },
      error=>{
        console.log(error);
      }
    )
  }

}
