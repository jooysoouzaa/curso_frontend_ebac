//Sobre o formulário
  $("#telefone").mask("(00) 00000-0000");
  $("#cpf").mask("000.000.000-00");
  $("#cep").mask("00000-000");

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
      },
      telefone: {
        required: true,
      },
      cpf: {
        required: true,
      },
      endereco: {
        required: true,
      },
      cep: {
        required: true
      },
    },
    messages: {
      nome: '<h3 class = "validate"> Por favor, insira o seu nome completo</h3>',
      email: '<h3 class = "validate"> Por favor, insira o seu e-mail</h3>',
      telefone: '<h3 class = "validate"> Por favor, insira o seu telefone</h3>',
      cpf: '<h3 class = "validate"> Por favor, insira o seu CPF</h3>',
      endereco: '<h3 class = "validate"> Por favor, insira o seu Endereço</h3>',
      cep: '<h3 class = "validate"> Por favor, insira o seu CEP</h3>'
    },
  });
  

