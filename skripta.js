$(document).ready(function() {
    $('#password').on('input', function() {
        let lozinka = $("#password").val();
        let jacina = 0;
        let savjet = "";
        let jacinaLozinke = $('#jacina-lozinke');

        //manje od 8 znakova i duzina lozinke
        if (lozinka.length < 8 ) {
            $('#osamSlova').css("color", "red");
            savjet += "Lozinka je prekratka. ";
            if (jacina > 0) {
                jacina -= 1;
            }else {
                jacina = jacina;
            }
            
        } else {
            $('#osamSlova').css("color", "green");
            jacina += 1;
        }

        //broj u lozinci
        if (lozinka.match(/\d/)) {
            $('#broj').css("color", "green");
            jacina += 1;
        } else {
            $('#broj').css("color", "red");
            savjet += "Iskoristi barem jedan broj. ";
        }

         //mala slova
         if (lozinka.match(/[a-z]/)) {
            $("#maloSlovo").css("color","green");
            jacina += 1;
        } else {
            $("#maloSlovo").css("color","red");
        }

        //velika slova
        if (lozinka.match(/[A-Z]/)) {
            $("#velikoSlovo").css("color","green");
            jacina += 1;
        }else {
            $("#velikoSlovo").css("color","red");
            savjet += "Koristite velika slova. ";
        }
  
        //posebni znakovi
        if (lozinka.match("@")) {
            $('#posebanZnak').css("color", "green");
            jacina += 1;
        } else {
            $('#posebanZnak').css("color", "red");
            savjet += "Lozinka mora sadržavati znak @. ";
        }

        //tekst ispod forme i boje
        if (lozinka !== "") {
            if (jacina == 0) {
                $(".boja").css("background-color", "rgb(175, 175, 175);");
            } else if (jacina < 2) {
                jacinaLozinke.text("Slabo. " + savjet);
                jacinaLozinke.css('color', 'red');
                $(".prva").animate({
                    backgroundColor: "red"
                }, 500);
            } else if (jacina == 2) {
                jacinaLozinke.text("Srednje slaba lozinka. " + savjet);
                jacinaLozinke.css('color', 'orange');
                $(".prva, .druga").animate({
                    backgroundColor: "rgb(255, 117, 26)"
                }, 500);
            } else if (jacina == 3) {
                jacinaLozinke.text("Dobra lozinka. " + savjet);
                jacinaLozinke.css('color', 'black');
                $(".prva, .druga, .treca").animate({
                    backgroundColor: "yellow"
                }, 500);
            } else if (jacina == 5) {
                jacinaLozinke.text("Jaka lozinka. " + savjet);
                jacinaLozinke.css('color', 'green');
                $(".prva, .druga, .treca, .cetvrta").animate({
                    backgroundColor: "green"
                }, 500);
            }
        }else {
            $(".boja").css({
                    "background-color": "rgb(175, 175, 175)"
            });
        }
        
        

        //lozinka ista
        if (jacina > 3) {
            $("#password1").on("input", function() {
                let lozinka2 = $("#password1").val();
                if (lozinka === lozinka2) {
                    $("#tocnost").html("Lozinke se podudaraju.");
                    $("#tocnost").css("color", "green");
                } else {
                    $("#tocnost").html("Lozinke se ne podudaraju.");
                    $("#tocnost").css("color", "red");
                }
            });
        }
    });

    //terms i conditions
    $('#terms').click(function() {
        if ($('#terms').is(':checked')) {
          $('#oznaceno').html('Thanks for subscribe.');
          $('#oznaceno').css("color", "green");
        } else {
          $('#oznaceno').html('Please follow the terms and conditions.');
          $('#oznaceno').css("color", "red");
        }
      });

    //oko
    const passwordInput = $('#password');
    const passwordInput1 = $('#password1');
    const oko = $('#eye-icon');
    const oko1 = $('#eye-icon1');

    function vidljivost() {
        if (passwordInput.attr('type') === 'password') {
        passwordInput.attr('type', 'text');
        oko.removeClass('fa-eye');
        oko.addClass('fa-eye-slash'); 
        } else {
        passwordInput.attr('type', 'password');
        oko.addClass('fa-eye');
        oko.removeClass('fa-eye-slash'); 
        }
    }

    oko.on('click', function() {
        vidljivost();
    });

    function vidljivost1() {
        if (passwordInput1.attr('type') === 'password') {
        passwordInput1.attr('type', 'text');
        oko1.removeClass('fa-eye');
        oko1.addClass('fa-eye-slash'); 
        } else {
        passwordInput1.attr('type', 'password');
        oko1.addClass('fa-eye');
        oko1.removeClass('fa-eye-slash'); 
        }
    }

    oko1.on('click', function() {
        vidljivost1();
    });


    //sva polja popunjena
    let polje = $(".form__input");
    let kucica = $("#terms");
    kucica.prop('disabled', true);

    polje.on("input", function() {
      let svaPopunjena = true;
      polje.each(function() {
        if ($(this).val() === "") {
          svaPopunjena = false;
          return false;
        }
      });

      if (svaPopunjena) {
        kucica.prop('disabled', false);
      } else {
        kucica.prop('disabled', true);
      }
    });
});

