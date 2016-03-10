var audioInit = false;
 	
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent("deviceready");
        
        console.log("configureEvents");
	 
		    var agora = document.getElementById("agora");
		    agora.addEventListener("click", function(){playStream(this);}, false);
		    
		    var arraio = document.getElementById("arraio");
		    arraio.addEventListener("click", function(){playStream(this);}, false);
		    
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

		    var ela = document.getElementById("ela");
		    ela.addEventListener("click", function(){playStream(this);}, false);

		    var granja = document.getElementById("granja");
		    granja.addEventListener("click", function(){playStream(this);}, false);

		    var mai = document.getElementById("mai");
		    mai.addEventListener("click", function(){playStream(this);}, false);

		    var mutant = document.getElementById("mutant");
		    mutant.addEventListener("click", function(){playStream(this);}, false);

		    var qk = document.getElementById("qk");
		    qk.addEventListener("click", function(){playStream(this);}, false);

		    var rsk = document.getElementById("rsk");
		    rsk.addEventListener("click", function(){playStream(this);}, false);

		    var topo = document.getElementById("topo");
		    topo.addEventListener("click", function(){playStream(this);}, false);

		    var aktiva = document.getElementById("aktiva");
		    aktiva.addEventListener("click", function(){playStream(this);}, false);

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
		                         mute.className = "muted";
		                  else
		                         mute.className = "unmuted";
		        }, false);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    },
      
};


var playStream = function(link){
		
	var audio = document.getElementById('audio_player');
	audio.pause();
	audio.src = " ";
    audio.src = link.getAttribute('value');    
	
    console.log("playStream: " + audio.src + " - Radio: " + link.innerHTML);
                
    var loading = document.getElementById("loading");
    var player = document.getElementById("player");
	
	// Mostramos mensaje de "Cargando..."		
	loading.innerHTML = 'Cargando audio...';
	loading.style.display = "block";
	
	document.getElementById("radio_name").innerHTML = link.innerHTML;


	if(!audioInit){
		audio.addEventListener("playing" , function(){
		
		// Mostramos el player en onplaying, pero se muestra antes de empezar a reproducir
		// Se están disparando todos los eventos a la vez
		    console.log("addEventListener.onplaying: " + audio.src);
		    audioInit = true;
			player.style.display = "block";
			playerShown = true;
				  
			document.getElementById("radio_list").style.height = "75%";

			loading.style.display = "none";
		});
		
		// En orden de disparo
//		audio.onplay = function(){
//		    console.log("addEventListener.play");
//		};
//		audio.ondurationchange = function(){
//			console.log("addEventListener.durationchange");		
//		};
//		audio.oncanplay = function(){
//		    console.log("addEventListener.canplay");
//		};		
//		audio.oncanplaythrough = function(){
//		    console.log("addEventListener.canplaythrough");
//		};

//		audio.ontimeupdate = function(){
//		    console.log("addEventListener.timeupdate");
//		};
//		 //Estos no se disparan 
//		audio.onratechange = function(){
//			console.log("addEventListener.ratechange");
//		};
//		audio.onprogress = function(){
//		    console.log("addEventListener.progress");
//		};

//		audio.onvolumechange = function(){
//			console.log("addEventListener.onvolumechange");		
//		};		
	}
	audio.addEventListener('error', onError, true);
	audio.play();
	
};



var onError = function(e) {

	console.log("ERROR AL REPRODUCIR: " + e.target.error.code + " - Audio: " + e.target.src);

    audioInit = true;
		    
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

	player.style.display = "none";
		
	var audio = document.getElementById('audio_player');
	audio.pause();
	document.getElementById("radio_list").style.height = "90%";
	setTimeout(function(){
		loading.style.display = "none";
    },3000); 
};

