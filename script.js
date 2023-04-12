const form = document.getElementById("form-contato");
const contatoSalvo = '';
const contatoNaoSalvo = '';
const nomes = [];
const contatos = [];

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  adicionaLinha();
  atualizaTabela();
  atualizacontato();
});
function adicionaLinha() {
  const inputNomeContato = document.getElementById("nome-contato");
  const inputNumeroContato = document.getElementById("numero-contato");

  if (nomes.includes(inputNomeContato.value)){
    alert(`O contato: ${inputNomeContato.value} já foi inserido`);
  }else{
    nomes.push(inputNomeContato.value);
  contatos.push(parseFloat(inputNumeroContato.value));
  let linha = "<tr>";
  linha += `<td> ${inputNomeContato.value}</td>`;
  linha += `<td> ${inputNumeroContato.value}</td>`;
  linha += `<td> ${
    inputNumeroContato.value ? contatoSalvo : contatoNaoSalvo}</td>`;
  linha += `</tr>`;
  linhas += linha;
}
  inputNomeContato.value = "";
  inputNumeroContato.value = "";
}
function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}
