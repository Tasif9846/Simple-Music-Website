const mySong1=document.getElementById("mySong")
const icon=document.getElementById("icon").addEventListener("click",function(){
    if(mySong1.paused){
        mySong1.play();
        icon.src="image/paused.png";}
    else{
        mySong1.pause();
        icon.src="image/play.png";
    }

});
    

