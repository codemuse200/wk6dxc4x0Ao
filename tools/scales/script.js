// ------------- INICIO DEL FOR ALL ------------- 

// Para que las imágenes no se puedan arrastrar
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('dragstart', e => e.preventDefault());
});

/*
Major
Natural minor
Harmonic minor
Melodic minor
Major Pentatonic
Minor Pentatonic
Blues
Ionian Mode
Dorian Mode
Phrygian Mode
Lydian Mode
Mixolydian Mode
Aeolian Mode
Locrian Mode
Chromatic
Whole Tone
Half Whole Diminished
Whole Half Diminished
Bebop Major
Bebop Dominant
Harmonic Major
Hungarian Minor
*/

// --------------- FIN DEL FOR ALL --------------

let globalScale = "major";

const fullScaleOptions = {
  en: {
    major: "Major",
    natural_minor: "Natural minor",
    harmonic_minor: "Harmonic minor",
    melodic_minor: "Melodic minor",
    major_pentatonic: "Major pentatonic",
    minor_pentatonic: "Minor pentatonic",
    blues: "Blues",
    ionian: "Ionian mode",
    dorian: "Dorian mode",
    phrygian: "Phrygian mode",
    lydian: "Lydian mode",
    mixolydian: "Mixolydian mode",
    aeolian: "Aeolian mode",
    locrian: "Locrian mode",
    chromatic: "Chromatic",
    whole_tone: "Whole tone",
    half_whole_diminished: "Half-whole diminished",
    whole_half_diminished: "Whole-half diminished",
    bebop_major: "Bebop major",
    bebop_dominant: "Bebop dominant",
    harmonic_major: "Harmonic major",
    hungarian_minor: "Hungarian minor"
  },
  es: {
    major: "Mayor",
    natural_minor: "Natural menor",
    harmonic_minor: "Armónica menor",
    melodic_minor: "Melódica menor",
    major_pentatonic: "Pentatónica mayor",
    minor_pentatonic: "Pentatónica menor",
    blues: "Blues",
    ionian: "Modo jónico",
    dorian: "Modo dórico",
    phrygian: "Modo frigio",
    lydian: "Modo lidio",
    mixolydian: "Modo mixolidio",
    aeolian: "Modo eólico",
    locrian: "Modo locrio",
    chromatic: "Cromática",
    whole_tone: "Tono entero",
    half_whole_diminished: "Disminuida semitono-tono",
    whole_half_diminished: "Disminuida tono-semitono",
    bebop_major: "Bebop mayor",
    bebop_dominant: "Bebop dominante",
    harmonic_major: "Mayor armónica",
    hungarian_minor: "Menor húngara"
  },
  pt: {
    major: "Maior",
    natural_minor: "Menor natural",
    harmonic_minor: "Menor harmônica",
    melodic_minor: "Menor melódica",
    major_pentatonic: "Pentatônica maior",
    minor_pentatonic: "Pentatônica menor",
    blues: "Blues",
    ionian: "Modo jônico",
    dorian: "Modo dórico",
    phrygian: "Modo frígio",
    lydian: "Modo lídio",
    mixolydian: "Modo mixolídio",
    aeolian: "Modo eólio",
    locrian: "Modo lócrio",
    chromatic: "Cromática",
    whole_tone: "Tom inteiro",
    half_whole_diminished: "Diminuta semitom-tom",
    whole_half_diminished: "Diminuta tom-semitom",
    bebop_major: "Bebop maior",
    bebop_dominant: "Bebop dominante",
    harmonic_major: "Maior harmônica",
    hungarian_minor: "Menor húngara"
  }
}

const pianoContainer = document.getElementById("piano-container");
const scaleSelect = document.getElementById("scale-select");
const scaleOptions = [
  'major', 'natural_minor', 'harmonic_minor', 'melodic_minor', 'major_pentatonic', 
  'minor_pentatonic', 'blues', 'ionian', 'dorian', 'phrygian', 'lydian', 'mixolydian', 'aeolian', 
  'locrian', 'chromatic', 'whole_tone', 'half_whole_diminished', 'whole_half_diminished', 
  'bebop_major', 'bebop_dominant', 'harmonic_major', 'hungarian_minor'
];

