import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  pass: string;
  constructor(private userService: UserService) { }


  logar(){
      let observable;
      observable = this.userService.buscaUser();
      observable.subscribe(retorno => {
        
      })
  }
  ngOnInit(): void {
  }

  verificaUsuario(users){
    for(let user of users){
      if(user.email == this.email){
        if(user.password == this.pass){
          return "Logar";
        }
        else
        return "Senha errada";
      }
    }
    return "Usuário não existe";
  }
}


