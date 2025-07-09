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
