// ------------- INICIO DEL FOR ALL ------------- 

// Para que las imágenes no se puedan arrastrar
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('dragstart', e => e.preventDefault());
});

// --------------- FIN DEL FOR ALL --------------


/* ------------ element list ----------------- */
const element_chord_display = document.getElementById('chordDisplay');
const element_chord_display_detail = document.getElementById('chordDisplayDetail');
const element_chord_display_detail_match = document.getElementById('chordDisplayDetailMatch');
const element_chord_display_result = document.getElementById('chordDisplayResult');
const element_chord_display_copy_container = document.getElementById('chordDisplayCopyButton');
const element_tooltip_copy_span = document.getElementById('tooltipCopy');

/* ----------- Constantes para uso general ----------- */
const noteToNumberMap = {
  "C3": 1,
  "C#3": 2,
  "D3": 3,
  "D#3": 4,
  "E3": 5,
  "F3": 6,
  "F#3": 7,
  "G3": 8,
  "G#3": 9,
  "A3": 10,
  "A#3": 11,
  "B3": 12,
  "C4": 13,
  "C#4": 14,
  "D4": 15,
  "D#4": 16,
  "E4": 17,
  "F4": 18,
  "F#4": 19,
  "G4": 20,
  "G#4": 21,
  "A4": 22,
  "A#4": 23,
  "B4": 24  
};

// Esta constante invierte noteToNumber para tenerlo al revés
const numberToNoteMap = Object.fromEntries(
  Object.entries(noteToNumberMap).map(([note, number]) => [number, note])
);

function convertNumbersToNotes(numbersArray) {
  return numbersArray.map(num => numberToNoteMap[num]);
}

// --------------- SEARCH SECTION ------------- //

// Seleccionamos el input de búsqueda
const searchInput = document.querySelector('.cf-search-input');
const searchButton = document.querySelector('.cf-search-button');
const searchCancelButton = document.querySelector('.cf-search-cancel-button');

searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    searchChord();
  }
});

// Evento para detectar cambios en el input
searchInput.addEventListener('input', () => {
  if (searchInput.value.trim() !== "") {
    searchCancelButton.style.display = "flex"; // Mostrar botón
  } else {
    searchCancelButton.style.display = "none"; // Ocultar botón
  }
});

// Evento para detectar clic en el botón
searchButton.addEventListener('click', searchChord);

function searchChord() {
  const searchString = searchInput.value.trim(); // Obtiene el valor y elimina espacios extra
  //console.log('Texto ingresado: ', searchString);

  searchInput.blur(); // Quita el foco del input
  
  //let convertedQuery = []; 
  //console.log(convertSearchString(searchString));
  //normalizedChord = normalizeChord(convertSearchString(searchString));
  let searchTranslated = translateSearchToEn(searchString)
  let convertedQuery = convertSearchString(searchTranslated);
  let normalizedChord = normalizeChord(convertedQuery);
  let finalChord = sharpChord(normalizedChord);

  //console.log(finalChord);

  if (fullChordList.hasOwnProperty(finalChord)) {  
    const chordNotes = fullChordList[finalChord];
    const anotherChordToCompare = getChordText(fullChordList, chordNotes);
    element_chord_display_detail_match.textContent = "";

    if (finalChord.includes("#")) {
      if (finalChord == normalizedChord) {
        sharpButtonEvent();
      } else {
        flatButtonEvent();
      }
    }

    chordFoundEvent(chordNotes);
    setTimeout(() => {
      theseNotesMatchText(finalChord, anotherChordToCompare, searchString);
    }, 225);
    
  } else {
    chordNotFoundEvent();
    //console.log(`El acorde ${normalizedChord} no se encuentra en la lista.`);
  }
}

