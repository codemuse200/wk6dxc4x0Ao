// ------------- INICIO DEL FOR ALL ------------- //

// Para que las imágenes no se puedan arrastrar
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('dragstart', e => e.preventDefault());
});

// --------------- FIN DEL FOR ALL -------------- //


// ------ INICIO SISTEMA PARA DETECTAR EL CLICK Y ARRASTRE DE NOTAS EN EL PIANO ------ //

let presionando = false;
let teclaActiva = null;

document.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('key')) {
    presionando = true;
    teclaActiva = e.target;
    pressKey(teclaActiva, "mouse");
  }
});

document.addEventListener('mousemove', (e) => {
  if (presionando && e.target.classList.contains('key')) {
    // Evita activar la misma tecla múltiples veces
    if (teclaActiva !== e.target) {
      if (teclaActiva) releaseKey(teclaActiva, "mouse"); // teclaActiva.classList.remove('active');

      teclaActiva = e.target;
      pressKey(teclaActiva, "mouse");
      //teclaActiva.classList.add('active');
      //console.log(`Tocando (arrastre): ${teclaActiva.dataset.note}`);
    }
  }
});

document.addEventListener('mouseup', () => {
  if (teclaActiva) releaseKey(teclaActiva, "mouse"); // teclaActiva.classList.remove('active');
  presionando = false;
  teclaActiva = null;
});

function pressKey(key, who) {
  if (who == "mouse") {
    key.classList.add('active');
  } else if (who == "left") {
    key.classList.add('active');
  } else if (who == "right") {
    key.classList.add('active');
  }

  onKeyPressed(key.dataset.note);
}

function releaseKey(key, who) {
  if (who == "mouse") {
    key.classList.remove('active');
  } else if (who == "left") {
    key.classList.remove('active');
  } else if (who == "right") {
    key.classList.remove('active');
  }
}

// ------ FIN SISTEMA PARA DETECTAR EL CLICK Y ARRASTRE DE NOTAS EN EL PIANO ------ //

// ---------------- Sistema para detectar si el usuario presiona el piano con touch ---------------- //
  
  let currentKeyTouched = null;
  const keys = document.querySelectorAll(".key");

  keys.forEach(key => {
    key.addEventListener("touchstart", (e) => {
      e.preventDefault();
      onKeyPressed(key.dataset.note);
      key.classList.add("active");
      currentKeyTouched = key;
    }, { passive: false });
  });

  document.addEventListener("touchmove", (e) => {
    const touch = e.touches[0];
    const elem = document.elementFromPoint(touch.clientX, touch.clientY);

    if (!elem) return;

    // Verificamos si el elemento tocado es una tecla del piano
    const isKey = elem.classList.contains("key");

    if (isKey && elem !== currentKeyTouched) {
      // Apagar la tecla anterior
      if (currentKeyTouched) {
        currentKeyTouched.classList.remove("active");
      }

      // Encender la nueva
      onKeyPressed(elem.dataset.note);
      elem.classList.add("active");
      currentKeyTouched = elem;
    }
  }, { passive: false });

  document.addEventListener("touchend", () => {
    if (currentKeyTouched) {
      currentKeyTouched.classList.remove("active");
      currentKeyTouched = null;
    }
  }, { passive: false });

  document.addEventListener("touchcancel", () => {
    if (currentKeyTouched) {
      currentKeyTouched.classList.remove("active");
      currentKeyTouched = null;
    }
  }, { passive: false });

// ---------------- FIN de Sistema para detectar si el usuario presiona el piano con touch ---------------- //
// ------------------------------ INICIO de Sistema de reproducción de notas ------------------------------ //

// Función para reproducir una nota

//  function playNote(note) { // DEPRECATED FUNCTION
//    if (navigator.userActivation.isActive) {
//      const audio = new Audio(`../../_assets/sounds/piano-notes/${note}.ogg`);
//      audio.play();
//    }
//  }

function onKeyPressed(notePressed) {
  const noteData = getNoteDataToPlay(notePressed);
  playNoteWithPitch(noteData.file, noteData.pitchOffset);
}

