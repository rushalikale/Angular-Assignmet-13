import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-validation',
  templateUrl: './reactive-forms-validation.component.html',
  styleUrls: ['./reactive-forms-validation.component.css']
})
export class ReactiveFormsValidationComponent implements OnInit {

  //Injecting fromBuilders Service to create formGroup and formControl
  constructor(private _fbobjm: FormBuilder) { }
  public states = ['Maharashtra','Gujarat','Uttar Pradesh'];
  
  LoginForm : any = this._fbobjm.group(
    {
      // Add Multiple validations
      //User First name and Last name both are required and only caontains aplhabets
      userFirstName :['',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
      userLastName : ['',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+' )]],
      //Email is required and contain abc@xyz.com pattern
      email : ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9_.]+@[a-zA-Z]+.[a-zA-Z]+$')]],
      //Phone is required and Contains 10 digits and onli digits
      phone : ['',[Validators.required, Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]*')]],
      //Nested form group
      AddressClass : this._fbobjm.group({
        //City is required and contais at least 4 characters
        city : ['',[Validators.required, Validators.minLength(4)]],
        //Zip is required and contains only 5 digits
        zipcode : ['',[Validators.required,Validators.minLength(5), Validators.maxLength(5),Validators.pattern('[0-9]*')]],
      }),
      //Comments contains at least 30 characters
      comments : ['',Validators.minLength(30)]
    }
  );


  ngOnInit(): void {
  }

}