// Tabla de mapeo de notas a nombres de archivos
const noteMapping = [
  "C3", "Csharp3", "D3", "Dsharp3", "E3", "F3", "Fsharp3", "G3", "Gsharp3", "A3", "Asharp3", "B3", 
  "C4", "Csharp4", "D4", "Dsharp4", "E4", "F4", "Fsharp4", "G4", "Gsharp4", "A4", "Asharp4", "B4", 
];

// Código del piano base como plantilla
const pianoTemplate = `
  <div class="piano">
    <div class="octave">
      <div class="key white" data-note="C3" data-noteNumber="1"><span class="note-label wk-c3">C</span></div>
      <div class="key black" data-note="C#3" data-noteNumber="2"></div>
      <div class="key white" data-note="D3" data-noteNumber="3"><span class="note-label wk-d3">D</span></div>
      <div class="key black" data-note="D#3" data-noteNumber="4"></div>
      <div class="key white" data-note="E3" data-noteNumber="5"><span class="note-label wk-e3">E</span></div>
      <div class="key white" data-note="F3" data-noteNumber="6"><span class="note-label wk-f3">F</span></div>
      <div class="key black" data-note="F#3" data-noteNumber="7"></div>
      <div class="key white" data-note="G3" data-noteNumber="8"><span class="note-label wk-g3">G</span></div>
      <div class="key black" data-note="G#3" data-noteNumber="9"></div>
      <div class="key white" data-note="A3" data-noteNumber="10"><span class="note-label wk-a3">A</span></div>
      <div class="key black" data-note="A#3" data-noteNumber="11"></div>
      <div class="key white" data-note="B3" data-noteNumber="12"><span class="note-label wk-b3">B</span></div>
      <div class="key white" data-note="C4" data-noteNumber="13"><span class="note-label wk-c4">C</span></div>
      <div class="key black" data-note="C#4" data-noteNumber="14"></div>
      <div class="key white" data-note="D4" data-noteNumber="15"><span class="note-label wk-d4">D</span></div>
      <div class="key black" data-note="D#4" data-noteNumber="16"></div>
      <div class="key white" data-note="E4" data-noteNumber="17"><span class="note-label wk-e4">E</span></div>
      <div class="key white" data-note="F4" data-noteNumber="18"><span class="note-label wk-f4">F</span></div>
      <div class="key black" data-note="F#4" data-noteNumber="19"></div>
      <div class="key white" data-note="G4" data-noteNumber="20"><span class="note-label wk-g4">G</span></div>
      <div class="key black" data-note="G#4" data-noteNumber="21"></div>
      <div class="key white" data-note="A4" data-noteNumber="22"><span class="note-label wk-a4">A</span></div>
      <div class="key black" data-note="A#4" data-noteNumber="23"></div>
      <div class="key white" data-note="B4" data-noteNumber="24"><span class="note-label wk-b4">B</span></div>
    </div>
  </div>`;

// Letras para los nombres de los pianos
const pianoNames = [
  "Do", 
  "Do# / Reb", 
  "Re", 
  "Re# / Mib", 
  "Mi", 
  "Fa", 
  "Fa# / Solb", 
  "Sol", 
  "Sol# / Lab", 
  "La", 
  "La# / Sib", 
  "Si"
];

const fullPianoNames = {
  en: [
    "C", 
    "C# / Db", 
    "D", 
    "D# / Eb", 
    "E", 
    "F", 
    "F# / Gb", 
    "G", 
    "G# / Ab", 
    "A", 
    "A# / Bb", 
    "B"
  ],
  es: [
    "Do", 
    "Do# / Reb", 
    "Re", 
    "Re# / Mib", 
    "Mi", 
    "Fa", 
    "Fa# / Solb", 
    "Sol", 
    "Sol# / Lab", 
    "La", 
    "La# / Sib", 
    "Si"
  ],
  pt: [
    "Dó", 
    "Dó# / Réb", 
    "Ré", 
    "Ré# / Mib", 
    "Mi", 
    "Fá", 
    "Fá# / Solb", 
    "Sol", 
    "Sol# / Láb", 
    "Lá", 
    "Lá# / Sib", 
    "Si"
  ],
}

