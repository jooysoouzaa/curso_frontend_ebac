// A entrega deste exercício consiste em:
// • Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;
// • Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;
// • Crie uma branch exercicio_es6 no repositório do curso, armazene o código nesta branch e nos envie o link através da plataforma. 

const alunos = [
    { nome: 'Ana', nota: 8 },
    { nome: 'João', nota: 5 },
    { nome: 'Maria', nota: 6 },
    { nome: 'Carlos', nota: 7 },
    { nome: 'Paula', nota: 4 },
    { nome: 'Lucas', nota: 9 }
];

const filtrarAprovados = (alunos) => {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const aprovados = filtrarAprovados(alunos);

console.log(aprovados);