// A entrega deste exercício consiste em:

// • Crie uma classe de uma abstração;

// • Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente;

// • Crie pelo menos três instâncias de objetos;

// • No repositório do curso crie uma branch chamada oo_js e armazene o código do exercício.

// • Envie o link do repositório através da plataforma. 

// Classe abstrata Animal
function Animal(nome) {
    this.nome = nome;

    this.fazerSom = function(som) {
        return `${this.nome} está ${som}`;
    }
}

// Classe Cachorro que herda de Animal
function Cachorro(nome) {
    Animal.call(this, nome); 

    this.fazerSom = function() {
        return `${this.nome} está latindo: Au Au!`;
    }
}

// Classe Gato que herda de Animal
function Gato(nome) {
    Animal.call(this, nome); 

    this.fazerSom = function() {
        return `${this.nome} está miando: Miau!`;
    }
}

// Classe Pássaro que herda de Animal
function Passaro(nome) {
    Animal.call(this, nome); 

    this.fazerSom = function() {
        return `${this.nome} está piando: Piu Piu!`;
    }
}

// Criando 3 instâncias dos objetos
const cachorro1 = new Cachorro("Oliver");
const gato1 = new Gato("Luna");
const passaro1 = new Passaro("Ramiro");


console.log(cachorro1.fazerSom()); 
console.log(gato1.fazerSom()); 
console.log(passaro1.fazerSom()); 