// Función para generar las notas para cada piano
function generatePianoNotes(baseNotes, numPianos) {
  const allNotes = [baseNotes];  // Comenzamos con las notas base del primer piano

  // Generamos las notas para los siguientes pianos
  for (let i = 1; i < numPianos; i++) {
    const newNotes = allNotes[i - 1].map(note => note + 1); // Sumamos 1 a cada nota del piano anterior
    allNotes.push(newNotes); // Añadimos las nuevas notas al array
  }

  return allNotes;
}

const scaleNotes = {
  'major': generatePianoNotes([1, 3, 5, 6, 8, 10, 12, 13], 12),                      // Major
  'natural_minor': generatePianoNotes([1, 3, 4, 6, 8, 9, 11, 13], 12),               // Natural Minor
  'harmonic_minor': generatePianoNotes([1, 3, 4, 6, 8, 9, 12, 13], 12),              // Harmonic Minor
  'melodic_minor': generatePianoNotes([1, 3, 4, 6, 8, 10, 12, 13], 12),              // Melodic Minor
  'major_pentatonic': generatePianoNotes([1, 3, 5, 8, 10, 13], 12),                  // Major Pentatonic
  'minor_pentatonic': generatePianoNotes([1, 4, 6, 8, 11, 13], 12),                  // Minor Pentatonic
  'blues': generatePianoNotes([1, 4, 6, 7, 8, 11, 13], 12),                          // Blues
  'ionian': generatePianoNotes([1, 3, 5, 6, 8, 10, 12, 13], 12),                     // Ionian
  'dorian': generatePianoNotes([1, 3, 4, 6, 8, 10, 11, 13], 12),                     // Dorian
  'phrygian': generatePianoNotes([1, 2, 4, 6, 8, 9, 11, 13], 12),                    // Phrygian
  'lydian': generatePianoNotes([1, 3, 5, 7, 8, 10, 12, 13], 12),                     // Lydian
  'mixolydian': generatePianoNotes([1, 3, 5, 6, 8, 10, 11, 13], 12),                 // Mixolydian
  'aeolian': generatePianoNotes([1, 3, 4, 6, 8, 9, 11, 13], 12),                     // Aeolian
  'locrian': generatePianoNotes([1, 2, 4, 6, 7, 9, 11, 13], 12),                     // Locrian
  'chromatic': generatePianoNotes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 12),  // Chromatic
  'whole_tone': generatePianoNotes([1, 3, 5, 7, 9, 11, 13], 12),                     // Whole Tone
  'half_whole_diminished': generatePianoNotes([1, 2, 4, 5, 7, 8, 10, 11, 13], 12),   // Half Whole Diminished
  'whole_half_diminished': generatePianoNotes([1, 3, 4, 6, 7, 9, 10, 12, 13], 12),   // Whole Half Diminished
  'bebop_major': generatePianoNotes([1, 3, 5, 6, 8, 9, 10, 12, 13], 12),             // Bebop Major
  'bebop_dominant': generatePianoNotes([1, 3, 5, 6, 8, 10, 11, 12, 13], 12),         // Bebop Dominant
  'harmonic_major': generatePianoNotes([1, 3, 5, 6, 8, 9, 12, 13], 12),              // Harmonic Major
  'hungarian_minor': generatePianoNotes([1, 3, 4, 7, 8, 9, 12, 13], 12),             // Hungarian Minor
};

