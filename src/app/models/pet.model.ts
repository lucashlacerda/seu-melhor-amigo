import { Localizacao } from "./localizacao";

export class Pet{
    public name: string = '';
    public age: number = 0;
    public location: Localizacao = {logradouro: "", numero: 210, bairro: "Durval de Barros", localidade: "", uf:"", cep: ''};
    public imagePath: string = '';
    public caracteristicas:string[] = [];
    public id: string = '';
}