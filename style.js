function validarForm() {
  var campoA = parseInt(document.getElementById("campoA").value);
  var campoB = parseInt(document.getElementById("campoB").value);

  if (campoB > campoA) {
    document.getElementById("mensagem").innerHTML = "Formulário válido";
    document.getElementById("mensagem").className = "valido";
  } else {
    document.getElementById("mensagem").innerHTML =
      "Formulário inválido, o campo B precisa possuir um número maior que o campo A";
    document.getElementById("mensagem").className = "invalido";
  }
  document.getElementById("campoA").value = "";
  document.getElementById("campoB").value = "";
}
