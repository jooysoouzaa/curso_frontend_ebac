//Exercicio 01 - Crie uma função de multiplicação que deverá receber como argumentos dois números e retornar a multiplicação deles,

function multiplicacao(num1: number, num2: number): number {
    return num1 * num2;
}

let base2: number = 12;
let altura2: number = 10;
let result = multiplicacao(base2, altura2);

console.log(result);

//exercicio 02 - Crie uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;
function saudacao(nome: string): string {
    return 'Olá, ' + nome;
}

let nome = 'Joy';
let saudacaoResult = saudacao(nome);
console.log(saudacaoResult);