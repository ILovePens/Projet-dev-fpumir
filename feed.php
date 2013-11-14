<?php
    header('Content-Type: text/xml');
    print $test=file_get_contents('http://api.foursquare.com/v1/venue?vid=1526835'); //flux XML des Champs Libres
	console.log($test);
?>