// Función para actualizar los pianos según la escala seleccionada
function updatePianos(scale) {
  // Vaciar el contenedor de pianos
  pianoContainer.innerHTML = "";

  // Obtener el nombre legible de la escala seleccionada
  //const selectedScaleName = scaleSelect.options[scaleSelect.selectedIndex].text;
  const selectedScaleName = fullScaleOptions[lang][scale];

  // Iterar sobre los pianos y pintar las teclas correspondientes
  scaleNotes[scale].forEach((pianoNotes, index) => {

    // Crear un contenedor (div) para el piano, el botón y su título
    const pianoWrapper = document.createElement("div");
    pianoWrapper.classList.add("piano-wrapper");

    // Título para cada piano (en esta div va a estar el texto y el botón)
    const pianoTitle = document.createElement("div");
    pianoTitle.classList.add("piano-title");
    pianoTitle.textContent = `${fullPianoNames[langNotation][index]} ${selectedScaleName}`; // Agregar el nombre de la escala

    // Crear el botón de sonido (botón)
    const soundButton = document.createElement("button");
    soundButton.classList.add("sound-button");
    soundButton.innerHTML = `<span id="soundButtonText${index}" class="material-icons playButton">play_arrow</span>`;

    // Agregar el botón a la div del título
    pianoTitle.appendChild(soundButton);
    
    // Crear el piano
    const piano = document.createElement("div");
    piano.innerHTML = pianoTemplate;
    piano.id = `pianoN${index}`;

    // Agregar el título y el piano al contenedor
    pianoWrapper.appendChild(pianoTitle);
    pianoWrapper.appendChild(piano);

    /* RESUMEN DE LAS DIVs
          piano-container = contiene los 12 pianos que se muestran con cada escala
          piano-wrapper   = contiene cada piano junto con su título y el botón de sonido
          piano-title     = contiene el título (texto) de cada piano junto con el botón
          piano           = contiene el piano como tal

          el botón de sonido es hijo de piano-title
          'piano' y 'piano-title' son hijos de 'piano-wrapper'
          'piano-wrapper' es hijo de 'piano-container'
    */

    // Resaltar las teclas correspondientes
    const keys = piano.querySelectorAll('.key');
    pianoNotes.forEach(note => {
      // Asegúrate de que las notas estén dentro del rango de teclas
      if (note <= keys.length) {
        requestAnimationFrame(() => {
          keys[note - 1].classList.add('active');
        });
      }
    });

    // Agregar el pianoWrapper al contenedor principal
    pianoContainer.appendChild(pianoWrapper);

    // Crear la variable del Span del botón para que pueda alternarse entre play y stop
    let soundButtonSpan = document.getElementById(`soundButtonText${index}`);

    // Agregar el evento para reproducir sonido
    soundButton.addEventListener("click", () => {
      if (soundButtonSpan.classList.contains('play')) {
        playPianoNotes(pianoNotes, piano, index); // Función que reproduce las notas
      } else {
        stopPianoNotes(index); // Función que detiene las notas
      }
    });

  });
  updatePianoSoundOnClick();
}

let timeOutPlayingNotes = [];

function stopPianoNotes(index) {
  let soundButtonSpan = document.getElementById(`soundButtonText${index}`);

  soundButtonSpan.classList.remove('stop');
  soundButtonSpan.classList.add('play');
  soundButtonSpan.textContent = "play_arrow";

  if (timeOutPlayingNotes[index]) {
    timeOutPlayingNotes[index].forEach(timeoutId => clearTimeout(timeoutId));
    timeOutPlayingNotes[index] = [];
  }
}

function playPianoNotes(pianoNotes, piano, indexb) {
  let soundButtonSpan = document.getElementById(`soundButtonText${indexb}`);

  soundButtonSpan.classList.remove('play');
  soundButtonSpan.classList.add('stop');
  soundButtonSpan.textContent = "stop";

  timeOutPlayingNotes[indexb] = []; // Inicializar la lista de timeouts para ese piano

  pianoNotes.forEach((note, index) => {
    const timeoutId = setTimeout(() => {
      const noteName = noteMapping[note - 1]; // Restar 1 porque las notas comienzan en 1, pero los índices en 0
      const audio = new Audio(`../../_assets/sounds/piano-notes/${noteName}.ogg`);
      audio.play();

      // Obtener la tecla correspondiente dentro del piano actual
      const keyElement = piano.querySelector(`.key[data-noteNumber="${note}"]`);

      // Agregar efecto de resplandor
      if (keyElement) {
        keyElement.classList.add("highlight");

        // Quitar efecto después de 500ms (antes de que suene la próxima nota)
        setTimeout(() => {
          keyElement.classList.remove("highlight");
        }, 350);
      }
    }, index * 350); // 350ms de diferencia entre cada nota

    timeOutPlayingNotes[indexb].push(timeoutId);
  });

  // Programar el stop automático al terminar todas las notas
  const totalDuration = pianoNotes.length * 350 + 500; // 500 de delay extra
  const autoStop = setTimeout(() => {
    stopPianoNotes(indexb);
  }, totalDuration);

  timeOutPlayingNotes[indexb].push(autoStop); // También se guarda por si quisiera cancelarlo
}

