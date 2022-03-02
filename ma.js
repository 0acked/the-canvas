Webcam.set({
   width: 150,
   height:150,
   image_format:'png',
   png_quality:90
});
cvs= document.getElementById("canvas");
webcam.attach('canvas');

function preload(){

}

function setup(){
   canvas= createCanvas(300,300);
   canvas.center(); 
}

function draw(){

}
function take_snap(){
    
}