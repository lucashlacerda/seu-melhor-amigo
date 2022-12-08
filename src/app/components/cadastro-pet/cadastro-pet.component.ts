import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet.model';
import { PetService } from 'src/app/services/pet.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cadastro-pet',
  templateUrl: './cadastro-pet.component.html',
  styleUrls: ['./cadastro-pet.component.scss']
})
export class CadastroPetComponent implements OnInit {

  constructor(private petService: PetService, private userService: UserService) { }
  pet: Pet = {age: 0, id: "", imagePath: "", location: {bairro: "", cep: "", localidade: "", logradouro: "", numero: 0, uf: ""},name: ""};
  

  criaNovoPet(){
    let observable = this.petService.addPet(this.pet);
    observable.subscribe(retorno => {
      console.log(retorno);
    })

    this.pet = {age: 0, id: "", imagePath: "", location: {bairro: "", cep: "", localidade: "", logradouro: "", numero: 0, uf: ""},name: ""};
  }

  buscaCep(){
    let cepAjustado: string = this.removeTracoCep(this.pet.location.cep);

    let observable = this.userService.buscaCep(cepAjustado);
    observable.subscribe(endereco => {
      this.pet.location = {
        ...this.pet.location,
        logradouro: endereco.logradouro,
        bairro: endereco.bairro,
        uf: endereco.uf,
        localidade: endereco.localidade
      }
    })
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
  ngOnInit(): void {
  }
}