// ----------------- Custom Selector Dropdown ----------------- //

const element_csdCustomSelect = document.getElementById('csdCustomSelect');
const element_csdSelectDropdown = document.getElementById('csdSelectDropdown');
const element_csdSelectedValue = document.getElementById('csdSelectedValue');

document.body.addEventListener("click", () => {
  element_csdSelectDropdown.classList.add("hidden");
});

element_csdCustomSelect.addEventListener("click", (event) => {
  element_csdSelectDropdown.classList.toggle("hidden");
  event.stopPropagation();
});


const csdOptionsScales = document.querySelectorAll(".csd-dropdown-option");
csdOptionsScales.forEach((option) => {
  option.addEventListener("click", (evento) => {
    // Quitar la clase "selected" de todas las opciones
    csdOptionsScales.forEach((el) => el.classList.remove("selected"));

    // Agregar la clase "selected" solo a la opción actual
    option.classList.add("selected");

    // Obtener el valor de data-scale y ejecutar la función
    const scale = option.dataset.scale;
    selectOptionScale(scale);
  });
});

selectOptionScale("major");
csdOptionsScales[0].classList.add("selected");

function selectOptionScale(optionScale) {
  const element_csdSelectedValue = document.getElementById('csdSelectedValue');
  element_csdSelectedValue.textContent = fullScaleOptions[lang][optionScale];
  updatePianos(optionScale);
  globalScale = optionScale;
}

function updateOptionsDropdown() {
  const optionsList = document.querySelectorAll(".csd-dropdown-option");
  optionsList.forEach ((option, index) => {
    option.textContent = fullScaleOptions[lang][scaleOptions[index]];
  });
}

// ------------- Sistema para que suenen las teclas al hacer click ------------ //

function updatePianoSoundOnClick(){
  // Seleccionar todas las teclas
  const keys = document.querySelectorAll(".key");

  keys.forEach(key => {  
    key.addEventListener('click', (event) => {
      //key.classList.toggle("active");
      const note = event.currentTarget.getAttribute('data-note');
      pressKeyEvent(note);
    });
  });

  function pressKeyEvent(note) {
    const element_key_pressed = document.querySelector(`[data-note="${note}"]`);
    playSound(note);
  }

  function playSound(note) {  
    note = note.replace("#", "sharp");
    const audio = new Audio(`../../_assets/sounds/piano-notes/${note}.ogg`); // Ruta al archivo de sonido
    audio.play();
  }
}
/*
function updateWhiteKeyLabels() {
  [...document.getElementsByClassName('wk-c3')].forEach(el => el.textContent = getTranslatedTextNote('chord-C'));
  [...document.getElementsByClassName('wk-d3')].forEach(el => el.textContent = getTranslatedTextNote('chord-D'));
  [...document.getElementsByClassName('wk-e3')].forEach(el => el.textContent = getTranslatedTextNote('chord-E'));
  [...document.getElementsByClassName('wk-f3')].forEach(el => el.textContent = getTranslatedTextNote('chord-F'));
  [...document.getElementsByClassName('wk-g3')].forEach(el => el.textContent = getTranslatedTextNote('chord-G'));
  [...document.getElementsByClassName('wk-a3')].forEach(el => el.textContent = getTranslatedTextNote('chord-A'));
  [...document.getElementsByClassName('wk-b3')].forEach(el => el.textContent = getTranslatedTextNote('chord-B'));
  [...document.getElementsByClassName('wk-c4')].forEach(el => el.textContent = getTranslatedTextNote('chord-C'));
  [...document.getElementsByClassName('wk-d4')].forEach(el => el.textContent = getTranslatedTextNote('chord-D'));
  [...document.getElementsByClassName('wk-e4')].forEach(el => el.textContent = getTranslatedTextNote('chord-E'));
  [...document.getElementsByClassName('wk-f4')].forEach(el => el.textContent = getTranslatedTextNote('chord-F'));
  [...document.getElementsByClassName('wk-g4')].forEach(el => el.textContent = getTranslatedTextNote('chord-G'));
  [...document.getElementsByClassName('wk-a4')].forEach(el => el.textContent = getTranslatedTextNote('chord-A'));
  [...document.getElementsByClassName('wk-b4')].forEach(el => el.textContent = getTranslatedTextNote('chord-B'));
}*/

