import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Localizacao } from '../models/localizacao';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  buscaCep(cep: string): Observable<Localizacao>{

    return this.http.get<Localizacao>(`https://viacep.com.br/ws/${cep}/json/`);
  }

  addNewUser(user: User): Observable<string>{
    return this.http.post<string>('https://seu-melhor-amigo-11a65-default-rtdb.firebaseio.com/user/.json', user);
  }
}