function getNoteDataToPlay(notePressed) {
  const noteToSemitone = {
    'C': 0, 'C#': 1, 'D': 2, 'D#': 3, 'E': 4,
    'F': 5, 'F#': 6, 'G': 7, 'G#': 8, 'A': 9, 'A#': 10, 'B': 11
  };

  const baseNotes = ['C', 'D#', 'F#', 'A'];

  const match = notePressed.match(/^([A-G]#?)(\d)$/);
  if (!match) return null;
  const [ , noteName, octaveStr ] = match;
  const octave = parseInt(octaveStr, 10);
  const semitonePressed = noteToSemitone[noteName] + 12 * octave;

  let closest = { note: '', octave: 0, distance: Infinity };

  for (let offset = -1; offset <= 1; offset++) {
    const targetOctave = octave + offset;
    for (const baseNote of baseNotes) {
      const baseSemitone = noteToSemitone[baseNote] + 12 * targetOctave;
      const distance = semitonePressed - baseSemitone;
      if (Math.abs(distance) < Math.abs(closest.distance)) {
        closest = {
          note: baseNote,
          octave: targetOctave,
          distance: distance // puede ser negativo si el base está por encima
        };
      }
    }
  }

  return {
    file: `../../_assets/sounds/piano/w${closest.note.replace("#", "s")}${closest.octave}.ogg`,
    pitchOffset: closest.distance
  };
}

  const audioContext = new (window.AudioContext || window.webkitAudioContext)();

async function playNoteWithPitch(noteFile, notePitchOffset) {

  try {
    let playbackRate = Math.pow(2, notePitchOffset / 12);
    const response = await fetch(noteFile);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.playbackRate.value = playbackRate;

    source.connect(audioContext.destination);
    source.start();
  } catch (error) {
    console.error(`Error reproduciendo ${noteFile}:`, error);
  }
}





// ----------- INICIO SISTEMA DE TECLA Y LABELS ----------- //

let notesArray = [
  "A0", "A#0", "B0",
  "C1", "C#1", "D1", "D#1", "E1", "F1", "F#1", "G1", "G#1", "A1", "A#1", "B1",
  "C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2",
  "C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3",
  "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4",
  "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5",
  "C6", "C#6", "D6", "D#6", "E6", "F6", "F#6", "G6", "G#6", "A6", "A#6", "B6",
  "C7", "C#7", "D7", "D#7", "E7", "F7", "F#7", "G7", "G#7", "A7", "A#7", "B7",
  "C8"
];

let leftHandKeyboardMap = [
  "Z", "S", "X", "D", "C", "V", "G", "B", "H", "N", "J", "M"
]

let rightHandKeyboardMap = [
  "Q", "2", "W", "3", "E", "R", "5", "T", "6", "Y", "7", "U", "I", "9", "O", "0", "P"
]

let leftHandRange = 15;
let rightHandRange = 51;

updateHandRange("left");
updateHandRange("right");

function updateHandRange(hand) {
  clearNoteLabels(hand);
  let handRange = "";
  let handKeyboardMap = [];

  if (hand == "left") {
    handRange = leftHandRange;
    handKeyboardMap = [...leftHandKeyboardMap];
  } else {
    handRange = rightHandRange;
    handKeyboardMap = [...rightHandKeyboardMap];
  }

  for (let i = 0; i < handKeyboardMap.length; i++) {
    const tempKeyLabel = document.getElementById(`k-${notesArray[handRange + i]}`);
    if (tempKeyLabel) 
      tempKeyLabel.textContent = handKeyboardMap[i];
  }
}

function clearNoteLabels(hand) {
  let handKeyboardMap = [];

  if (hand == "left") {
    handKeyboardMap = [...leftHandKeyboardMap];
  } else {
    handKeyboardMap = [...rightHandKeyboardMap];
  }

  handKeyboardMap.forEach(keyboardKey => {
    const labels = document.querySelectorAll(".note-label");
    for (let i = 0; i < labels.length; i++) {
      if (labels[i].textContent === keyboardKey) {
        labels[i].textContent = "";
        break;
      }
    }
  });
}

document.addEventListener("keydown", function(event) {

  if (event.key === "ArrowLeft") {
    if (leftHandRange > 0) {

      for (let i=0; i<12; i++) {
        let note = notesArray[i + leftHandRange];
        let noteDiv = document.querySelector(`.key[data-note="${note}"]`);
        if (noteDiv) releaseKey(noteDiv, "left");
      }

      leftHandRange -= 12;
      updateHandRange("left");
    }

  } else if (event.key === "ArrowRight") {
    if (leftHandRange+12 < rightHandRange) {

      for (let i=0; i<12; i++) {
        let note = notesArray[i + leftHandRange];
        let noteDiv = document.querySelector(`.key[data-note="${note}"]`);
        if (noteDiv) releaseKey(noteDiv, "left");
      }

      leftHandRange += 12;
      updateHandRange("left");
    }

  } else if (event.key === "ArrowDown") {
    if (rightHandRange-12 > leftHandRange) {

      for (let i=0; i<12; i++) {
        let note = notesArray[i + rightHandRange];
        let noteDiv = document.querySelector(`.key[data-note="${note}"]`);
        if (noteDiv) releaseKey(noteDiv, "right");
      }

      rightHandRange -= 12;
      updateHandRange("right");
    }

  } else if (event.key === "ArrowUp") {
    if (rightHandRange < 77) {

      for (let i=0; i<12; i++) {
        let note = notesArray[i + rightHandRange];
        let noteDiv = document.querySelector(`.key[data-note="${note}"]`);
        if (noteDiv) releaseKey(noteDiv, "right");
      }
      
      rightHandRange += 12;
      updateHandRange("right");
    }
  }
});




let keysPressed = new Set(); // Para registrar qué teclas están activas

document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();

  // Ignorar si ya está presionada
  if (keysPressed.has(key)) return;

  // Registrar tecla como presionada
  keysPressed.add(key);

  // Detectar mano y ejecutar función correspondiente
  if (leftHandKeyboardMap.includes(key)) {
    pressLeftHandKey(key);
  } else if (rightHandKeyboardMap.includes(key)) {
    pressRightHandKey(key);
  }
});

