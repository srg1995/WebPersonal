(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }else if(form.checkValidity() === true){
            event.preventDefault();
            event.stopPropagation();
            enviarFormulario();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

function enviarFormulario(){

    var json ={
        "nombre":$("#nombre").val(),
        "apellidos":$("#apellidos").val(),
        "email":$("#email").val(),
        "mensaje":$("#mensaje").val()
    };

    $.ajax({
        url:'../../conexiones/enviarFormulario.php',
        type:'POST',
        data: JSON.stringify(json),
        contentType: 'application/json',

        success:function(data){
            data = JSON.parse(data);
            if(data.respuesta == "ok"){
                $('.needs-validation').removeClass("was-validated");
                $(".needs-validation")[0].reset();
                $("#modal-respuesta .modal-body").html("Su email se ha enviado correctamente.");
                $("#modal-respuesta").modal({backdrop: 'static', keyboard: false});
            }else{
                $("#modal-respuesta .modal-body").html("El servicio no esta disponible en estos momentos");
                $("#modal-respuesta").modal({backdrop: 'static', keyboard: false});
            }

        },
        error : function(error){
            $("#modal-respuesta .modal-body").html("El servicio no esta disponible en estos momentos");
            $("#modal-respuesta").modal({backdrop: 'static', keyboard: false});
        }
    });
}