function translateSearchToEn(searchText) {
  let query = searchText;

  if ((langNotation == 'es') || (langNotation == 'pt')) {
    query = query.toLowerCase();
    query = query.replaceAll(" ", "");
    query = query.replaceAll("á", "a");
    query = query.replaceAll("é", "e");
    query = query.replaceAll("í", "i");
    query = query.replaceAll("ó", "o");
    query = query.replaceAll("ú", "u");

    let spanish = {
      "do": "C",
      "re": "D",
      "mi": "E",
      "fa": "F",
      "sol": "G",
      "la": "A",
      "si": "B",
    }

    // Divide el acorde en dos partes si tiene inversión
    let parts = query.split("/");
    let translatedParts = parts.map(part => {
      let match = part.match(/^(do|re|mi|fa|sol|la|si)(#|b)?(.*)$/);
      return match ? (spanish[match[1]] || match[1]) + (match[2] || "") + match[3] : part;
    });

    // Une las partes traducidas
    query = translatedParts.join("/");
  }

  return query;
}

function convertSearchString(searchText) {
  let convertedQuery = searchText;

  convertedQuery = convertedQuery.toLowerCase();

  convertedQuery = convertedQuery.replaceAll(" ", "");
  convertedQuery = convertedQuery.replaceAll(".", "");
  convertedQuery = convertedQuery.replaceAll("chord", "");
  convertedQuery = convertedQuery.replaceAll("piano", "");
  convertedQuery = convertedQuery.replaceAll("guitar", "");
  convertedQuery = convertedQuery.replaceAll("and", "");

  convertedQuery = convertedQuery.replaceAll("á", "a");
  convertedQuery = convertedQuery.replaceAll("é", "e");
  convertedQuery = convertedQuery.replaceAll("í", "i");
  convertedQuery = convertedQuery.replaceAll("ó", "o");
  convertedQuery = convertedQuery.replaceAll("ú", "u");

  // Hace que sólo la primer letra sea mayúscula
  convertedQuery = convertedQuery[0].toUpperCase() + convertedQuery.substring(1);

  convertedQuery = convertedQuery.replaceAll("(b6)", "AUXb6AUX");
  convertedQuery = convertedQuery.replaceAll("(7)", "7");
  convertedQuery = convertedQuery.replaceAll("(9)", "add9");  
  convertedQuery = convertedQuery.replaceAll("(11)", "add11");
  convertedQuery = convertedQuery.replaceAll("(13)", "add13");  

  convertedQuery = convertedQuery.replaceAll('(', '');
  convertedQuery = convertedQuery.replaceAll(')', '');

  /*if (convertedQuery.includes("(b6)")) {
    convertedQuery = convertedQuery.replaceAll("(b6)", "AUXb6AUX");
  }

  if (convertedQuery.includes('(') || convertedQuery.includes(')')) {
    convertedQuery = convertedQuery.replaceAll('(', '');
    convertedQuery = convertedQuery.replaceAll(')', '');
  }*/

  if (langNotation == 'es') {
    convertedQuery = convertedQuery.replaceAll("mayor", "major");
    convertedQuery = convertedQuery.replaceAll("menor", "minor");    
    convertedQuery = convertedQuery.replaceAll("sostenido", "sharp");
    convertedQuery = convertedQuery.replaceAll("bemol", "flat");
    convertedQuery = convertedQuery.replaceAll("aumentado", "augmented"); 
    convertedQuery = convertedQuery.replaceAll("disminuido", "diminished"); 
    convertedQuery = convertedQuery.replaceAll("Acorde", ""); 
    convertedQuery = convertedQuery.replaceAll("acorde", "");
    convertedQuery = convertedQuery.replaceAll("novena", "9");
    convertedQuery = convertedQuery.replaceAll("noveno", "9"); 
    convertedQuery = convertedQuery.replaceAll("septima", "7");
    convertedQuery = convertedQuery.replaceAll("septimo", "7");
    convertedQuery = convertedQuery.replaceAll("sexta", "6");
    convertedQuery = convertedQuery.replaceAll("sexto", "6");
    convertedQuery = convertedQuery.replaceAll("quinta", "5");
    convertedQuery = convertedQuery.replaceAll("quinto", "5");
    convertedQuery = convertedQuery.replaceAll("cuarta", "4");
    convertedQuery = convertedQuery.replaceAll("cuarto", "4");
    convertedQuery = convertedQuery.replaceAll("tercera", "3");
    convertedQuery = convertedQuery.replaceAll("tercero", "3");
    convertedQuery = convertedQuery.replaceAll("segunda", "2");
    convertedQuery = convertedQuery.replaceAll("segundo", "2");
    //convertedQuery = convertedQuery.replaceAll("de", "");
  }

  if (langNotation == 'pt') {
    convertedQuery = convertedQuery.replaceAll("maior", "major");
    convertedQuery = convertedQuery.replaceAll("menor", "minor");    
    convertedQuery = convertedQuery.replaceAll("sustenido", "sharp");      
    convertedQuery = convertedQuery.replaceAll("bemol", "flat");
    convertedQuery = convertedQuery.replaceAll("aumentado", "augmented");  
    convertedQuery = convertedQuery.replaceAll("disminuido", "diminished");       
    convertedQuery = convertedQuery.replaceAll("Acorde", ""); 
    convertedQuery = convertedQuery.replaceAll("acorde", "");
    convertedQuery = convertedQuery.replaceAll("nona", "9");
    convertedQuery = convertedQuery.replaceAll("nono", "9"); 
    convertedQuery = convertedQuery.replaceAll("setima", "7");
    convertedQuery = convertedQuery.replaceAll("setimo", "7");
    convertedQuery = convertedQuery.replaceAll("sexta", "6");
    convertedQuery = convertedQuery.replaceAll("sexto", "6");
    convertedQuery = convertedQuery.replaceAll("quinta", "5");
    convertedQuery = convertedQuery.replaceAll("quinto", "5");
    convertedQuery = convertedQuery.replaceAll("quarta", "4");
    convertedQuery = convertedQuery.replaceAll("quarto", "4");
    convertedQuery = convertedQuery.replaceAll("terceira", "3");
    convertedQuery = convertedQuery.replaceAll("terceiro", "3");
    convertedQuery = convertedQuery.replaceAll("segunda", "2");
    convertedQuery = convertedQuery.replaceAll("segundo", "2");
    //convertedQuery = convertedQuery.replaceAll("de", "");
  }

  convertedQuery = convertedQuery.replaceAll('sharp', '#');
  convertedQuery = convertedQuery.replaceAll('flat', 'b');

  /*if (convertedQuery.includes('sharp') || convertedQuery.includes('flat')) {
    convertedQuery = convertedQuery.replaceAll('sharp', '#');
    convertedQuery = convertedQuery.replaceAll('flat', 'b');
  } */ 

  if (convertedQuery.includes("b6")) {
    if (convertedQuery.includes("mb6")) {
      convertedQuery = convertedQuery.replaceAll("mb6", "m(b6)");
    }
    if (convertedQuery.includes("#b6")) {
      convertedQuery = convertedQuery.replaceAll("#b6", "#(b6)");
    }
    if (convertedQuery.includes("bb6")) {
      convertedQuery = convertedQuery.replaceAll("bb6", "b(b6)");
    }
  }

  convertedQuery = convertedQuery.replaceAll("thirteen", "13");  
  convertedQuery = convertedQuery.replaceAll("eleven", "11");
  convertedQuery = convertedQuery.replaceAll("nine", "9");
  convertedQuery = convertedQuery.replaceAll("seven", "7");
  convertedQuery = convertedQuery.replaceAll("six", "6");
  convertedQuery = convertedQuery.replaceAll("thirteenth", "13");  
  convertedQuery = convertedQuery.replaceAll("eleventh", "11");
  convertedQuery = convertedQuery.replaceAll("ninth", "9");  
  convertedQuery = convertedQuery.replaceAll("seventh", "7");
  convertedQuery = convertedQuery.replaceAll("sixth", "6");
  convertedQuery = convertedQuery.replaceAll("13th", "13");  
  convertedQuery = convertedQuery.replaceAll("11th", "11");
  convertedQuery = convertedQuery.replaceAll("9th", "9");
  convertedQuery = convertedQuery.replaceAll("7th", "7");
  convertedQuery = convertedQuery.replaceAll("6th", "6");
  convertedQuery = convertedQuery.replaceAll("5th", "5");
  convertedQuery = convertedQuery.replaceAll("4th", "4");  
  convertedQuery = convertedQuery.replaceAll("&", "");
  convertedQuery = convertedQuery.replaceAll("diminished", "dim");
  convertedQuery = convertedQuery.replaceAll("augmented", "aug");
  convertedQuery = convertedQuery.replaceAll("suspended", "sus");
  convertedQuery = convertedQuery.replaceAll("minor", "min");
  convertedQuery = convertedQuery.replaceAll("min", "m");
  convertedQuery = convertedQuery.replaceAll("-", "m");
  convertedQuery = convertedQuery.replaceAll("+", "aug");
  convertedQuery = convertedQuery.replaceAll("∆", "maj");
  convertedQuery = convertedQuery.replaceAll("Δ", "maj"); // Hay dos triángulos por si son un caracter ASCII diferente

  if (convertedQuery.includes("maj7")) {
    if ((convertedQuery.includes("mm")) || (convertedQuery.includes("ugm")))  {
      convertedQuery = convertedQuery.replaceAll("maj7", "(AUX7)");
    } else {
      convertedQuery = convertedQuery.replaceAll("maj7", "AUX7");
    }
  }

  if (convertedQuery.includes("maj9")) {
    if ((convertedQuery.includes("mm")) || (convertedQuery.includes("ugm")))  {
      convertedQuery = convertedQuery.replaceAll("maj9", "(AUX9)");
    } else {
      convertedQuery = convertedQuery.replaceAll("maj9", "AUX9");
    }
  }

  if (convertedQuery.includes("maj11")) {
    if ((convertedQuery.includes("mm")) || (convertedQuery.includes("ugm")))  {
      convertedQuery = convertedQuery.replaceAll("maj11", "(AUX11)");
    } else {
      convertedQuery = convertedQuery.replaceAll("maj11", "AUX11");
    }
  }

  if (convertedQuery.includes("maj13")) {
    if ((convertedQuery.includes("mm")) || (convertedQuery.includes("ugm")))  {
      convertedQuery = convertedQuery.replaceAll("maj13", "(AUX13)");
    } else {
      convertedQuery = convertedQuery.replaceAll("maj13", "AUX13");
    }
  }

  convertedQuery = convertedQuery.replaceAll("major", "maj");
  convertedQuery = convertedQuery.replaceAll("maj", "");

  convertedQuery = convertedQuery.replaceAll("(AUX7)", "(maj7)");
  convertedQuery = convertedQuery.replaceAll("(AUX9)", "(maj9)");
  convertedQuery = convertedQuery.replaceAll("(AUX11)", "(maj11)");
  convertedQuery = convertedQuery.replaceAll("(AUX13)", "(maj13)");
  convertedQuery = convertedQuery.replaceAll("AUX7", "maj7");
  convertedQuery = convertedQuery.replaceAll("AUX9", "maj9");
  convertedQuery = convertedQuery.replaceAll("AUX11", "maj11");
  convertedQuery = convertedQuery.replaceAll("AUX13", "maj13");

  convertedQuery = convertedQuery.replaceAll("AUXb6AUX", "(b6)");

  convertedQuery = convertedQuery.replaceAll("°", "dim");
  convertedQuery = convertedQuery.replaceAll("º", "dim");
  convertedQuery = convertedQuery.replaceAll("ø", "m7b5");
  convertedQuery = convertedQuery.replaceAll("∅", "m7b5");

  if (convertedQuery.includes("add")) {
    if (convertedQuery.includes('7')) {
      convertedQuery = convertedQuery.replaceAll("add4", "add11");
      convertedQuery = convertedQuery.replaceAll("add2", "add9");
    } else {
      convertedQuery = convertedQuery.replaceAll("add11", "add4");
      convertedQuery = convertedQuery.replaceAll("add9", "add2");
    }

    convertedQuery = convertedQuery.replaceAll("add2", "(add2)");
    convertedQuery = convertedQuery.replaceAll("add4", "(add4)");
    convertedQuery = convertedQuery.replaceAll("add9", "(add9)");
    convertedQuery = convertedQuery.replaceAll("add11", "(add11)");
    convertedQuery = convertedQuery.replaceAll("add6", "6");
  }

  // Esto hace que si el usuario puso una barra entonces la primer letra después de la barra tiene que ser mayúscula
  if (convertedQuery.includes('/')) {
    convertedQuery = convertedQuery.substring(0, convertedQuery.indexOf('/')+1) + convertedQuery[convertedQuery.indexOf('/')+1].toUpperCase()
    + convertedQuery.substring(convertedQuery.indexOf('/')+2);
  }

  convertedQuery = convertedQuery.replaceAll("no", "omit");

  if (convertedQuery.includes("omit9")) {
    if (convertedQuery.includes('11)omit')) {
      convertedQuery = convertedQuery.replaceAll('omit9', '(omit9)');
    } 
    if (convertedQuery.includes('11omit')) {
      convertedQuery = convertedQuery.replaceAll('omit9', '(omit9)');
    } 
  }

  if (convertedQuery.includes("omit5")) {
    if (convertedQuery.includes('7omit')) {
      convertedQuery = convertedQuery.replaceAll('omit5', '(omit5)');
    } 
    if (convertedQuery.includes(')omit')) {
      convertedQuery = convertedQuery.replaceAll('omit5', '(omit5)');
    } 
  }    

  if (convertedQuery.includes("add13")) {
    if (convertedQuery.includes(')add13')) {
      convertedQuery = convertedQuery.replaceAll('add13', '(add13)');
    }
    else if (convertedQuery.includes('7')) {
      convertedQuery = convertedQuery.replaceAll('add13', '(add13)');
    }
  }

  convertedQuery = convertedQuery.replaceAll("  ", " ");

  //console.log('Texto procesado: ', convertedQuery);
  return convertedQuery;
}

function normalizeChord(chord) {
  const replacementChords = {
      "Ab": "G#", "Bb": "A#", "Eb": "D#", "Db": "C#", "Gb": "F#",
      "G#": "Ab", "A#": "Bb", "D#": "Eb", "C#": "Db", "F#": "Gb"
  };

  // Si el acorde NO tiene barra, no hay nada que hacer
  if (!chord.includes("/")) return chord;

  // Dividir el acorde en la parte principal y la raíz
  let [mainChord, rootNote] = chord.split("/");

  // Si la raíz ya es una nota natural (C, D, E, F, G, A, B), no hay que cambiar nada
  if (!replacementChords[rootNote]) return chord;

  // Si el acorde principal usa bemoles, convertir la raíz a bemol si es necesario
  if (mainChord.includes("b") && rootNote.includes("#")) {
      rootNote = replacementChords[rootNote]; // Convertimos de # a b
  }
  
  // Si el acorde principal usa sostenidos, convertir la raíz a sostenido si es necesario
  if (mainChord.includes("#") && rootNote.includes("b")) {
      rootNote = replacementChords[rootNote]; // Convertimos de b a #
  }

  return `${mainChord}/${rootNote}`;
}

function sharpChord(chord) {
  const flatToSharpMap = {
    "Db": "C#",
    "Eb": "D#",
    "Gb": "F#",
    "Ab": "G#",
    "Bb": "A#"
  };

  return chord.replace(/Db|Eb|Gb|Ab|Bb/g, match => flatToSharpMap[match]);
}

function chordNotFoundEvent() {
  element_chord_display_result.textContent = getTranslatedText("chordNotFound");
  element_chord_display_result.classList.remove("active");

//  element_chord_display_copy_container.classList.add("noChord");
}

function chordFoundEvent(chordNumberArray) {
  element_chord_display_result.textContent = getTranslatedText("chordFound");
  element_chord_display_result.classList.add("active");

  clearButtonEvent();

  const notesArray = convertNumbersToNotes(chordNumberArray);

  notesArray.forEach((note, index) => {
    setTimeout(() => {
      pressKeyEvent(note);
      highlightNote(note);
    }, index * 75);
  })

}

function theseNotesMatchText(finalChord, anotherChordToCompare, convertedQuery) {

  if (finalChord != anotherChordToCompare) {
    element_chord_display_detail_match.textContent = getTranslatedText('notesMatch') + `${convertedQuery}`;
    element_chord_display_detail_match.style.display = 'block';
  } else {
    element_chord_display_detail_match.textContent = "";
    element_chord_display_detail_match.style.display = 'none';
  }    
  //  og(`Notas del acorde ${normalizedChord}:`, chordNotes);  
}

// Evento para detectar clic en el botón de Cancelar Búsqueda
searchCancelButton.addEventListener('click', cancelSearchButtonEvent);

function cancelSearchButtonEvent() {
  element_chord_display_result.textContent = "";
  searchInput.value = "";
  searchInput.focus();
  searchCancelButton.style.display = "none"; // Ocultar el botón al limpiar el input
}

// Seleccionar todas las teclas
const keys = document.querySelectorAll(".key");

// Agregar evento de click a cada tecla
/*keys.forEach(key => {
  key.addEventListener("click", () => {
    // Alternar la clase 'active' para cambiar el color
    key.classList.toggle("active");
  });
});*/


// -------------------- CLEAR BUTTON -------------------- //
const clearButton = document.getElementById('clearButton');

// Función para resetear todas las teclas
clearButton.addEventListener("click", () => {
  clearButtonEvent();
});

function clearButtonEvent() {
  const activeKeys = document.querySelectorAll(".key.active");
  activeKeys.forEach(key => {
    key.classList.remove("active");
  });
  playingAudios = [];
  pressedKeysNumber = [];
  pressedKeys = [];
  element_chord_display_detail.textContent = '';
  element_chord_display_detail_match.textContent = '';
  element_chord_display_copy_container.classList.add("noChord");
  element_savedChord_noSpace.classList.remove("active");
}

// ----------- row-piano-top-buttons ------------ //

// Selecciona los botones
const sharpButton = document.getElementById('sharpButton');
const flatButton = document.getElementById('flatButton');
const rptbMute = document.getElementById('rptb-mute');
const rptbPlayChord = document.getElementById('rptb-playChord');
const rptbBlackKeyLabelButton = document.getElementById('rptb-blackKeyLabelButton');
const copyChordButton = document.getElementById('rptb-copy');

let sfmode = 1; // 1 es # y 2 es b
let blackKeyLabelsOn = false;
let chordFinderIsMute = false;

// Función para manejar el estado activo
function toggleActiveButton(activeButton, inactiveButton) {
  activeButton.classList.add('active'); // Activa el botón presionado
  inactiveButton.classList.remove('active'); // Desactiva el otro botón
}

// Añadir eventos de clic
sharpButton.addEventListener('click', () => {
  sharpButtonEvent();
});

flatButton.addEventListener('click', () => {
  flatButtonEvent();
});

function sharpButtonEvent() {
  toggleActiveButton(sharpButton, flatButton);
  //console.log('El usuario seleccionó #');
  sfmode = 1;
  if (!element_chord_display.classList.contains("noChord")) updateChord(pressedKeysNumber);
  updateBlackKeyLabels();
}

function flatButtonEvent(){
  toggleActiveButton(flatButton, sharpButton);
  //console.log('El usuario seleccionó b');
  sfmode = 2;
  if (!element_chord_display.classList.contains("noChord")) updateChord(pressedKeysNumber);
  updateBlackKeyLabels();
}

rptbBlackKeyLabelButton.addEventListener('click', () => {
  if (!blackKeyLabelsOn) {
    rptbBlackKeyLabelButton.classList.add('active'); // Activa el botón presionado
    blackKeyLabelsOn = true;
  } else {
    rptbBlackKeyLabelButton.classList.remove('active'); // Activa el botón presionado
    blackKeyLabelsOn = false;
  }
  updateBlackKeyLabels();
});

function updateBlackKeyLabels() {
  if (blackKeyLabelsOn) {
    if (sfmode == 1) {
      document.getElementById('bk-c#3').textContent = getTranslatedTextNote("chord-C#");
      document.getElementById('bk-d#3').textContent = getTranslatedTextNote("chord-D#");
      document.getElementById('bk-f#3').textContent = getTranslatedTextNote("chord-F#");
      document.getElementById('bk-g#3').textContent = getTranslatedTextNote("chord-G#");
      document.getElementById('bk-a#3').textContent = getTranslatedTextNote("chord-A#");
      document.getElementById('bk-c#4').textContent = getTranslatedTextNote("chord-C#");
      document.getElementById('bk-d#4').textContent = getTranslatedTextNote("chord-D#");
      document.getElementById('bk-f#4').textContent = getTranslatedTextNote("chord-F#");
      document.getElementById('bk-g#4').textContent = getTranslatedTextNote("chord-G#");
      document.getElementById('bk-a#4').textContent = getTranslatedTextNote("chord-A#");
    }
    else {
      document.getElementById('bk-c#3').textContent = getTranslatedTextNote("chord-Db");
      document.getElementById('bk-d#3').textContent = getTranslatedTextNote("chord-Eb");
      document.getElementById('bk-f#3').textContent = getTranslatedTextNote("chord-Gb");
      document.getElementById('bk-g#3').textContent = getTranslatedTextNote("chord-Ab");
      document.getElementById('bk-a#3').textContent = getTranslatedTextNote("chord-Bb");
      document.getElementById('bk-c#4').textContent = getTranslatedTextNote("chord-Db");
      document.getElementById('bk-d#4').textContent = getTranslatedTextNote("chord-Eb");
      document.getElementById('bk-f#4').textContent = getTranslatedTextNote("chord-Gb");
      document.getElementById('bk-g#4').textContent = getTranslatedTextNote("chord-Ab");
      document.getElementById('bk-a#4').textContent = getTranslatedTextNote("chord-Bb");
    }
  } else {
    document.getElementById('bk-c#3').textContent = '';
    document.getElementById('bk-d#3').textContent = '';
    document.getElementById('bk-f#3').textContent = '';
    document.getElementById('bk-g#3').textContent = '';
    document.getElementById('bk-a#3').textContent = '';
    document.getElementById('bk-c#4').textContent = '';
    document.getElementById('bk-d#4').textContent = '';
    document.getElementById('bk-f#4').textContent = '';
    document.getElementById('bk-g#4').textContent = '';
    document.getElementById('bk-a#4').textContent = '';    
  }
}

copyChordButton.addEventListener('click', () => {
  copyChord();
});

function copyChord(){
  navigator.clipboard.writeText(element_chord_display.textContent);
  element_tooltip_copy_span.textContent = getTranslatedText("copyToClipboardCopied"); // Chord copied!
}

function resetCopyButtonText(){
  element_tooltip_copy_span.textContent = getTranslatedText("copyToClipboardInit"); // Copy to clipboard
}

// ----------------- CHORD FINDER LOGIC ----------------- //

// Array de notas principales para los acordes
const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

let pressedKeys = []; // Una lista como ['B1', 'F2', 'D2']
let pressedKeysNumber = []; // Una lista como [1, 6, 8]
let pressedKeysNumberAll = []; // Una lista igual a pressedKeysNumber pero no resta 12

// Función para buscar en megaList
function getChordText(list, array) {
  // Convertimos los arrays en strings para poder compararlos
  const arrayString = JSON.stringify(array.sort((a, b) => a - b)); // Aseguramos que esté ordenado
  for (const key in list) {
    const valueString = JSON.stringify(list[key].sort((a, b) => a - b)); // Ordenamos también
    if (arrayString === valueString) {
      element_chord_display.classList.remove('unrecognized');
      return key; // Retorna la clave si hay coincidencia
    }
  }
  element_chord_display.classList.add('unrecognized');
  return getTranslatedText("UnrecognizedChord"); // Retorna null si no hay coincidencias
}

//
function transformChordbysf(chord) { // 
  const replacements = {
    'C#': 'Db',
    'D#': 'Eb',
    'F#': 'Gb',
    'G#': 'Ab',
    'A#': 'Bb',    
  }

  // Recorremos las claves de replacements y reemplazamos cada coincidencia
  let finalChord = chord;
  Object.keys(replacements).forEach(original => {
    const replacement = replacements[original];
    finalChord = finalChord.replace(new RegExp(original, 'g'), replacement);
  });

  return finalChord;
}

// Función para detectar el acorde
function detectChord(pressed) {
  // Buscar si las notas presionadas coinciden con algún acorde
  for (let chord in chords) {
    let chordNotes = chords[chord];
    let match = chordNotes.every(note => pressed.includes(note));
    
    if (match) {
      return chord;
    }
  }
  return 'Ninguno'; // Si no hay coincidencia
}

// Añadir evento a las teclas
//const keys = document.querySelectorAll('.key');
keys.forEach(key => {  
  key.addEventListener('click', (event) => {
    //key.classList.toggle("active");
    const note = event.currentTarget.getAttribute('data-note');
    element_chord_display_detail_match.textContent = "";
    element_chord_display_detail.textContent = "";
    pressKeyEvent(note);
  });
});

function pressKeyEvent(note) {
  
  const element_key_pressed = document.querySelector(`[data-note="${note}"]`);
  element_key_pressed.classList.toggle("active");

  if (!pressedKeys.includes(note)) { // Si la tecla que el usuario apretó no estaba presionada ya...
    pressedKeys.push(note); // Agrega la nota al vector
    if (!chordFinderIsMute) {
      playSound(note);
    }
  } else { // Si la tecla ya estaba presionada, entonces la saca del vector
    pressedKeys = pressedKeys.filter(n => n !== note);   
  }

  // Convertimos las notas a números
  pressedKeysNumber = pressedKeys.map(note => noteToNumberMap[note]); 

  // Ordenamos el array de menor a mayor
  pressedKeysNumber.sort((a, b) => a - b);

  pressedKeysNumberAll = [...pressedKeysNumber]; // La variable All no tiene que restar 12

  if (pressedKeysNumber[0] > 12) {
    for (let i=0; i<= pressedKeysNumber.length-1; i++) {
      pressedKeysNumber[i] -= 12;
    }
  } else {
    for (let i=1; i <= pressedKeysNumber.length-1; i++) {
      if (pressedKeysNumber[i]-12 >= pressedKeysNumber[0]) {
        pressedKeysNumber[i] -= 12;
      }
    }
  }

  // el ...new Set() elimina los elementos duplicados de un array
  pressedKeysNumber = [...new Set(pressedKeysNumber)];

  if (pressedKeysNumber.length >= 3) { // Si presionó al menos 3 teclas...  
    updateChord(pressedKeysNumber);
  } else {
    if (pressedKeysNumber.length == 2) {
      if (JSON.stringify(pressedKeysNumber) == JSON.stringify([1, 8]) || JSON.stringify(pressedKeysNumber) == JSON.stringify([2, 9]) ||
          JSON.stringify(pressedKeysNumber) == JSON.stringify([3, 10]) || JSON.stringify(pressedKeysNumber) == JSON.stringify([4, 11]) ||
          JSON.stringify(pressedKeysNumber) == JSON.stringify([5, 12]) || JSON.stringify(pressedKeysNumber) == JSON.stringify([6, 13]) ||
          JSON.stringify(pressedKeysNumber) == JSON.stringify([7, 14]) || JSON.stringify(pressedKeysNumber) == JSON.stringify([8, 15]) ||
          JSON.stringify(pressedKeysNumber) == JSON.stringify([9, 16]) || JSON.stringify(pressedKeysNumber) == JSON.stringify([10, 17]) ||
          JSON.stringify(pressedKeysNumber) == JSON.stringify([11, 18]) || JSON.stringify(pressedKeysNumber) == JSON.stringify([12, 19])
      ) {
        updateChord(pressedKeysNumber);
      } else {
        element_chord_display.classList.add('noChord');
        element_chord_display.textContent = getTranslatedText("nochord");
        element_chord_display_copy_container.classList.add("noChord");
      }
    }
    else {
      element_chord_display.classList.add('noChord');
      element_chord_display.textContent = getTranslatedText("nochord");
      element_chord_display_copy_container.classList.add("noChord");      
    }
  }  
}

function updateChord(pressedKeysNumberArray) {
  //console.log(pressedKeysNumberArray);

  element_chord_display.classList.remove('noChord'); // Activa el botón presionado
  element_chord_display.classList.remove('unrecognized'); // Activa el botón presionado
  //inactiveButton.classList.remove('active'); // Desactiva el otro botón

  let chordText = getChordText(fullChordList, pressedKeysNumberArray);

  // Si se encontró el acorde...
  if (!element_chord_display.classList.contains('unrecognized')) {
    if (sfmode == 2 && chordText != null) {
      chordText = transformChordbysf(chordText);
    }
  
    let translatedChordText = translateChord(chordText);
  
    element_chord_display.textContent = `${translatedChordText}`;
    element_chord_display_copy_container.classList.remove("noChord");
  
    updateChordDetail(translatedChordText);
    //document.getElementById('chordDisplay').textContent = `${chordText}`;
  } else { // Si no se encontró el acorde...
    // Esto hace que se desaparezca el botón para copiar acordes
    element_chord_display_copy_container.classList.add("noChord");

    // Muestra "Unrecognized Chord"
    element_chord_display.textContent = `${chordText}`;
    
  }

}

function updateChordDetail(chord) {
  element_chord_display_detail.textContent = "";
  element_chord_display_detail.style.display = 'block';

  if (chord.includes("dim")) {
    element_chord_display_detail.textContent = getTranslatedText("equivalent") + `${chord.replace("dim", "°")}`;
  } else if (chord.includes("aug")) {
    element_chord_display_detail.textContent = getTranslatedText("equivalent") + `${chord.replace("aug", "+")}`;
  } else if (chord.includes("add2")) {
    element_chord_display_detail.textContent = getTranslatedText("alsoConsider") + `${chord.replace("add2", "add9")}`;
  } else if (chord.includes("add4")) {
    element_chord_display_detail.textContent = getTranslatedText("alsoConsider") + `${chord.replace("add4", "add11")}`;
  } else if (chord.includes("add(b2)")) {
    element_chord_display_detail.textContent = getTranslatedText("alsoConsider") + `${chord.replace("add(b2)", "add(b9)")}`;
  } else if (chord.includes("add(#4)")) {
    element_chord_display_detail.textContent = getTranslatedText("alsoConsider") + `${chord.replace("add(#4)", "add(#11)")}`;
  } else if (chord.includes("m7b5")) {
    element_chord_display_detail.textContent = getTranslatedText("equivalent") + `${chord.replace("m7b5", "ø")}`;
  } 
  else {
    element_chord_display_detail.style.display = 'none';
    element_chord_display_detail.textContent = "";
  }
  
}

function translateChord(chord) {
  const es_replacements = {
    "C": "Do",
    "D": "Re",
    "E": "Mi",
    "F": "Fa",
    "G": "Sol",
    "A": "La",
    "B": "Si",
  };

  const pt_replacements = {
    "C": "Dó",
    "D": "Ré",
    "E": "Mi",
    "F": "Fá",
    "G": "Sol",
    "A": "Lá",
    "B": "Si",
  };

  if (langNotation === 'en') {
    return chord;
  } else if ((langNotation === 'es') || (langNotation === 'pt')) {
    let parts = chord.split("/"); // Dividir si hay inversión

    let replacements = {};
    if (langNotation === 'es') {replacements = es_replacements;}
    if (langNotation === 'pt') {replacements = pt_replacements;}

    function translatePart(part) {
      let match = part.match(/^([A-G])([#b]?)(m?)(.*)$/);
      if (!match) return part; // Si no hay coincidencias, devolver sin cambios 

      let [, baseNote, accidental, minor, rest] = match;

      let translatedNote = replacements[baseNote] || baseNote;
      translatedNote += accidental; // Agregar sostenido o bemol

      // Solo traducir "m" si es un acorde menor (sin interferir con "maj7", "min7", etc.)
      if (minor === "m" && !rest.startsWith("aj") && !rest.startsWith("i")) {
        translatedNote += " menor ";
      } else {
        translatedNote += minor; // Mantener "m" si es parte de otra palabra
      }

      return translatedNote + rest;
    }

    let prefinalChord = parts.map(translatePart).join(" / ");

    let finalChord = prefinalChord;
    finalChord = finalChord.replace("dim", " dim");
    finalChord = finalChord.replace("aug", " aug");
    finalChord = finalChord.replace("sus", " sus");
    finalChord = finalChord.replace("maj", " maj");
    finalChord = finalChord.replace("maj7", "AUXSEVEN");
    finalChord = finalChord.replace("7", " 7");
    finalChord = finalChord.replace("AUXSEVEN", "maj7");
    finalChord = finalChord.replace("6", " 6");
    finalChord = finalChord.replace("( ", "(");
    finalChord = finalChord.replace(" )", ")");
    finalChord = finalChord.replace(")(", ") (");
    finalChord = finalChord.replace("  ", " ");

    return finalChord;
  }
}



// Función para limpiar las teclas presionadas
document.getElementById('clearButton').addEventListener('click', () => {
  pressedKeys = [];
  playingAudios = [];
  element_chord_display.classList.add('noChord'); // Activa el botón presionado
  element_chord_display.textContent = getTranslatedText("nochord");
});

// -------------- SOUND SECTION -------------- //

let playingAudios = [];
let isPlayingSomeAudio = false;
let timeout_chordNotes = [];

rptbPlayChord.addEventListener('click', () => {
  if (!isPlayingSomeAudio) {
    if (pressedKeysNumber.length > 0) {
      playChord(pressedKeys);
    }
  } else { // Significa que ya se estaba reproduciendo un audio y el ícono es un cuadrado
    resetPlayButton(true);
  }
});

rptbMute.addEventListener('click', () => {
  if (!chordFinderIsMute) {
    document.getElementById('rptb-mute-span').textContent = 'volume_off';
    chordFinderIsMute = true;
  } else {
    document.getElementById('rptb-mute-span').textContent = 'volume_up';
    chordFinderIsMute = false;    
  }
});

function playSound(note) {
  //note = note.replace("1", "3");
  //note = note.replace("2", "4");  
  note = note.replace("#", "sharp");
  const audio = new Audio(`../../_assets/sounds/piano-notes/${note}.ogg`); // Ruta al archivo de sonido
  if (playingAudios.length <= 24) {
    playingAudios.push(audio);
  }
  //console.log(playingAudios);
  audio.play();
}

function playChord(NotesToPlay) {
  const notes = [
    "C3", "Csharp3", "D3", "Dsharp3", "E3", "F3", "Fsharp3", "G3", "Gsharp3", "A3", "Asharp3", "B3",
    "C4", "Csharp4", "D4", "Dsharp4", "E4", "F4", "Fsharp4", "G4", "Gsharp4", "A4", "Asharp4", "B4"    
  ];

  document.getElementById('rptb-playChord-span').textContent = 'stop';
  isPlayingSomeAudio = true;

  // Volver a "play" después de 3 segundos
  timeout_playButton = setTimeout(() => {
    resetPlayButton(false);
  }, 3000);

  let sortedNotes = [...NotesToPlay];

  for (let i=0; i < sortedNotes.length; i++) {
    sortedNotes[i] = sortedNotes[i].replace("#", "sharp");
  }

  sortedNotes.sort((a, b) => {
    return notes.indexOf(a) - notes.indexOf(b);
  });

  //console.log(pressedKeys);
  //console.log(sortedNotes);

  // Detiene y limpia los audios actuales
  playingAudios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });

  playingAudios = []; // Vacía la lista

  sortedNotes.forEach((note, index) => {
    timeout_chordNotes[index] = setTimeout(() => {
      playSound(note);
      highlightNote(note);
    }, index * 100);
  });
  
  //const NotesToPlay = [];

  /*for (let i=0; i < pressedKeysNumber.length; i++) {
    NotesToPlay.push(NumberNotes[pressedKeysNumber[i]-1]);
  }
  console.log(`NotesToPlay: ${NotesToPlay}`);

  NotesToPlay.forEach((note, index) => {
    console.log(note);
    console.log(index);    
    setTimeout(() => {
      const audio = new Audio(`../../_assets/sounds/piano-notes/${note}.ogg`);
      audio.play();
    }, index * 350); // 500ms de diferencia entre cada nota  
  });*/
}

function resetPlayButton (byUser) {

    // La variable byUser es un boolean que va a ser verdadero si el usuario fue quien apretó el botón Reset, 
    // Si es false significa que pasaron los 3 segundos en los que el icono de Play era un cuadrado

    // Detener cualquier sonido en reproducción
    if (byUser) {
      playingAudios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    }

    playingAudios = [];

    // Cambiar el ícono de vuelta a "play"
    document.getElementById('rptb-playChord-span').textContent = "play_arrow";
    isPlayingSomeAudio = false;

    // Limpiar timeout para evitar cambios inesperados si ya se detuvo manualmente
    clearTimeout(timeout_playButton);
    timeout_chordNotes.forEach((note, index) => {
      clearTimeout(timeout_chordNotes[index]);
    });
}


function highlightNote(note) {

    // Eliminar cualquier highlight previo en todas las teclas
    /*document.querySelectorAll(".key").forEach(key => {
      key.classList.remove("highlight");
    });*/

    // Buscar la tecla con el data-note correspondiente
    note = note.replaceAll("sharp", "#");
    //console.log(note);
    const key = document.querySelector(`.key[data-note="${note}"]`);

    if (key) {
      key.classList.add("highlight");
      setTimeout(() => {
        key.classList.remove("highlight");
      }, 300);
    }
}



/* ------------------------------------------ */

const savedChords_quantity = 8;

let savedChords = [
  { name: "", notes: [] }, // 1
  { name: "", notes: [] }, // 2
  { name: "", notes: [] }, // 3
  { name: "", notes: [] }, // 4
  { name: "", notes: [] }, // 5
  { name: "", notes: [] }, // 6
  { name: "", notes: [] }, // 7
  { name: "", notes: [] }  // 8
];

const element_saveChord_button = document.getElementById('rptb-saveButton');
const element_savedChord_noSpace = document.getElementById('savedChordsNoSpace');


savedChords = getSavedChordsFromStorage();
initSavedChords();

element_saveChord_button.addEventListener('click', () => {
  let chordNotes = [...pressedKeysNumberAll];

  if (chordNotes.length > 0) {
    if (checkForSpace()) {
      addSavedChord();
    } else {
      noSpaceSavedChordEvent();
    }
  }
});

function getSavedChordsFromStorage() {
  let savedChordsArray = localStorage.getItem("savedChords") || [];

  if (savedChordsArray.length < 1) {
    return [
      { name: "", notes: [] }, // 1
      { name: "", notes: [] }, // 2
      { name: "", notes: [] }, // 3
      { name: "", notes: [] }, // 4
      { name: "", notes: [] }, // 5
      { name: "", notes: [] }, // 6
      { name: "", notes: [] }, // 7
      { name: "", notes: [] }  // 8
    ];
  } else {
    return JSON.parse(savedChordsArray); // Convertir la cadena JSON a un array    
  }
}

function initSavedChords() {
  if (savedChords.length > 0) {
    savedChords.forEach((chord, index) => {
      if (chord.name != "") {
        position = index + 1;

        const element_savedChord = document.getElementById('chordSaved' + position);
        const element_savedChordText = document.getElementById('chordSavedText' + position);

        element_savedChordText.textContent = chord.name;
        element_savedChord.classList.add("active");
      }
    });
  }
}

function checkForSpace(){
  for (let i=0; i < savedChords_quantity; i++) {
    if (savedChords[i].name == "") {
      return true;
    } else if (i == (savedChords_quantity - 1)) {
      return false;
    }
  }
}

function addSavedChord () {
  let chordName = element_chord_display.textContent;
  let chordNotes = [...pressedKeysNumberAll]; // Los puntos suspensivos son para copiar los valores de pressedKeysNumber y no la referencia de la posición de memoria
  let position = 0;

  for (let i=0; i < savedChords_quantity; i++) {
    if (savedChords[i].name == "") {
      position = i + 1;
      break;
    }
  }

  const element_savedChord = document.getElementById('chordSaved' + position);
  const element_savedChordText = document.getElementById('chordSavedText' + position);

  if ((element_chord_display.classList.contains("noChord")) ||
      (element_chord_display.classList.contains("unrecognized"))) {
    chordName = getTranslatedText("savedChordNoText") + " " + position;
  }

  savedChords[position - 1].name = chordName;
  savedChords[position - 1].notes = chordNotes;

  localStorage.setItem("savedChords", JSON.stringify(savedChords)); // Guarda el array correctamente

  element_savedChordText.textContent = chordName;
  element_savedChord.classList.add("active");

  element_savedChord_noSpace.classList.remove("active");
}

function noSpaceSavedChordEvent(){
  element_savedChord_noSpace.classList.add("active");
}

// Play Saved Chords logic

const elements_savedChord_buttons = document.querySelectorAll(".cf-chord-saved");

elements_savedChord_buttons.forEach((button, index) => {
  button.addEventListener("click", (event) => {
    if (button.classList.contains("active")) {
      let notesArray = [];
      notesArray = convertNumbersToNotes(savedChords[index].notes);
      clearButtonEvent();

      notesArray.forEach((note, index) => {
        setTimeout(() => {
          element_chord_display_detail.textContent = '';
          element_chord_display_detail_match.textContent = '';
          pressKeyEvent(note);
          highlightNote(note);
        }, index * 75);
      });
    }
  });
});

// Delete Saved Chords logic

const elements_saveChord_delete_buttons = document.querySelectorAll(".deleteSavedChordButtons");

elements_saveChord_delete_buttons.forEach((button, index) => {
  button.addEventListener("click", (event) => {
    deleteSavedChord(index+1); // Identifica cuál fue presionado 
  });
});

function deleteSavedChord(position) {
  const element_savedChord = document.getElementById('chordSaved' + position);
  const element_savedChordText = document.getElementById('chordSavedText' + position);

  savedChords[position - 1].name = "";
  savedChords[position - 1].notes = [];

  localStorage.setItem("savedChords", JSON.stringify(savedChords)); // Guarda el array correctamente

  element_savedChordText.textContent = "N/A";
  element_savedChord.classList.remove("active");

  element_savedChord_noSpace.classList.remove("active");
}

/* ------------------------------------------ */

function getTranslatedText(key){
  switch (lang) {
    case "en": // english
      if (key == "chordFound") {return "Chord found";}
      if (key == "chordNotFound") {return "Chord not found";}
      if (key == "nochord") {return "Find chords just pressing some keys";}
      if (key == "UnrecognizedChord") {return "Unrecognized Chord";}
      if (key == "equivalent") {return "Equivalent: ";}
      if (key == "alsoConsider") {return "Also Consider: ";}
      if (key == "notesMatch") {return "These notes match with ";}
      if (key == "copyToClipboardInit") {return "Copy to clipboard";}
      if (key == "copyToClipboardCopied") {return "Chord copied!";}
      if (key == "savedChordNoText") {return "Chord";}
      break;
    case "es": // español
      if (key == "chordFound") {return "Acorde encontrado";}
      if (key == "chordNotFound") {return "Acorde no encontrado";}
      if (key == "nochord") {return "Encuentra acordes presionando las teclas";}
      if (key == "UnrecognizedChord") {return "Acorde no encontrado";}
      if (key == "equivalent") {return "Equivalente: ";}      
      if (key == "alsoConsider") {return "Considera también: ";}
      if (key == "notesMatch") {return "Esas notas coinciden con ";}
      if (key == "copyToClipboardInit") {return "Copiar acorde";}
      if (key == "copyToClipboardCopied") {return "¡Acorde copiado!";}
      if (key == "savedChordNoText") {return "Acorde";}

      break;
    case "pt": // português
      if (key == "chordFound") {return "Acorde encontrado";}
      if (key == "chordNotFound") {return "Acorde não encontrado";}
      if (key == "nochord") {return "Encontre acordes pressionando as teclas";}
      if (key == "UnrecognizedChord") {return "Acorde não encontrado";}
      if (key == "equivalent") {return "Equivalente: ";}      
      if (key == "alsoConsider") {return "Considere também: ";}
      if (key == "notesMatch") {return "Essas notas coincidem com ";}
      if (key == "copyToClipboardInit") {return "Copiar acorde";}
      if (key == "copyToClipboardCopied") {return "Acorde copiado!";}
      if (key == "savedChordNoText") {return "Acorde";}
      break;
  }
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