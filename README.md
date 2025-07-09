# Color-sound-Word<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Color-sound-Word</title>
  <style>
    .color-button {
      width: 100px;
      height: 100px;
      display: inline-block;
      margin: 10px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>Color-sound-Word</h1>
  <div id="container">
    <div class="color-button" style="background-color: red;" onclick="playSound('red')"></div>
    <div class="color-button" style="background-color: blue;" onclick="playSound('blue')"></div>
    <div class="color-button" style="background-color: green;" onclick="playSound('green')"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>function playSound(color) {
  const sounds = {
    red: new Audio('sounds/red.mp3'),
    blue: new Audio('sounds/blue.mp3'),
    green: new Audio('sounds/green.mp3'),
  };

  if (sounds[color]) {
    sounds[color].play();
  }
}// Array di colori disponibili
const colors = ['red', 'blue', 'green'];

// Funzione per suonare un colore
function playSound(color) {
  const audio = new Audio(`sounds/${color}.mp3`);
  audio.play();
}

// Aggiungi un pulsante per ogni colore
const container = document.getElementById('color-container');

colors.forEach(color => {
  const button = document.createElement('button');
  button.style.backgroundColor = color;
  button.classList.add('color-button');
  button.onclick = () => {
    playSound(color); // quando clicchi, suona
  };
  container.appendChild(button);
});
