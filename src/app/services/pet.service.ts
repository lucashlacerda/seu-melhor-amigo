import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet.model'

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pet[]> {
    return this.http.get<Pet[]>('https://seu-melhor-amigo-11a65-default-rtdb.firebaseio.com/pet.json');
  }

  addPet(pet: Pet): Observable<string>{
    return this.http.post<string>(`https://seu-melhor-amigo-11a65-default-rtdb.firebaseio.com/pet/.json`, pet);
  }
}
