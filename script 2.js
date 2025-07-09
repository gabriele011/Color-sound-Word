// Associa ogni colore a un suono
const sounds = {
  red: new Howl({ src: ['https://actions.google.com/sounds/v1/alarms/beep_short.ogg'] }),
  green: new Howl({ src: ['https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg'] }),
  blue: new Howl({ src: ['https://actions.google.com/sounds/v1/cartoon/concussive_hit_guitar_boing.ogg'] }),
};

// Aggiungi ascoltatori ai div colorati
document.querySelectorAll('.color').forEach((el) => {
  el.addEventListener('click', () => {
    const id = el.id;
    sounds[id].play();
  });
});
// Array di colori disponibili
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
