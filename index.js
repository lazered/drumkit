for (let i = 0; i < 7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", () => {
    let audio;
    switch (i) {
      case 0:
        audio = new Audio("sounds/crash.mp3");
        audio.play();

        break;

      case 1:
        audio = new Audio("sounds/kick-bass.mp3");
        audio.play();

        break;
      case 2:
        audio = new Audio("sounds/snare.mp3");
        audio.play();

        break;
      case 3:
        audio = new Audio("sounds/tom-1.mp3");
        audio.play();

        break;
      case 4:
        audio = new Audio("sounds/tom-2.mp3");
        audio.play();

        break;
      case 5:
        audio = new Audio("sounds/tom-3.mp3");
        audio.play();

        break;
      case 6:
        audio = new Audio("sounds/tom-4.mp3");
        audio.play();

        break;
    }
  });
}
