var SpeechRecognition= window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function Start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    if (Content == "take my selfie"){
        console.log("taking selfie");
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "taking your selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function(){
        take_photo();
        save();
    }, 5000);
}


Webcam.set({
    width: 360,
    height: 250,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");

function take_photo(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie" src="'+data_uri+'"/>';
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie").src;
    link.href= image;
    link.click();
}