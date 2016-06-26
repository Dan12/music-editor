/// <reference path="../libraries/misc.d.ts" />


$(document).ready(function(){
    
    let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    let source: AudioBufferSourceNode;
    let xZoom = 0.01;
    let yZoom = 40;
    let samplesPerSecond = 48000;
    
    // function with no parameters and returns void
    function getData(callback: () => void, drawCallback: (b: Float32Array) => void):void {
        source = audioCtx.createBufferSource();
        var request = new XMLHttpRequest();
        
        request.open('GET', 'audio/kickG.wav', true);
        
        request.responseType = 'arraybuffer';
    
        request.onload = function() {
            var audioData = request.response;
        
            audioCtx.decodeAudioData(audioData, function(buffer: AudioBuffer) {
                source.buffer = buffer;
                
                source.connect(audioCtx.destination);
                source.loop = false;
                samplesPerSecond = buffer.sampleRate;
                
                callback();
                
                drawCallback(buffer.getChannelData(0));
            },
            
            function(e: DOMException){"Error with decoding audio data" + e.err});
    
        }
    
        request.send();
    }
    
    let callback = function(){
        console.log("A callback")
        // delay, offset, length
        source.start(0,0.009);
        
        setTimeout(function(){
              source.stop(0);
              console.log("Stopped");
        },1000);
    }
    
    let drawCallback = function(buffer: Float32Array){
    
        var c = document.getElementById("test_canvas");
        $("#test_area").append("<p>Mouse at: <b id='mouseLocation'>0.00</b> seconds</p>");
        var ctx = c.getContext("2d");
        ctx.moveTo(0,50);
        
        // pixels per sample
        xZoom = c.width/buffer.length;
        
        for(let i = 1; i < buffer.length+1; i++){
          
            ctx.lineTo(i*xZoom,50-buffer[i]*yZoom);
          
        }
        
        ctx.stroke();
        
        $("#test_canvas").mousemove(function(event){
            $("#mouseLocation").html(
                String(
                    ((event.pageX - $("#test_canvas").offset().left) / (xZoom * 48000)).toFixed(4)
                )
            );
        })
    }
    
    getData(callback, drawCallback);


});