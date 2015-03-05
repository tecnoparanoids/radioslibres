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
            
        var stop = document.getElementById("stop");
        stop.addEventListener("click", function(){
                var audio = document.getElementById('audio_player');
                audio.pause();
                audio.src = " ";
                var player = document.getElementById("player");
                player.style.display = "none";
                document.getElementById("radio_list").style.height = "90%";
        }, false);
            
        var mute = document.getElementById("mute");
            mute.addEventListener("click", function(){
                      var audio = document.getElementById('audio_player');
                      audio.muted = !(audio.muted);    
                      console.log("mute: " + audio.muted);
                      if(audio.muted)     
                             mute.style.backgroundImage = "url(../img/mute.png)";
                      else
                             mute.style.backgroundImage = "url(../img/volume-up.png)";
                            
            }, false);

    }
};

var playStream = function(link){

//    $("#loading").fadeIn();			
    var audio = document.getElementById('audio_player');    
    audio.src = link.getAttribute('value');    
	
    console.log("playStream: " + audio.src + " - Radio: " + link.innerHTML);
                
    var loading = document.getElementById("loading");
    var player = document.getElementById("player");
	
	// Mostramos mensaje de "Cargando..."		
	loading.innerHTML = 'Cargando audio...';
	loading.style.display = "block";
	

	console.log("audio.paused = " + audio.paused);

	audio.addEventListener("playing", function(){
//		console.log("playing - hide loading: " + playerShown);
//			if(!playerShown){
          console.log("Show player! Radio: " + document.getElementById("radio_name"));
        document.getElementById("radio_name").innerHTML = link.innerHTML;
				player.style.display = "block";
				playerShown = true;
          
          document.getElementById("radio_list").style.height = "75%";
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
		   loading.innerHTML = 'Error. No se ha podido cargar el audio';
		break;
		default:
		   loading.innerHTML = 'Se ha producido un error';
		break;
	}

	var audio = document.getElementById('audio_player');
	audio.pause();
	document.getElementById("radio_list").style.height = "90%";
	setTimeout(function(){
		loading.style.display = "none";
		player.style.display = "none";
    },2000); 
};

