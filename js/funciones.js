//declaracion de variables
var muestroHora = document.getElementById('muestro-hora');


//funtions
/*function reloj(){
	var fechaReloj = new Date();
	var horaReloj = fechaReloj.getHours();
	var horaCero = (horaReloj<=9)?"0"+horaReloj:""+horaReloj;

	var minutoReloj = fechaReloj.getMinutes();
	var minutoCero = (minutoReloj<=9)?"0"+minutoReloj:""+minutoReloj;

	var segundoReloj = fechaReloj.getSeconds();
	var segundoCero = (segundoReloj<=9)?"0"+segundoReloj:""+segundoReloj;

	if (horaCero>12){
		for(var i=0;i<=11;i++){
			muestroHora.innerHTML = "<h1>"+i+":"+minutoCero+":"+segundoCero+" PM</h1>";
		}
	}else{
		if(horaCero==0){
			muestroHora.innerHTML = "<h1>"+12+":"+minutoCero+":"+segundoCero+" AM</h1>";
		}else{
		muestroHora.innerHTML = "<h1>"+horaCero+":"+minutoCero+":"+segundoCero+" AM</h1>";
		}
	}
}*/
function mueveReloj(){
    momentoActual = new Date()
    var hora = momentoActual.getHours()
    var minuto = momentoActual.getMinutes()
    var segundo = momentoActual.getSeconds()

    horaImprimible = hora + " : " + minuto + " : " + segundo;

    muestroHora.innerHTML = "<h1>"+horaImprimible+"</h1>";

    //setTimeout("mueveReloj()",1000);
}

//aplicacion del evento
window.addEventListener("load",function(){
		iniciarReloj = setInterval(mueveReloj,1000);
	});
