var audio = new Audio('Sounds/Sound1.mp3');
  //audio.play();
  audio.loop = true
  
   //Permission camera en microfoon
  function getLocalStream() {
    navigator.mediaDevices.getUserMedia({video: true, audio: true}).then( stream => {
    })
    
}

//Page confirm uitdoen
getLocalStream();
window.onbeforeunload = function (e) {
    e = e || window.event;

    // Firefox
    if (e) {
        e.returnValue = 'Sure?';
    }

    // Safari
    return 'Sure?';
};
//Text-To-Speech
var tts = new SpeechSynthesisUtterance();
tts.text = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
//window.speechSynthesis.speak(tts);

let person = prompt("Please\n enter\n your\n name \n hurry \nNOW! \n???????????? \N!!!!!!!!!!!!!!!!", "BOOOOOOOOOOOOOOO");
let text;