function updateWhiteKeyLabels() {
  const notes = ['c3', 'd3', 'e3', 'f3', 'g3', 'a3', 'b3', 'c4', 'd4', 'e4', 'f4', 'g4', 'a4', 'b4'];
  notes.forEach(note => {
    const className = `wk-${note}`;
    const chordName = `chord-${note.charAt(0).toUpperCase()}`;
    [...document.getElementsByClassName(className)]
      .forEach(el => el.textContent = getTranslatedTextNote(chordName));
  });
}


function getTranslatedTextNote(key){
  switch (langNotation) {
    case "en": // english
      if (key == "chord-C") {return "C";}
      if (key == "chord-D") {return "D";}
      if (key == "chord-E") {return "E";}
      if (key == "chord-F") {return "F";}
      if (key == "chord-G") {return "G";}
      if (key == "chord-A") {return "A";}
      if (key == "chord-B") {return "B";}

      if (key == "chord-C#") {return "C#";}
      if (key == "chord-D#") {return "D#";}
      if (key == "chord-F#") {return "F#";}
      if (key == "chord-G#") {return "G#";}
      if (key == "chord-A#") {return "A#";}

      if (key == "chord-Db") {return "Db";}
      if (key == "chord-Eb") {return "Eb";}
      if (key == "chord-Gb") {return "Gb";}
      if (key == "chord-Ab") {return "Ab";}
      if (key == "chord-Bb") {return "Bb";}
      break;
    case "es": // español
      if (key == "chord-C") {return "Do";}
      if (key == "chord-D") {return "Re";}
      if (key == "chord-E") {return "Mi";}
      if (key == "chord-F") {return "Fa";}
      if (key == "chord-G") {return "Sol";}
      if (key == "chord-A") {return "La";}
      if (key == "chord-B") {return "Si";}

      if (key == "chord-C#") {return "Do#";}
      if (key == "chord-D#") {return "Re#";}
      if (key == "chord-F#") {return "Fa#";}
      if (key == "chord-G#") {return "Sol#";}
      if (key == "chord-A#") {return "La#";}

      if (key == "chord-Db") {return "Reb";}
      if (key == "chord-Eb") {return "Mib";}
      if (key == "chord-Gb") {return "Solb";}
      if (key == "chord-Ab") {return "Lab";}
      if (key == "chord-Bb") {return "Sib";} 
      break;
    case "pt": // português
      if (key == "chord-C") {return "Dó";}
      if (key == "chord-D") {return "Ré";}
      if (key == "chord-E") {return "Mi";}
      if (key == "chord-F") {return "Fá";}
      if (key == "chord-G") {return "Sol";}
      if (key == "chord-A") {return "Lá";}
      if (key == "chord-B") {return "Si";}

      if (key == "chord-C#") {return "Dó#";}
      if (key == "chord-D#") {return "Ré#";}
      if (key == "chord-F#") {return "Fá#";}
      if (key == "chord-G#") {return "Sol#";}
      if (key == "chord-A#") {return "Lá#";}

      if (key == "chord-Db") {return "Réb";}
      if (key == "chord-Eb") {return "Mib";}
      if (key == "chord-Gb") {return "Solb";}
      if (key == "chord-Ab") {return "Láb";}
      if (key == "chord-Bb") {return "Sib";}
      break;
  }
}