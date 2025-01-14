import { Component } from '@angular/core';
import { FormsModule, FormControl, Validators, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registrazione',
  standalone: false,

  templateUrl: './registrazione.component.html',
  styleUrl: './registrazione.component.scss'
})
export class RegistrazioneComponent {

  form  = new FormGroup({
  name: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.email, Validators.required]),
  password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,15}$/)]),
  ripetiPassword: new FormControl('', [Validators.required]),
  accetto: new FormControl(false, [Validators.requiredTrue])
  })

  passwordverificata = false;

  onSubmit(){
      console.log(this.form.value)
    }

  VerificaPassword(e){
    if(e === this.form.controls.password.value){
      this.passwordverificata  = true;
    } else {
      this.passwordverificata = false;
    }
    }
   convalidaForm(): boolean{

      if(this.form.valid && this.passwordverificata){
        return false
      }
    }
}



