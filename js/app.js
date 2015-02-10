document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
       console.log("iniciando");
    } else if (state == 'complete') {
 
        var contrabanda = document.getElementById("contrabanda");
        contrabanda.addEventListener("click", function(){playStream(this);}, false);

        var irola = document.getElementById("irola");
        irola.addEventListener("click", function(){playStream(this);}, false);

        var almaina = document.getElementById("almaina");
        almaina.addEventListener("click", function(){playStream(this);}, false);

        var bala = document.getElementById("bala");
        bala.addEventListener("click", function(){playStream(this);}, false);

        var bronka = document.getElementById("bronka");
        bronka.addEventListener("click", function(){playStream(this);}, false);

        var chabolo = document.getElementById("chabolo");
        chabolo.addEventListener("click", function(){playStream(this);}, false);

        var ela = document.getElementById("ela");
        ela.addEventListener("click", function(){playStream(this);}, false);

        var granja = document.getElementById("granja");
        granja.addEventListener("click", function(){playStream(this);}, false);

        var linea = document.getElementById("linea");
        linea.addEventListener("click", function(){playStream(this);}, false);

        var mai = document.getElementById("mai");
        mai.addEventListener("click", function(){playStream(this);}, false);

        var mutant = document.getElementById("mutant");
        mutant.addEventListener("click", function(){playStream(this);}, false);

        var pirineo = document.getElementById("pirineo");
        pirineo.addEventListener("click", function(){playStream(this);}, false);

        var mutant = document.getElementById("mutant");
        mutant.addEventListener("click", function(){playStream(this);}, false);

        var qk = document.getElementById("qk");
        qk.addEventListener("click", function(){playStream(this);}, false);

        var rsk = document.getElementById("rsk");
        rsk.addEventListener("click", function(){playStream(this);}, false);

        var topo = document.getElementById("topo");
        topo.addEventListener("click", function(){playStream(this);}, false);

        var aktiva = document.getElementById("aktiva");
        mutant.addEventListener("click", function(){playStream(this);}, false);

        var zintzilik = document.getElementById("zintzilik");
        zintzilik.addEventListener("click", function(){playStream(this);}, false);
    }
}

var playStream = function(link){

//    $("#loading").fadeIn();			
    var audio = document.getElementById('audio_player');    
    audio.src = link.getAttribute('value');    
	
    console.log("playStream: " + audio.src);
                
    var loading = document.getElementById("loading");
    var player = document.getElementById("player");
	
	// Mostramos mensaje de "Cargando..."		
	loading.innerHTML = 'Cargando audio...';
	loading.style.display = "block";
	

	console.log("audio.paused = " + audio.paused);

	audio.addEventListener("playing", function(){
//		console.log("playing - hide loading: " + playerShown);
//			if(!playerShown){
				console.log("Show player!");
				player.style.display = "block";
				playerShown = true;
//			}
			loading.style.display = "none";
		}, true);

	audio.addEventListener('error', onError, true);
	audio.mozAudioChannelType = 'content';
	audio.play();
};


var onError = function(e) {

	console.log("ERROR AL REPRODUCIR: " + e.target.error.code + " - Audio: " + e.target.src);

    var loading = document.getElementById("loading");
    var player = document.getElementById("player");
    
	switch (e.target.error.code) {
		case e.target.error.MEDIA_ERR_ABORTED:
			loading.innerHTML = 'Error: Reproducción abortada';
		break;
		case e.target.error.MEDIA_ERR_NETWORK:
		   loading.innerHTML = 'Error de red. Comprueba la conexión a internet';
		break;
		case e.target.error.MEDIA_ERR_DECODE:
		   loading.innerHTML = 'Error de decodificación';
		break;
		case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
		   loading.innerHTML = 'Error. Asegúrate de tener los datos activados';
		break;
		default:
		   loading.innerHTML = 'Se ha producido un error';
		break;
	}

	var audio = document.getElementById('audio_player');
	audio.pause();
	
	setTimeout(function(){
		loading.style.display = "none";
		player.style.display = "none";
    },2000); 
};

