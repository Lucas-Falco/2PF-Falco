import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../../persona';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})

export class FormsComponent {
  personas:Persona[] = []
  userForm: FormGroup;

  constructor(private fb:FormBuilder){
    this.userForm = this.fb.group({
      name:["", Validators.required],
      lastname:["", Validators.required],
      mail:["",Validators.required, Validators.email]
    })
  }
  get nombreForm(){
    return  this.userForm.controls['name'].value
  }
  get apellidoForm(){
    return  this.userForm.controls['lastname'].value
  }
  get emailForm(){
    return  this.userForm.controls['mail'].value
  }




}
