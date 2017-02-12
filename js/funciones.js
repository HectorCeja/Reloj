//declaracion de variables
var muestroHora = document.getElementById('muestro-hora');


//funtions
function mueveReloj(){
    momentoActual = new Date()

    var hora = momentoActual.getHours();
    var horaConCero = (hora<=9)? "0"+hora : ""+hora;

    var minuto = momentoActual.getMinutes();
    var minutoConCero = (minuto<=9)? "0"+minuto : ""+minuto;

    var segundo = momentoActual.getSeconds();
    var segundoConCero = (segundo<=9)? "0"+segundo : ""+segundo;

    if(hora<=12){
      horaImprimible = horaConCero + " : " + minutoConCero + " : " + segundoConCero+ " AM";
    }else{
      for(var horaPM = 1; horaPM <= 12; horaPM++ ){
        if( ( horaConCero-horaPM ) == 12 ){
          var horaPMConCero = (horaPM<=9)? "0"+horaPM : ""+horaPM;
          horaImprimible = horaPMConCero + " : " + minutoConCero + " : " + segundoConCero+ " PM";
        }
      }
    }

    muestroHora.innerHTML = "<h1>"+horaImprimible+"</h1>";
}

function recargaHora(){
  setInterval(mueveReloj,1000);
}

function musica(){
	var audio = document.createElement("audio");
	audio.src = "sonidos/shot.mp3";
	return audio.play();
}

function cargaDocumento(){
  recargaHora();
  musica();
}

//aplicacion del evento
window.addEventListener("load",cargaDocumento);
