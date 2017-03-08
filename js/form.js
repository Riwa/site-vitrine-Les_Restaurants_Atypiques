// contact form
$(document).ready(function () {
  $('.contact-form').find('.form-control').each(function () {
    var targetItem = $(this).parent();
    if ($(this).val()) {
      $(targetItem).find('label').css({
        'top': '10px',
        'fontSize': '14px',
      });
    }
  });
  $('.contact-form').find('.form-control').focus(function () {
    $(this).parent('.input-block').addClass('focus');
    $(this).parent().find('label').animate({
      'top': '10px',
      'fontSize': '14px',
    }, 300);
  });
  $('.contact-form').find('.form-control').blur(function () {
    if ($(this).val().length == 0) {
      $(this).parent('.input-block').removeClass('focus');
      $(this).parent().find('label').animate({
        'top': '25px',
        'fontSize': '18px',
      }, 300);
    }
  });


  $('#contact-form').submit(function (evt) {
    evt.preventDefault();
    let prenom = $('#prenom').val();
    let nom = $('#nom').val();
    let email = $('#email').val();
    let objet = $('#objet').val();
    let message = $('#message').val();
    let formulaireValide = true;
    if (prenom.length === 0) {
      console.log("prenom n\'est pas rempli");
      $('#input-prenom').addClass('error');
    }

    if (nom.length === 0) {
      console.log("nom n\'est pas rempli")
      $('#input-nom').addClass('error');

      formulaireValide = false;
    }
    if (email.length === 0) {
      console.log("email n\'est pas rempli")
      $('#input-email').addClass('error');

      formulaireValide = false;
    }
    if (objet.length === 0) {
      console.log("objet n\'est pas rempli")
      $('#input-objet').addClass('error');

      formulaireValide = false;
    }
    if (message.length === 0) {
      console.log("message n\'est pas rempli")
      $('#input-message').addClass('error');

      formulaireValide = false;
    }

    if (formulaireValide) {
      $('#form-container').fadeOut(1000);
      $('.alert').fadeIn(1000);
    }

  });

  $("input").keyup(function () {
    let focusedInput = $('input:focus');
    if (focusedInput.val().length > 0) {
      focusedInput.closest('.input-block').removeClass('error');
    } else {
      focusedInput.closest('.input-block').addClass('error');
    }
  });

});