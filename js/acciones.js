// JavaScript Document
$(document).ready(function(e) {
    
	
	var watchID=null;
	document.addEventListener("deviceready",Dispositivo_Listo,false);
	
	
	function Dispositivo_Listo(){
		Comienza();
	}
	
	
	function Comienza(){
		
		var opciones={frequency:2000};
		
		watchID=navigator.accelerometer.watchAcceleration(Correcto,Error,opciones);
		navigator.geolocation.getCurrentPosition(Localiza,ErrorLocalizacion);
	}
	function Detener(){
		if (watchID){
			navigator.accelerometer.clearWatch (watchID);
			watchID=null
		}
	}
	function Correcto(acceleration){
		var element=document.getElementById('acelerometro');
		element.innerHTML='Aceleracion en X:'+acceleration.x+'<br/>'+'Aceleration en Y:'+acceleration.y+'<br/>'+'Intervalo:'+acceleration.timestamp+'<br/>';
	}
	
	function Localizada(posicion){
		var element=document.getElementById('geolocalizacion');
		element.innerHTML='Latitud:'+posicion.coords,latitude+'<br/>'+'Longitud:'+posicion.coords.longitude+'<br/>'+'Precision:'+posicion.coords.accuracy+'<br/>'+'Intervalo:'+posicion.timestamp+'<br/>'
	}
	function ErrorLocalizacion(error){
		alert('codigo:'+error.code+'\n'+'mensaje:'+error.message+'\n');
	}
});
