let nome: string = "Diógenes";
let idade: number = 40;
let ocupado: boolean = true;
let filhos: string[] = ["Um filho", "Outro filho"]
console.log(`Meu nome é ${nome}`);
console.log(`Tenho ${idade} anos`);

function somar(a: number, b: number): number {
    return a + b;
}

function multiplicar(a, b) {
    return a * b;
}

console.log(somar(3, 4));
// Dá erro, mas só na hora de rodar o código
console.log(multiplicar("3", "João"));

//Criando um enum
enum EstadoCivil {
    casado,
    solteiro,
    uniaoEstavel,
    divorciado,
    viuvo
}

let estCivil1: EstadoCivil;

estCivil1 = EstadoCivil.casado;
estCivil1 = 2;
console.log(estCivil1);


//Atribuindo String a Enum

enum EstadoCivil2 {
    casado = "Casado",
    solteiro = "Solteiro",
    uniaoEstavel = "União Estável",
    divorciado = "Divorciado",
    viuvo = "Viuvo"
}

let estCivil2: EstadoCivil2;
estCivil2 = EstadoCivil2.casado;
console.log(estCivil2);


let array: EstadoCivil2[] = [];

//Classe
class Pessoa {

    private _nome: string;
    private _idade: number

    public constructor(nome: string, idade: number) {
        this._nome = nome;
        this._idade = idade;
    }

    public get idade(): number {
        return this._idade;
    }
    public get nome(): string {
        return this._nome;
    }

    // O modificador de visibilidade padrão é público, e o retorno não é obrigatório
    // get idade(){
    //     return this._idade;
    // }

}

//Interface
interface Produto {
    nome: String,
    categoria: number,
    id: number
    addEstoque: (n: number) => void
}

// Definindo objeto do tipo da interface

let shampoo: Produto = {
    nome: "Seda",
    categoria: 3,
    id: 4,

    addEstoque: (n: number) => { }


}

// Implementando a interface

class ProdutosDeViagem implements Produto {
    nome: String;
    categoria: number;
    id: number;

    addEstoque(n: number) {
        console.log(`Adicionado ${n} ao estoque`);
    }
}

let pv = 