import { Localizacao } from "./localizacao";

export class Pet{
    public name: string = '';
    public age: number = 0;
    public location: Localizacao = {rua: "Paquetá", numero: 210, bairro: "Durval de Barros", cidade: "Ibirité", estado:"MG"};
    public imagePath: string = '';
    public caracteristicas:string[] = [];
    public id: string = '';
}