//declaracion de variables
var boton = document.getElementById('we');
var inner = document.getElementById('inner');


//funtions
function puto(){
  alert('Hola');
  var hola = "hola puto";
  inner.innerHTML = hola;
}
//manda a llamar a otra funcion
function dos(){
  puto();
}


function cargaDocumento(){
  boton.addEventListener('click', dos);
  btnReloj.addEventListener("click",function(){
		iniciarReloj = setInterval(reloj,1000);
	});
}


//aplicacion del evento
window.addEventListener("load",cargaDocumento);
