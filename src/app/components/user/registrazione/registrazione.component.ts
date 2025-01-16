import { Component , inject} from '@angular/core';
import { FormsModule, FormControl, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
@Component({
  selector: 'app-registrazione',
  standalone: false,

  templateUrl: './registrazione.component.html',
  styleUrl: './registrazione.component.scss'
})
export class RegistrazioneComponent {
  private router = inject(Router)
  private userService:UserService

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
      const dati= {nome: this.form.controls.name.value,  wmail: this.form.controls.email.value}
      this.userService.datiUtente.next(dati);
      this.router.navigateByUrl('home')
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
      }else{
        return false
      }
    }
}



