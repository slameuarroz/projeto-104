Webcam.set({
    width:350,
    height:300,
    png_quality:1080,
    image_format:"png"
})
var camera=document.getElementById("camera")
Webcam.attach("#camera")
function takeSnapShot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image"src="'+data_uri+'">'
    })
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6Jb27wUH1/model.json",modelLoad)
function modelLoad(){
    console.log("modelo carregado")
}