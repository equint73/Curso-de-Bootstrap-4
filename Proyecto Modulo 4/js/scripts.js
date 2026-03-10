// js/script.js
$(document).ready(function () {
  const modal = document.getElementById('modalRegistro');
  const btn = $('#btnModal');

  modal.addEventListener('show.bs.modal', function () {
    console.log('El modal está comenzando a abrirse');
    btn.prop('disabled', true).removeClass('btn-warning').addClass('btn-secondary');
  });

  modal.addEventListener('shown.bs.modal', function () {
    console.log('El modal se ha abierto completamente');
  });

  modal.addEventListener('hide.bs.modal', function () {
    console.log('El modal está comenzando a cerrarse');
  });

  modal.addEventListener('hidden.bs.modal', function () {
    console.log('El modal se ha cerrado completamente');
    btn.prop('disabled', false).removeClass('btn-secondary').addClass('btn-warning');
  });
});
