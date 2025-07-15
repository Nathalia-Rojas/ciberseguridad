$(document).ready(function() {
            $('#contactoForm').on('submit', function (e){
                e.preventDefault();
                const nombre = $('#nombre').val().trim();
                const correo =$('#correo').val().trim();
                const mensaje = $('#mensaje').val().trim();

                if (nombre && correo && mensaje) {
                    $('#alerta').removeClass('d-none').addClass('show');
                    $('#contactoForm')[0].reset();
                } else {
                    alert('Por favor completa todos los campos del formulario.');                }
            });

            $('#testForm').on('submit', function (e) {
                e.preventDefault();
                const p1 = $('input[name="p1"]:checked').val();
                const p2 = $('input[name="p2"]:checked').val();

                let correctas =0;
                if (p1 === 'correcto') correctas++;
                if (p2 === 'correcto') correctas++;

                let mensaje = `Obtuviste ${correctas}/2 respuestas correctas.`;
                if (correctas === 2) {  
                    mensaje += ' ¡Excelente trabajo!';
                } else if (correctas === 1) {
                    mensaje += ' Buen intento, pero puedes mejorar.';
                } else {
                    mensaje += ' Necesitas estudiar más sobre ciberseguridad.';
                }
                $('#resultadoTest').html(mensaje);
                $(this).trigger('reset');
            });
        });
