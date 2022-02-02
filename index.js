var audio = new Audio('Sounds/Sound1.mp3');
  //audio.play();
  audio.loop = true
  
   //Permission camera en microfoon
  function getLocalStream() {
    navigator.mediaDevices.getUserMedia({video: false, audio: true}).then( stream => {
        window.localStream = stream;
        window.localAudio.srcObject = stream;
        window.localAudio.autoplay = true;
    }).catch( err => {
        console.log("u got an error:" + err)
    });
    
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
//cusor invisible (nog bezig)
document.getElementById("btnClick").onclick = clickEvent;
function clickEvent(){
    document.getElementById("btnClick").style = 'cursor: none;'
}

//Text-To-Speech
var tts = new SpeechSynthesisUtterance();
tts.text = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
//window.speechSynthesis.speak(tts);


function startAlertInterval(){
    setInterval(showModal,3000)
}