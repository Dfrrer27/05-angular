import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor( private countryService: CountryService ) { }

  ngOnInit(): void {
    this.countryService.getCountry()
    .subscribe( countries => {
      console.log( countries );
    });
  }

}
