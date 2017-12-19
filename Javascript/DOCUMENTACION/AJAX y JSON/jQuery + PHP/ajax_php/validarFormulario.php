<?php
		header('Access-Control-Allow-Origin: *');

		$jsondata = array();

	    $jsondata['saludo'] = '¡Hola '. $_POST['campoNombre'] . '!, vengo desde el servidor.';


	    $jsondata['telefono'] = 'Tu teléfono es el '. $_POST['campoTelefono'];    


	    $jsondata['horario'] = 'No te llamaremos si no es en horario de '. $_POST['horario'];   


	    $satisfaccion = $_POST['satisfaccion'];

	    if ($satisfaccion < 50) {
	    	$jsondata['apunte'] = "¡Una pena que tengas tan poca satisfacción!";
	    } else {
	    	$jsondata['apunte'] = "¡Qué bien que tengas tanta satisfacción!";	
	    }


		header('Content-type: application/json; charset=utf-8');
		echo json_encode($jsondata);
		exit();

?>