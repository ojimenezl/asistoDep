$(document).ready(function() {
 




    var qrcode = new QRCode("outputbox");


    function makeCode() {
        input = result().then();
        qrcode.makeCode(input);
    }

    $('#qrButton1').click(function() {
        alert("boton")
        makeCode();


    }).on('keydown', function(e) {
        if (e.keyCode == 13) {
            makeCode();
        }
    });


    $('#btn2').click(function() {
        $('#main').animate({
            'left': '-100%'
        });

        $('#btn1').removeClass('active');
        $('#btn2').addClass('active');
    });

    $('#btn1').click(function() {
        $('#main').animate({
            'left': '0%'
        });

        $('#btn2').removeClass('active');
        $('#btn1').addClass('active');
    });

    $('#stopbtn').click(function() {
        $('#startbtn img').show();
        $('#stopbtn').hide();
        var videoEl = document.getElementById('preview');
        stream = videoEl.srcObject;
        tracks = stream.getTracks();
        tracks.forEach(function(track) {
            track.stop();
        });
        videoEl.srcObject = null;
    });

    $('#startbtn').click(function() {
        $('#startbtn img').hide();
        $('#stopbtn').show();
        var inputF = document.getElementById("msg2");
        var scanner = new Instascan.Scanner({
            video: document.getElementById('preview'),
            scanPeriod: 5,
            mirror: false
        });
        scanner.addListener('scan', function(content) {
            inputF.value = content
                //$('#msg2').text(content);
        });


        Instascan.Camera.getCameras().then(function(cameras) {
            if (cameras.length > 0) {
                scanner.start(cameras[1]);
                $('[name="options"]').on('change', function() {
                    if ($(this).val() == 1) {
                        if (cameras[0] != "") {
                            scanner.start(cameras[1]);
                        } else {
                            alert("Su c�mara delantera no funciona");
                        }
                    } else if ($(this).val() == 2) {
                        if (cameras[1] != "") {
                            scanner.start(cameras[0]);
                        } else {
                            alert("Su camara trasera no funciona");
                        }
                    }
                });
            } else {
                alert("Su c�mara no funciona");
            }
        }).catch(function(e) {
            alert(e);
        });
    });


    $("#save").click(function(e) {

        /*evita la recarga de la pagina*/
        e.preventDefault();

        var valores = $("#ingresar").val();
        var caja = $(".contenido");

        caja.append("<p>" + valores + "</p>");

    });












});