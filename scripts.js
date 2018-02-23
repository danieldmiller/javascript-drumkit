//Kick sound: https://freesound.org/s/171104/
//Snare sound: https://freesound.org/s/387186/
//High hat sound: https://freesound.org/s/250530/

class Keys {
  constructor() {
    this.a = 65;
    this.s = 83;
    this.d = 68;
    this.f = 70;
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  var kit = document.querySelectorAll("li");

  kit.forEach(function(elem) {
    elem.addEventListener("click", function() {
      if(elem.querySelector(".key-text").innerHTML === "A") {
          playInstrument("a", "audio/kick.wav");
      } else if(elem.querySelector(".key-text").innerHTML === "S") {
          playInstrument("s", "audio/snare.wav");
      } else if(elem.querySelector(".key-text").innerHTML === "D") {
          playInstrument("d", "audio/high_hat.wav");
      }

    });
  })

  window.onkeydown = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;
   let keyList = new Keys();

   if (key == keyList.a) {
       playInstrument('a', "audio/kick.wav");
   } else if (key == keyList.s) {
       playInstrument('s', "audio/snare.wav");
   } else if (key == keyList.d) {
       playInstrument('d', "audio/high_hat.wav");
   }
}

function playInstrument(key, file) {
  if(typeof file === 'string') {
    var audio = new Audio(file);
    audio.play();

    var instrument;
    if(key === "a") {
      instrument = document.querySelector("#a");
    } else if(key === "s") {
      instrument = document.querySelector("#s");
    } else if(key === "d") {
      instrument = document.querySelector("#d");
    }

    animateHit(instrument);
  }
}

function animateHit(elem) {
  elem.className = "hit";
  setTimeout(function() {
    elem.className = "";
  },160);
}


});
