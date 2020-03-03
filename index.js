let nome = "Diógenes";
let idade = 40;
let ocupado = true;
let filhos = ["Um filho", "Outro filho"];
console.log(`Meu nome é ${nome}`);
console.log(`Tenho ${idade} anos`);
function somar(a, b) {
    return a + b;
}
function multiplicar(a, b) {
    return a * b;
}
console.log(somar(3, 4));
// Dá erro, mas só na hora de rodar o código
console.log(multiplicar("3", "João"));
//Criando um enum
var EstadoCivil;
(function (EstadoCivil) {
    EstadoCivil[EstadoCivil["casado"] = 0] = "casado";
    EstadoCivil[EstadoCivil["solteiro"] = 1] = "solteiro";
    EstadoCivil[EstadoCivil["uniaoEstavel"] = 2] = "uniaoEstavel";
    EstadoCivil[EstadoCivil["divorciado"] = 3] = "divorciado";
    EstadoCivil[EstadoCivil["viuvo"] = 4] = "viuvo";
})(EstadoCivil || (EstadoCivil = {}));
let estCivil1;
estCivil1 = EstadoCivil.casado;
estCivil1 = 2;
console.log(estCivil1);
//Atribuindo String a Enum
var EstadoCivil2;
(function (EstadoCivil2) {
    EstadoCivil2["casado"] = "Casado";
    EstadoCivil2["solteiro"] = "Solteiro";
    EstadoCivil2["uniaoEstavel"] = "Uni\u00E3o Est\u00E1vel";
    EstadoCivil2["divorciado"] = "Divorciado";
    EstadoCivil2["viuvo"] = "Viuvo";
})(EstadoCivil2 || (EstadoCivil2 = {}));
let estCivil2;
estCivil2 = EstadoCivil2.casado;
console.log(estCivil2);
let array = [];
//Classe
class Pessoa {
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
    get idade() {
        return this._idade;
    }
    get nome() {
        return this._nome;
    }
}
