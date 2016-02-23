/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 
var streamLoading = false;
 	
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
		    streamLoading = false;
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
        
//        configureEvents();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
//        var parentElement = document.getElementById(id);
//        var listeningElement = parentElement.querySelector('.listening');
//        var receivedElement = parentElement.querySelector('.received');

//        listeningElement.setAttribute('style', 'display:none;');
//        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
      
};


var playStream = function(link){
		
	streamLoading = false;

	var audio = document.getElementById('audio_player');
	audio.pause();
	audio.src = " ";
	console.log("playStream - Radio: " + link.innerHTML);
	
    
    audio.src = link.getAttribute('value');    
	
    console.log("playStream: " + audio.src + " - Radio: " + link.innerHTML);
                
    var loading = document.getElementById("loading");
    var player = document.getElementById("player");
	
	// Mostramos mensaje de "Cargando..."		
	loading.innerHTML = 'Cargando audio...';
	loading.style.display = "block";

	audio.addEventListener("playing", function(){
        console.log("addEventListener.playing - Radio: " + document.getElementById("radio_name"));
        streamLoading = true;
		document.getElementById("radio_name").innerHTML = link.innerHTML;
		player.style.display = "block";
		playerShown = true;
			  
		document.getElementById("radio_list").style.height = "75%";

		loading.style.display = "none";
		}, true);
	
	audio.addEventListener("durationchange", function(){
		console.log("addEventListener.durationchange  streamLoading = " + streamLoading);
//		if(streamLoading == true){
//			document.getElementById("radio_name").innerHTML = link.innerHTML;
//			player.style.display = "block";
//			playerShown = true;
//			  
//			document.getElementById("radio_list").style.height = "75%";

//			loading.style.display = "none";
//		}
	});
	
//	audio.addEventListener("progress", function(){
//	    console.log("addEventListener.progress - Radio: " + document.getElementById("radio_name"));
//		}, true);
	
	
	
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
	streamLoading = false;
	var audio = document.getElementById('audio_player');
	audio.pause();
	document.getElementById("radio_list").style.height = "90%";
	setTimeout(function(){
		loading.style.display = "none";
		player.style.display = "none";
    },2000); 
};

