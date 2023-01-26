import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor( private http: HttpClient ) { }

  getCountry(){
    return this.http.get('https://restcountries.com/v2/lang/es')
    .pipe(map((resp:any = []) => {
        return resp.map( (countries: { name: any; alpha3Code: any; }) => {
          return{
            nombre: countries.name,
            codigo: countries.alpha3Code
          }
        })
      })
    );
  }

  //Otra manera es convertir Country en un Arrat de objetos.

  // getCountry(){
  //   return this.http.get('https://restcountries.com/v2/lang/es')
  //   .pipe(map(countries => {
  //     return Object.values(countries).map(country => {
  //       return {
  //         nombre: country.name,
  //         codigo: country.alpha3Code,
  //       }
  //     })
  //   }))
  // }

}
