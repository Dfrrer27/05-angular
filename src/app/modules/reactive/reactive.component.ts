import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  

  constructor( private fb: FormBuilder, private validators: ValidatorsService ) { }

  Form = this.fb.group({
    name    : ['', [Validators.required, Validators.minLength(5)] ],
    lastName: ['', [Validators.required, Validators.minLength(5), this.validators.noFerrer ] ],
    email   : ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]],
    user: ['', [ Validators.required, this.validators.userExists] ],
    pass1:  ['', Validators.required], 
    pass2:  ['', Validators.required], 
    address : this.fb.group({
      district: ['', Validators.required],
      city: ['', Validators.required]
    }),
    hobbies: this.fb.array([
      ['', [Validators.required]],
      ['', [Validators.required]]
    ])
  },{
    validators: [this.validators.matchingPasswords('pass1', 'pass2')],
  });
  
  view = // this.Form.valueChanges.subscribe(valor =>  console.log({valor}));
        //  this.Form.statusChanges.subscribe(status =>  console.log({ status }));
          this.Form.get('name').valueChanges.subscribe( console.log );
  
  ngOnInit(): void {
  }

  get hobbies() {
    return this.Form.get('hobbies') as FormArray;
  }

  get repeatPassword(): boolean{
    const pass1 = this.Form.get('pass1').value;
    const pass2 = this.Form.get('pass2').value;

    return pass1 !== pass2; 
  }
  
  invalidField(campo: string) {
    return this.Form.get(campo)?.invalid && this.Form.get(campo)?.touched;
  }

  district(field: string){
    return this.Form.get(`${field}.district`)?.invalid && this.Form.get(`${field}.district`)?.touched;
  }
 
  city(field: string){
    return this.Form.get(`${field}.city`)?.invalid && this.Form.get(`${field}.city`)?.touched;
  }

  // get invalidName() {
  //   return this.Form.get('name')!.invalid && this.Form.get('name')!.touched
  // }

  // get invalidLastName() {
  //   return this.Form.get('lastName')!.invalid && this.Form.get('lastName')!.touched
  // }

  // get invalidEmail() {
  //   return this.Form.get('email')!.invalid && this.Form.get('email')!.touched
  // }
  
  addHobby(){
    this.hobbies.push( this.fb.control('', Validators.required) );
  }

  deleteHobby(i: number){
    this.hobbies.removeAt( i );
  }

  invalidHobby(i: number): boolean{
    return this.hobbies.at(i)?.invalid && this.hobbies.at(i)?.touched;
  }

  guardar(){
    console.log(this.Form);

    if (this.Form.invalid) {
      return Object.values( this.Form.controls ).forEach( control => {
        if (control instanceof FormGroup) {
          Object.values( control.controls ).forEach( control => control.markAllAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }

  this.Form.reset({
    name: 'Brian',
    lastName: 'Ferrer',
    email: 'Brian@example.com',
    pass1: '321',
    pass2: '321',
    address: {
      district: 'Villa Marisa del Triunfo',
      city: 'Lima'
    },
    hobbies: [
      'Hello World'
    ]});  
}
  
  //Posteo de Información


}
