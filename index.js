let crash, kick, snare, tom1, tom2, tom3, tom4;

function preload() {
  soundFormats('mp3');
  crash = loadSound('sounds/crash.mp3');
  kick = loadSound('sounds/kick-bass.mp3');
  snare = loadSound('sounds/snare.mp3');
  tom1 = loadSound('sounds/tom-1.mp3');
  tom2 = loadSound('sounds/tom-2.mp3');
  tom3 = loadSound('sounds/tom-3.mp3');
  tom4 = loadSound('sounds/tom-4.mp3');
}

function setup(){};

for (let i = 0; i < 7; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let innerHTML = this.innerText;

    playSound(innerHTML);

    buttonAnimation(innerHTML);
  });
}

function keyTyped() {
  playSound(key);
  buttonAnimation(key);
  console.log(key);
};

function playSound(key) {
  switch (key) {
    case "w":
      crash.play();

      break;
    case "a":
      kick.play();

      break;
    case "s":
      snare.play();

      break;
    case "d":
      tom1.play();

      break;
    case "j":
      tom2.play();

      break;
    case "k":
      tom3.play();

      break;
    case "l":
      tom4.play();

      break;
  }
}

function buttonAnimation(key) {
  let activeButton = document.querySelector("." + key);

  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100)

}
