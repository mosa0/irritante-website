var audio = new Audio('Sounds/Sound1.mp3');
  //audio.play();
  audio.loop = true
  
  var btn = document.createElement('button');
  btn.style.margin = '10px';
  btn.innerHTML = 'The Button';
  document.body.appendChild(btn);
  
  // schijf hier tussen je code
  var button = true;
  function myfunction(){
      if (button === true){
          document.body.style.backgroundColor = "yellow";
          button = false;
      }
      else if (button === false) {
          document.body.style.backgroundColor = "white";
          button = true;
      }
  }
  btn.addEventListener('click', () => {
      myfunction()
  })
  var color=0

  function getLocalStream() {
    navigator.mediaDevices.getUserMedia({video: false, audio: true}).then( stream => {
        window.localStream = stream;
        window.localAudio.srcObject = stream;
        window.localAudio.autoplay = true;
    }).catch( err => {
        console.log("u got an error:" + err)
    });
    
}

getLocalStream();