document.addEventListener("keyup", (event) => {
  const key = event.key.toUpperCase();

  // Remover del set al soltar la tecla
  keysPressed.delete(key);

  // Acá podrías ejecutar una función para "soltar" la tecla
  releaseKeyVisual(key); // Esto es opcional si querés quitar clase 'active' visual
});

function pressLeftHandKey(key) {
  let pressedNote = notesArray[leftHandKeyboardMap.indexOf(key) + leftHandRange];
  const element_pressedKey = document.querySelector(`.key[data-note="${pressedNote}"]`)
  if (element_pressedKey) pressKey(element_pressedKey, "left");
}

function pressRightHandKey(key) {
  let pressedNote = notesArray[rightHandKeyboardMap.indexOf(key) + rightHandRange];
  const element_pressedKey = document.querySelector(`.key[data-note="${pressedNote}"]`)
  if (element_pressedKey) pressKey(element_pressedKey, "right");
  
}

function releaseKeyVisual(key) {
  let pressedNote;
  let element_pressedKey;

  if (leftHandKeyboardMap.includes(key)) {
    pressedNote = notesArray[leftHandKeyboardMap.indexOf(key) + leftHandRange];
    element_pressedKey = document.querySelector(`.key[data-note="${pressedNote}"]`);
    if (element_pressedKey) releaseKey(element_pressedKey, "left");

  } else if (rightHandKeyboardMap.includes(key)) {
    pressedNote = notesArray[rightHandKeyboardMap.indexOf(key) + rightHandRange];
    element_pressedKey = document.querySelector(`.key[data-note="${pressedNote}"]`);
    if (element_pressedKey) releaseKey(element_pressedKey, "right");
  }
}
