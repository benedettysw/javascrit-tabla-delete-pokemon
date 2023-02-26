<?php

$servidor = "localhost";
$usuario = "root";
$clave = "";
$basededato = "login";

$enlace = mysqli_connect ($servidor , $usuario , $clave , $basededato);


if(isset ($_POST['registro'])){

    $nombre= $_POST ['nombre'];
    $contrasena= $_POST ['clave'];

    $insertadatos = "INSERT INTO getfiles VALUES('$nombre','$contrasena','')";

    $ejecutarInserta = mysqli_query ($enlace , $insertadatos);

}

?>