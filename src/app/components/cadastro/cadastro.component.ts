import { Component, OnInit } from '@angular/core';
import { Localizacao } from 'src/app/models/localizacao';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  constructor(private userService: UserService) { }
  usuario: User = {email: '', localizacao: {localidade: '',bairro: '', cep: '', uf: '', numero: 0, logradouro: ''}, nome: '',senha: ''};
  

  criaNovoUsuario(){
    let observable = this.userService.addNewUser(this.usuario);
    observable.subscribe(retorno => {
      console.log(retorno);
    })

  }

  buscaCep(){
    let cepAjustado: string = this.removeTracoCep(this.usuario.localizacao.cep);

    let observable = this.userService.buscaCep(cepAjustado);
    observable.subscribe(endereco => {
      this.usuario.localizacao = {
        ...this.usuario.localizacao,
        logradouro: endereco.logradouro,
        bairro: endereco.bairro,
        uf: endereco.uf,
        localidade: endereco.localidade
      }
    })
  }

  ngOnInit(): void {
  }

  removeTracoCep(cep: string): string {
    let cepSemTraco: string = '';
    if(cep.split('').indexOf('-') > 0){
      for(let letra of cep.split('')){
        if(letra !== "-"){
            cepSemTraco += letra;
        }
      }
      return cepSemTraco;
    }
    return cep;
  }
}

