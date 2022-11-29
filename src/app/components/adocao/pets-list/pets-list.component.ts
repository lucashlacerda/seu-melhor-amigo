import { Component, OnInit } from '@angular/core';
import { Pet } from '../../../models/pet.model';
import { v4 } from 'uuid';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent implements OnInit {
  constructor(private petService: PetService) { }
  pets: Pet[] = [];
  
  buscarTodosPets(){
    let observable = this.petService.getAll();
    observable.subscribe(listaPets => {
      for(let pet of Object.entries(listaPets)){
        this.pets.push(pet[1]);
      }})
  }

  
  
  ngOnInit(): void {
    this.buscarTodosPets();
  }

}
