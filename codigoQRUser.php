
<html>

<head>
    <link href="style.css" rel="stylesheet" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    

</head>

<?php
$archivo=fopen("userLoadPC.txt","r") or die("problemas");
while(!feof($archivo)){
    $read=fgets($archivo);
}
echo'<script> alert("en QR")</script>';
$json=json_encode($read);

?>




    <!-- <div id="option">
        <div id="btn1" class="active">&#8230;</div> 
        <div id="btn2">&#9974;</div>


    </div> -->

    <div id="main">
        <div id="box1">
            <div id="inputs">

        
                

		        <button id="qrButton" id>QR</button>
            </div> 
            

            <div id="outputbox">
                <img src="img.png" />
		
            </div>
        </div>

    </div>







</body>

<script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>
<script src="https://rawgit.com/schmich/instascan-builds/master/instascan.min.js"></script>
<script>
var js='<?php echo $json;?>'
var qrcode = new QRCode("outputbox");


    function makeCode() {
        input = js;
        qrcode.makeCode(input);
    }

    $('#qrButton').click(function() {
        alert("boton")
        makeCode();


    }).on('keydown', function(e) {
        if (e.keyCode == 13) {
            makeCode();
        }
    });  


</script>

</html>