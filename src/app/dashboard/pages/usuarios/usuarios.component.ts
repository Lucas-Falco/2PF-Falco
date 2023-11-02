import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../../persona';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  personas:Persona[] = []
  userForm: FormGroup;

  constructor(private fb:FormBuilder, private matDialog: MatDialog){
    this.userForm = this.fb.group({
      name:["", Validators.required],
      lastname:["", Validators.required],
      mail:["", Validators.required]
    })
  }


  openUsuariosDialog(): void {
    this.matDialog.open(UserDialogComponent)
    .afterClosed()
    .subscribe({
      next:(value)=>{
        this.userForm = value
        console.log(value)
      }
    })
    //this.matDialog.open(UserDialogComponent)
  }
  onSubmit(): void{

    this.personas.push (new Persona(this.userForm.value.name, this.userForm.value.lastname, this.userForm.value.mail,))
    this.userForm.reset();

  }
}
