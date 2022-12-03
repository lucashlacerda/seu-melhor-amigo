import { Localizacao } from "./localizacao";

export class User {
    nome:string = '';
    email:string = '';
    senha:string = '';
    localizacao: Localizacao = {bairro: '', localidade: '', uf: '', numero: 0, logradouro: '', cep: ''};
}
