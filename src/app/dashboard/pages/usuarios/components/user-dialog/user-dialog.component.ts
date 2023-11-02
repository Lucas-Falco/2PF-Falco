import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styles: [
  ]
})
export class UserDialogComponent {
  userForm: FormGroup;

  constructor(private fb:FormBuilder){
    this.userForm = this.fb.group({
      name:["", Validators.required],
      lastname:["", Validators.required],
      mail:["", Validators.required, Validators.email]
    })
  }



}
