$(document).ready(function() {
  $('.horarios').hide();
  $("#selHorarios>li>a").css("background-color", "red darken-4");
 });

function horarios() {
    $('.horarios').show();
}

function alertar() {
    alert("Parabéns! Sua disciplina foi agendada e sua alma agora pertence ao lorde das trevas!");
}

function alertarcancelar() {
    alert("Disciplina cancelada com sucesso!");
    $('#materia1').hide();
}
