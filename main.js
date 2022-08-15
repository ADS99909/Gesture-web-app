Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});
camera=document.getElementById('camera');
Webcam.attach("#camera");

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="image_result" src="'+data_uri+'">';
    });
}
console.log('ml5 version',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/gNImn9X0a/model.json',modelloaded);

function modelloaded(){
    console.log('Model Loaded');
}

var p1="";
p2="";

function speak(){
    var synth=window.SpeechSynthesis;
    s1="The first prediction is"+p1;
    s2=" And the second prediction is"+p2;
    var utterThis=new SpeechSynthesisUtterance(s1+s2);
    synth.speak(utterThis);
        
}

function check(){
    img=document.getElementById("image_result");
    classifier.classify(img, gotResults);
}

function gotResults(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML=results[0].label;
    document.getElementById("result_emotion_name2").innerHTML=results[1].label;

    p1=results[0].label;
    p2=results[1].label;

    speak();
    if(results[0].label== "Great"){
        document.getElementById("update_emoji").innerHTML="&#128075;"
    }

    if(results[0].label== "Amazing"){
        document.getElementById("update_emoji").innerHTML="&#128076;"
    }

    if(results[0].label== "Good"){
        document.getElementById("update_emoji").innerHTML="&#128077;"
    }

    if(results[0].label== "Bad"){
        document.getElementById("update_emoji").innerHTML="&#128078;"
    }

    if(results[0].label== "Fun"){
        document.getElementById("update_emoji").innerHTML="&#128079;"
    }

    if(results[0].label== "Stop"){
        document.getElementById("update_emoji").innerHTML="&#128080;"
    }

    if(results[1].label== "Great"){
        document.getElementById("update_emoji").innerHTML="&#128075;"
    }

    if(results[1].label== "Amazing"){
        document.getElementById("update_emoji").innerHTML="&#128076;"
    }

    if(results[1].label== "Good"){
        document.getElementById("update_emoji").innerHTML="&#128077;"
    }

    if(results[1].label== "Bad"){
        document.getElementById("update_emoji").innerHTML="&#128078;"
    }

    if(results[1].label== "Fun"){
        document.getElementById("update_emoji").innerHTML="&#128079;"
    }

    if(results[1].label== "Stop"){
        document.getElementById("update_emoji").innerHTML="&#128080;"
    }

    
}

}
