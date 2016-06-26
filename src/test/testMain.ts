/// <reference path="../libraries/jquery.d.ts" />
/// <reference path="../libraries/howler.d.ts" />


$(document).ready(function(){
    $("#test_area").append("<p id='stuff'></p>");
    $("#test_area").append("<button id='clickMe'>Click Me</button>");
    $("#stuff").html("Lolz");
    
    
    class Sound{
        
        private howlObj: Howl;
        private isPlaying: boolean = false;;
        
        public constructor(fileName: string, loop: boolean = true){
            
            this.howlObj = new Howl({
                urls: [fileName],
                loop: loop
            })
        }
        
        public toggle(): void{
            if(!this.isPlaying){
                console.log("playing");
                this.howlObj.play();
                this.isPlaying = true;
            }
            else{
                console.log("stopping");
                this.howlObj.stop();
                this.isPlaying = false;
            }
        }
        
    }
    let sound: Sound = new Sound("audio/kickG.wav");
    
    
    $("#clickMe").click(function(){
        
            
        sound.toggle();
        
        $("#stuff").toggle(300);
    })  
})