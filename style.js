$(document).ready(function () {
  // Adicionar tarefa
  $("#add-tarefa-formulario").submit(function (e) {
    e.preventDefault();
    var tarefaNome = $("#add-tarefa").val();
    if (tarefaNome) {
      $("#lista-tarefa").append("<li>" + tarefaNome + "</li>");
      $("#add-tarefa").val("");
    }
  });

  // Marcar tarefa como concluída
  $("#lista-tarefa").on("click", "li", function () {
    $(this).toggleClass("completed");
  });
});
