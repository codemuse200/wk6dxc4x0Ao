// ------------- INICIO DEL FOR ALL ------------- 

// Para que las imágenes no se puedan arrastrar
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('dragstart', e => e.preventDefault());
});

// --------------- FIN DEL FOR ALL --------------

const sharpImages = [
  "/_assets/images/keySignatures/ks-0.png", // Sin sostenidos ni bemoles
  "/_assets/images/keySignatures/ks-s1.png", // 1 sostenido
  "/_assets/images/keySignatures/ks-s2.png", // 2 sostenidos
  "/_assets/images/keySignatures/ks-s3.png", // 3 sostenidos
  "/_assets/images/keySignatures/ks-s4.png", // 4 sostenidos
  "/_assets/images/keySignatures/ks-s5.png", // 5 sostenidos
  "/_assets/images/keySignatures/ks-s6.png", // 6 sostenidos
  "/_assets/images/keySignatures/ks-s7.png"  // 7 sostenidos
];

const flatImages = [
  "/_assets/images/keySignatures/ks-0.png", // Sin sostenidos ni bemoles
  "/_assets/images/keySignatures/ks-f1.png", // 1 bemol
  "/_assets/images/keySignatures/ks-f2.png", // 2 bemoles
  "/_assets/images/keySignatures/ks-f3.png", // 3 bemoles
  "/_assets/images/keySignatures/ks-f4.png", // 4 bemoles
  "/_assets/images/keySignatures/ks-f5.png", // 5 bemoles
  "/_assets/images/keySignatures/ks-f6.png", // 6 bemoles
  "/_assets/images/keySignatures/ks-f7.png"  // 7 bemoles
]

const pitches = {
  en: {
    "nothing": ["C", "D", "E", "F", "G", "A", "B"], // C major / A minor
    "1-sharp": ["G", "A", "B", "C", "D", "E", "F#"], // G major / E minor
    "2-sharp": ["D", "E", "F#", "G", "A", "B", "C#"], // D major / B minor
    "3-sharp": ["A", "B", "C#", "D", "E", "F#", "G#"], // A major / F# minor
    "4-sharp": ["E", "F#", "G#", "A", "B", "C#", "D#"], // E major / C# minor
    "5-sharp": ["B", "C#", "D#", "E", "F#", "G#", "A#"], // B major / G# minor
    "6-sharp": ["F#", "G#", "A#", "B", "C#", "D#", "E#"], // F# major / D# minor
    "7-sharp": ["C#", "D#", "E#", "F#", "G#", "A#", "B#"], // C# major / A# minor
    
    "1-flat": ["F", "G", "A", "Bb", "C", "D", "E"], // F major / D minor
    "2-flat": ["Bb", "C", "D", "Eb", "F", "G", "A"], // Bb major / G minor
    "3-flat": ["Eb", "F", "G", "Ab", "Bb", "C", "D"], // Eb major / C minor
    "4-flat": ["Ab", "Bb", "C", "Db", "Eb", "F", "G"], // Ab major / F minor
    "5-flat": ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"], // Db major / Bb minora
    "6-flat": ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"], // Gb major / Eb minor
    "7-flat": ["Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb"]  // Cb major / Ab minor
  },
  es: {
    "nothing": ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"], // Do mayor / La menor
    "1-sharp": ["Sol", "La", "Si", "Do", "Re", "Mi", "Fa#"], // Sol mayor / Mi menor
    "2-sharp": ["Re", "Mi", "Fa#", "Sol", "La", "Si", "Do#"], // Re mayor / Si menor
    "3-sharp": ["La", "Si", "Do#", "Re", "Mi", "Fa#", "Sol#"], // La mayor / Fa# menor
    "4-sharp": ["Mi", "Fa#", "Sol#", "La", "Si", "Do#", "Re#"], // Mi mayor / Do# menor
    "5-sharp": ["Si", "Do#", "Re#", "Mi", "Fa#", "Sol#", "La#"], // Si mayor / Sol# menor
    "6-sharp": ["Fa#", "Sol#", "La#", "Si", "Do#", "Re#", "Mi#"], // Fa# mayor / Re# menor
    "7-sharp": ["Do#", "Re#", "Mi#", "Fa#", "Sol#", "La#", "Si#"], // Do# mayor / La# menor

    "1-flat": ["Fa", "Sol", "La", "Sib", "Do", "Re", "Mi"], // Fa mayor / Re menor
    "2-flat": ["Sib", "Do", "Re", "Mib", "Fa", "Sol", "La"], // Sib mayor / Sol menor
    "3-flat": ["Mib", "Fa", "Sol", "Lab", "Sib", "Do", "Re"], // Mib mayor / Do menor
    "4-flat": ["Lab", "Sib", "Do", "Reb", "Mib", "Fa", "Sol"], // Lab mayor / Fa menor
    "5-flat": ["Reb", "Mib", "Fa", "Solb", "Lab", "Sib", "Do"], // Reb mayor / Sib menor
    "6-flat": ["Solb", "Lab", "Sib", "Dob", "Reb", "Mib", "Fa"], // Solb mayor / Mib menor
    "7-flat": ["Dob", "Reb", "Mib", "Fab", "Solb", "Lab", "Sib"]  // Dob mayor / Lab menor
  },
  pt: {
    "nothing": ["Dó", "Ré", "Mi", "Fá", "Sol", "Lá", "Si"], // Dó mayor / Lá menor
    "1-sharp": ["Sol", "Lá", "Si", "Dó", "Ré", "Mi", "Fá#"], // Sol mayor / Mi menor
    "2-sharp": ["Ré", "Mi", "Fá#", "Sol", "Lá", "Si", "Dó#"], // Ré mayor / Si menor
    "3-sharp": ["Lá", "Si", "Dó#", "Ré", "Mi", "Fá#", "Sol#"], // Lá mayor / Fá# menor
    "4-sharp": ["Mi", "Fá#", "Sol#", "Lá", "Si", "Dó#", "Ré#"], // Mi mayor / Dó# menor
    "5-sharp": ["Si", "Dó#", "Ré#", "Mi", "Fá#", "Sol#", "Lá#"], // Si mayor / Sol# menor
    "6-sharp": ["Fá#", "Sol#", "Lá#", "Si", "Dó#", "Ré#", "Mi#"], // Fá# mayor / Ré# menor
    "7-sharp": ["Dó#", "Ré#", "Mi#", "Fá#", "Sol#", "Lá#", "Si#"], // Dó# mayor / Lá# menor

    "1-flat": ["Fá", "Sol", "Lá", "Sib", "Dó", "Ré", "Mi"], // Fá mayor / Ré menor
    "2-flat": ["Sib", "Dó", "Ré", "Mib", "Fá", "Sol", "Lá"], // Sib mayor / Sol menor
    "3-flat": ["Mib", "Fá", "Sol", "Láb", "Sib", "Dó", "Ré"], // Mib mayor / Dó menor
    "4-flat": ["Láb", "Sib", "Dó", "Réb", "Mib", "Fá", "Sol"], // Láb mayor / Fá menor
    "5-flat": ["Réb", "Mib", "Fá", "Solb", "Láb", "Sib", "Dó"], // Réb mayor / Sib menor
    "6-flat": ["Solb", "Láb", "Sib", "Dób", "Réb", "Mib", "Fá"], // Solb mayor / Mib menor
    "7-flat": ["Dób", "Réb", "Mib", "Fáb", "Solb", "Láb", "Sib"]  // Dób mayor / Láb menor
  }
}

const pitches_en = {
  "nothing": ["C", "D", "E", "F", "G", "A", "B"], // C major / A minor
  "1-sharp": ["G", "A", "B", "C", "D", "E", "F#"], // G major / E minor
  "2-sharp": ["D", "E", "F#", "G", "A", "B", "C#"], // D major / B minor
  "3-sharp": ["A", "B", "C#", "D", "E", "F#", "G#"], // A major / F# minor
  "4-sharp": ["E", "F#", "G#", "A", "B", "C#", "D#"], // E major / C# minor
  "5-sharp": ["B", "C#", "D#", "E", "F#", "G#", "A#"], // B major / G# minor
  "6-sharp": ["F#", "G#", "A#", "B", "C#", "D#", "E#"], // F# major / D# minor
  "7-sharp": ["C#", "D#", "E#", "F#", "G#", "A#", "B#"], // C# major / A# minor
  
  "1-flat": ["F", "G", "A", "Bb", "C", "D", "E"], // F major / D minor
  "2-flat": ["Bb", "C", "D", "Eb", "F", "G", "A"], // Bb major / G minor
  "3-flat": ["Eb", "F", "G", "Ab", "Bb", "C", "D"], // Eb major / C minor
  "4-flat": ["Ab", "Bb", "C", "Db", "Eb", "F", "G"], // Ab major / F minor
  "5-flat": ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"], // Db major / Bb minora
  "6-flat": ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"], // Gb major / Eb minor
  "7-flat": ["Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb"]  // Cb major / Ab minor
};

const pitches_es = {
  "nothing": ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"], // Do mayor / La menor
  "1-sharp": ["Sol", "La", "Si", "Do", "Re", "Mi", "Fa#"], // Sol mayor / Mi menor
  "2-sharp": ["Re", "Mi", "Fa#", "Sol", "La", "Si", "Do#"], // Re mayor / Si menor
  "3-sharp": ["La", "Si", "Do#", "Re", "Mi", "Fa#", "Sol#"], // La mayor / Fa# menor
  "4-sharp": ["Mi", "Fa#", "Sol#", "La", "Si", "Do#", "Re#"], // Mi mayor / Do# menor
  "5-sharp": ["Si", "Do#", "Re#", "Mi", "Fa#", "Sol#", "La#"], // Si mayor / Sol# menor
  "6-sharp": ["Fa#", "Sol#", "La#", "Si", "Do#", "Re#", "Mi#"], // Fa# mayor / Re# menor
  "7-sharp": ["Do#", "Re#", "Mi#", "Fa#", "Sol#", "La#", "Si#"], // Do# mayor / La# menor

  "1-flat": ["Fa", "Sol", "La", "Sib", "Do", "Re", "Mi"], // Fa mayor / Re menor
  "2-flat": ["Sib", "Do", "Re", "Mib", "Fa", "Sol", "La"], // Sib mayor / Sol menor
  "3-flat": ["Mib", "Fa", "Sol", "Lab", "Sib", "Do", "Re"], // Mib mayor / Do menor
  "4-flat": ["Lab", "Sib", "Do", "Reb", "Mib", "Fa", "Sol"], // Lab mayor / Fa menor
  "5-flat": ["Reb", "Mib", "Fa", "Solb", "Lab", "Sib", "Do"], // Reb mayor / Sib menor
  "6-flat": ["Solb", "Lab", "Sib", "Dob", "Reb", "Mib", "Fa"], // Solb mayor / Mib menor
  "7-flat": ["Dob", "Reb", "Mib", "Fab", "Solb", "Lab", "Sib"]  // Dob mayor / Lab menor
};

const pitches_pt = {
  "nothing": ["Dó", "Ré", "Mi", "Fá", "Sol", "Lá", "Si"], // Dó mayor / Lá menor
  "1-sharp": ["Sol", "Lá", "Si", "Dó", "Ré", "Mi", "Fá#"], // Sol mayor / Mi menor
  "2-sharp": ["Ré", "Mi", "Fá#", "Sol", "Lá", "Si", "Dó#"], // Ré mayor / Si menor
  "3-sharp": ["Lá", "Si", "Dó#", "Ré", "Mi", "Fá#", "Sol#"], // Lá mayor / Fá# menor
  "4-sharp": ["Mi", "Fá#", "Sol#", "Lá", "Si", "Dó#", "Ré#"], // Mi mayor / Dó# menor
  "5-sharp": ["Si", "Dó#", "Ré#", "Mi", "Fá#", "Sol#", "Lá#"], // Si mayor / Sol# menor
  "6-sharp": ["Fá#", "Sol#", "Lá#", "Si", "Dó#", "Ré#", "Mi#"], // Fá# mayor / Ré# menor
  "7-sharp": ["Dó#", "Ré#", "Mi#", "Fá#", "Sol#", "Lá#", "Si#"], // Dó# mayor / Lá# menor

  "1-flat": ["Fá", "Sol", "Lá", "Sib", "Dó", "Ré", "Mi"], // Fá mayor / Ré menor
  "2-flat": ["Sib", "Dó", "Ré", "Mib", "Fá", "Sol", "Lá"], // Sib mayor / Sol menor
  "3-flat": ["Mib", "Fá", "Sol", "Láb", "Sib", "Dó", "Ré"], // Mib mayor / Dó menor
  "4-flat": ["Láb", "Sib", "Dó", "Réb", "Mib", "Fá", "Sol"], // Láb mayor / Fá menor
  "5-flat": ["Réb", "Mib", "Fá", "Solb", "Láb", "Sib", "Dó"], // Réb mayor / Sib menor
  "6-flat": ["Solb", "Láb", "Sib", "Dób", "Réb", "Mib", "Fá"], // Solb mayor / Mib menor
  "7-flat": ["Dób", "Réb", "Mib", "Fáb", "Solb", "Láb", "Sib"]  // Dób mayor / Láb menor
};

const pitchesDataNote = {
  "nothing": ["C3", "D3", "E3", "F3", "G3", "A3", "B3"], // C major / A minor

  "1-sharp": ["G3", "A3", "B3", "C4", "D4", "E4", "F#4"], // G major / E minor
  "2-sharp": ["D3", "E3", "F#3", "G3", "A3", "B3", "C#4"], // D major / B minor
  "3-sharp": ["A3", "B3", "C#4", "D4", "E4", "F#4", "G#4"], // A major / F# minor
  "4-sharp": ["E3", "F#3", "G#3", "A3", "B3", "C#4", "D#4"], // E major / C# minor
  "5-sharp": ["B3", "C#4", "D#4", "E4", "F#4", "G#4", "A#4"], // B major / G# minor
  "6-sharp": ["F#3", "G#3", "A#3", "B3", "C#4", "D#4", "F4"], // F# major / D# minor
  "7-sharp": ["C#3", "D#3", "F3", "F#3", "G#3", "A#3", "C4"], // C# major / A# minor
  
  "1-flat": ["F3", "G3", "A3", "A#3", "C4", "D4", "E4"], // F major / D minor
  "2-flat": ["A#3", "C4", "D4", "D#4", "F4", "G4", "A4"], // Bb major / G minor
  "3-flat": ["D#3", "F3", "G3", "G#3", "A#3", "C4", "D4"], // Eb major / C minor
  "4-flat": ["G#3", "A#3", "C4", "C#4", "D#4", "F4", "G4"], // Ab major / F minor
  "5-flat": ["C#3", "D#3", "F3", "F#3", "G#3", "A#3", "C4"], // Db major / Bb minora
  "6-flat": ["F#3", "G#3", "A#3", "B3", "C#4", "D#4", "F4"], // Gb major / Eb minor
  "7-flat": ["B3", "C#3", "D#3", "E3", "F#3", "G#3", "A#3"]  // Cb major / Ab minor
};

const keySignaturesOptions = {
  "nothing": "C Major / A Minor",

  "1-sharp": "G Major / E Minor",
  "2-sharp": "D Major / B Minor",
  "3-sharp": "A Major / F# Minor",
  "4-sharp": "E Major / C# Minor",
  "5-sharp": "B Major / G# Minor",
  "6-sharp": "F# Major / D# Minor",
  "7-sharp": "C# Major / A# Minor",

  "1-flat": "F Major / D minor",
  "2-flat": "Bb Major / G minor",
  "3-flat": "Eb Major / C minor",
  "4-flat": "Ab Major / F minor",
  "5-flat": "Db Major / Bb minor",
  "6-flat": "Gb Major / Eb minor",
  "7-flat": "Cb Major / Ab minor",
}

const keySignaturesOptions_en = {
  "nothing": "C<-->A",

  "1-sharp": "G<-->E",
  "2-sharp": "D<-->B",
  "3-sharp": "A<-->F#",
  "4-sharp": "E<-->C#",
  "5-sharp": "B<-->G#",
  "6-sharp": "F#<-->D#",
  "7-sharp": "C#<-->A#",

  "1-flat": "F<-->D",
  "2-flat": "Bb<-->G",
  "3-flat": "Eb<-->C",
  "4-flat": "Ab<-->F",
  "5-flat": "Db<-->Bb",
  "6-flat": "Gb<-->Eb",
  "7-flat": "Cb<-->Ab",
}

const keySignaturesOptions_es = {
  "nothing": "Do<-->La",

  "1-sharp": "Sol<-->Mi",
  "2-sharp": "Re<-->Si",
  "3-sharp": "La<-->Fa#",
  "4-sharp": "Mi<-->Do#",
  "5-sharp": "Si<-->Sol#",
  "6-sharp": "Fa#<-->Re#",
  "7-sharp": "Do#<-->La#",

  "1-flat": "Fa<-->Re",
  "2-flat": "Sib<-->Sol",
  "3-flat": "Mib<-->Do",
  "4-flat": "Lab<-->Fa",
  "5-flat": "Reb<-->Sib",
  "6-flat": "Solb<-->Mib",
  "7-flat": "Dob<-->Lab",
}

const keySignaturesOptions_pt = {
  "nothing": "Dó<-->Lá",

  "1-sharp": "Sol<-->Mi",
  "2-sharp": "Ré<-->Si",
  "3-sharp": "Lá<-->Fá#",
  "4-sharp": "Mi<-->Dó#",
  "5-sharp": "Si<-->Sol#",
  "6-sharp": "Fá#<-->Ré#",
  "7-sharp": "Dó#<-->Lá#",

  "1-flat": "Fá<-->Ré",
  "2-flat": "Sib<-->Sol",
  "3-flat": "Mib<-->Dó",
  "4-flat": "Láb<-->Fá",
  "5-flat": "Réb<-->Sib",
  "6-flat": "Solb<-->Mib",
  "7-flat": "Dób<-->Láb",
}

let currentMode = "sharp"; // Modo inicial 
let keyState = "nothing";
let currentIndex = "0";

const imageElement = document.getElementById("key-signature");
const removeButton = document.getElementById("removeAccidentalButton");
const addButton = document.getElementById("addAccidentalButton");
const keySelector = document.getElementById("keySelector");
const sharpButton = document.getElementById("sharpButton");
const flatButton = document.getElementById("flatButton");

const element_selectorMain = document.querySelector(".cst-selector-main");
const element_selectorDropdown = document.querySelector(".cst-selector-dropdown");
const element_selectorBox = document.querySelector(".cst-mainBox");
const element_selectorBox_text = document.querySelector(".cst-mainBox-text");
const element_selectorOptions = document.querySelectorAll(".cst-option");

const element_txtAccidentals = document.getElementById("txtAccidentals");
const element_pitchesNotes = document.getElementById("pitchesNotes");

const element_relative_major_chord = document.getElementById('cmrRelativeMajor');
const element_relative_minor_chord = document.getElementById('cmrRelativeMinor');

let accidentalCounter = 0;

let globalSelectedID = "cstCAm";
let globalSelectedIDForTexts = "cstCAm"; // Tuve que crear esta variable porque la otra se usa para otra cosa
let globalMode = "sharp";

function updateImage() {
  const images = currentMode === "sharp" ? sharpImages : flatImages;
  imageElement.src = images[currentIndex];
  /*keySelector.value = `${currentMode}-${currentIndex}`;*/
}

function switchMode(newMode) {
  //if (newMode !== currentMode) {
    currentMode = newMode;
    sharpButton.classList.toggle("active", newMode === "sharp");
    flatButton.classList.toggle("active", newMode === "flat");
    if (newMode == "sharp") {
      removeButton.textContent = getTranslatedText("remove-s");
      addButton.textContent = getTranslatedText("add-s");
    } else {
      removeButton.textContent = getTranslatedText("remove-f");
      addButton.textContent = getTranslatedText("add-f");      
    }
    globalMode = newMode;
    //removeButton.textContent = `Quitar ${newMode === "sharp" ? "Sostenido" : "Bemol"}`;
    //addButton.textContent = `Agregar ${newMode === "sharp" ? "Sostenido" : "Bemol"}`;
    updateImage();
    updateAccidentalText();
    highlightMiniPiano();
    setTimeout(() => {
      updateRelativePianos();
    }, 100);
//  }
}

const element_container_main_body = document.getElementById('containerMainBody');

element_container_main_body.addEventListener("click", () => {
  element_selectorDropdown.style.display = "none";
});

element_selectorMain.addEventListener("click", (event) => {
  event.stopPropagation();
});

element_selectorBox.addEventListener("click", (event) => {
  event.stopPropagation(); // Detener la propagación del clic, esta linea sirve para que no se active el listener del document.body

  if (element_selectorDropdown.style.display == "none") {
    element_selectorDropdown.style.display = "flex";
  } else {
    element_selectorDropdown.style.display = "none";
  }
});

element_selectorOptions.forEach(option => {  
  option.addEventListener('click', (event) => {
    event.stopPropagation(); // Detener la propagación del clic, esta linea sirve para que no se active el listener del document.body
    
    let value = event.currentTarget.getAttribute('value');
    const [mode, index] = value.split("-");

    const selectedOption = document.querySelectorAll(".cst-option.selected");
    selectedOption.forEach(key => {
      key.classList.remove("selected");
    });
    event.currentTarget.classList.add("selected");

    currentIndex = parseInt(index, 10);
    switchMode(mode); // Cambia al modo correcto
    globalMode = mode;
    updateImage(); // Actualiza la imagen y sincroniza todo
  
    if (index != 0) {
      keyState = index + "-" + mode;
    } else {
      keyState = "nothing";
    }

    //console.log(event.currentTarget.id);
    globalSelectedID = event.currentTarget.id;
    globalSelectedIDForTexts = event.currentTarget.id;

    setSelectorBoxText(keyState, event.currentTarget.id);

    updateRelativePianos();
    
    //element_selectorBox_text.textContent = keySignaturesOptions_en[keyState];

    //console.log(keyState);
    accidentalCounter = index;
    updateAccidentalText();
    highlightMiniPiano();

    element_selectorDropdown.style.display = "none";
  });
});

function setSelectorBoxText(keyState, id) {
  let newTextContent = "";
  let txtMajor = "";
  let txtMinor = "";

  if (lang == "en") {
    txtMajor = "major";
    txtMinor = "minor";
  } else if (lang == "es") {
    txtMajor = "mayor";
    txtMinor = "menor";
  } else if (lang == "pt") {
    txtMajor = "maior";
    txtMinor = "menor";
  } 

  if (langNotation == "en") {
    newTextContent = keySignaturesOptions_en[keyState];
  } else if (langNotation == "es") {
    newTextContent = keySignaturesOptions_es[keyState];
  } else if (langNotation == "pt") {
    newTextContent = keySignaturesOptions_pt[keyState];
  }
// C<-->A
  newTextContent = newTextContent.replace("<-->", " " + txtMajor + " / ") + " " + txtMinor;
  element_selectorBox_text.textContent = newTextContent;
  //console.log(id);
  
  element_selectorBox_text.dataset.valueid = id;

}

sharpButton.addEventListener("click", () => switchMode("sharp"));
flatButton.addEventListener("click", () => switchMode("flat"));

removeButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    accidentalCounter--;
    updateAccidentalText();
    updateImage();
    highlightMiniPiano();
    updateRelativePianos();
    updateCmtTexts();
  } else {
    // Aseguramos que al llegar al índice 0 se muestre correctamente "Do Mayor / La Menor"
    //keySelector.value = "sharp-0";
  }
});

addButton.addEventListener("click", () => {
  const maxIndex = currentMode === "sharp" ? sharpImages.length - 1 : flatImages.length - 1;
  if (currentIndex < maxIndex) {
    currentIndex++;
    accidentalCounter++;
    updateAccidentalText();
    updateImage();
    highlightMiniPiano();
    updateRelativePianos();
  }
});

function updateAccidentalText() {
  let accidentals = {
    en: {
      s_singular: "sharp",
      s_plural: "sharps",
      f_singular: "flat",
      f_plural: "flats"
    },
    es: {
      s_singular: "sostenido",
      s_plural: "sostenidos",
      f_singular: "bemol",
      f_plural: "bemoles"
    },
    pt: {
      s_singular: "sustenido",
      s_plural: "sustenidos",
      f_singular: "bemol",
      f_plural: "bemóis"
    },
  };

  if (accidentalCounter == 0) {
    element_txtAccidentals.textContent = getTranslatedText("noSnoF");
    keyState = "nothing";
  } else {
    if (sharpButton.classList.contains('active')) { // Si estamos en Sharp Mode...
      if (accidentalCounter == 1) {
        element_txtAccidentals.textContent = `${accidentalCounter} ${accidentals[lang]["s_singular"]}`;
        keyState = accidentalCounter + "-sharp";
      } else {
        element_txtAccidentals.textContent = `${accidentalCounter} ${accidentals[lang]["s_plural"]}`;
        keyState = accidentalCounter + "-sharp";
      }
    } else { // Si estamos en Flat mode...
      if (accidentalCounter == 1) {
        element_txtAccidentals.textContent = `${accidentalCounter} ${accidentals[lang]["f_singular"]}`;
        keyState = accidentalCounter + "-flat";
      } else {
        element_txtAccidentals.textContent = `${accidentalCounter} ${accidentals[lang]["f_plural"]}`;
        keyState = accidentalCounter + "-flat";
      }
    }
  }

  const selectedOption = document.querySelectorAll(".cst-option.selected");
  selectedOption.forEach(key => {
    key.classList.remove("selected");
  });
  
  if (keyState != "nothing") {
    const [index, mode] = keyState.split("-");
    let invertedKeyState = mode + "-" + index;

    document.querySelector(`.cst-option[value="${invertedKeyState}"]`).classList.add("selected");
  } else {
    document.querySelector(`.cst-option[value="sharp-0"]`).classList.add("selected");
  }

  globalSelectedIDForTexts = keySignaturesOptions_en[keyState].replace('<-->', '');
  globalSelectedIDForTexts = globalSelectedIDForTexts.replace('#', 's');
  globalSelectedIDForTexts = globalSelectedIDForTexts + 'm';
  
  setSelectorBoxText(keyState, globalSelectedID);
  //element_selectorBox_text.textContent = keySignaturesOptions_en[keyState];

  updatePitches();
  setTimeout(() => {
    updateCmtTexts();
  }, 100);

}

function updatePitches(){
  let notes = pitches[langNotation][keyState];  
  let formattedNotes = notes.slice(0, -1).join(", ") + getTranslatedText("and") + notes[notes.length - 1];  
  element_pitchesNotes.textContent = formattedNotes;
}

highlightMiniPiano(); // Esto es para que al abrir la página se pinte la escala de C major

function highlightMiniPiano() {
  const activeKeys = document.querySelectorAll(".key.active");
  activeKeys.forEach(key => {
    key.classList.remove("active");
  });

  pitchesDataNote[keyState].forEach(element => {
    const element_key_tobe_highlight = document.querySelector(`.key[data-note="${element}"]`);

    element_key_tobe_highlight.classList.add('active');
 });  
}

function updateRelativePianos() {
  let keySignatureString = element_selectorBox_text.textContent;
  let majorChord = keySignatureString.split(" / ")[0];
  let minorChord = keySignatureString.split(" / ")[1];

  switch (lang) {
    case "en": 
      element_relative_major_chord.textContent = majorChord + " chord";
      element_relative_minor_chord.textContent = minorChord + " chord";
      break;
    case "es": 
      element_relative_major_chord.textContent = "Acorde de " + majorChord;
      element_relative_minor_chord.textContent = "Acorde de " + minorChord;
      break;
    case "pt": 
      element_relative_major_chord.textContent = "Acorde de " + majorChord;
      element_relative_minor_chord.textContent = "Acorde de " + minorChord;
      break;
  }

  highlightRelativePiano(majorChord.split(" ")[0], "major");
  highlightRelativePiano(minorChord.split(" ")[0], "minor");
}

function highlightRelativePiano(chord, majorOrMinor) {
  let convertedChord = chord;

  convertedChord = convertedChord.replace("á", "a");
  convertedChord = convertedChord.replace("é", "e");
  convertedChord = convertedChord.replace("í", "i");
  convertedChord = convertedChord.replace("ó", "o");
  convertedChord = convertedChord.replace("ú", "u");

  convertedChord = convertedChord.replace("Do", "C");
  convertedChord = convertedChord.replace("Re", "D");
  convertedChord = convertedChord.replace("Mi", "E");
  convertedChord = convertedChord.replace("Fa", "F");
  convertedChord = convertedChord.replace("Sol", "G");
  convertedChord = convertedChord.replace("La", "A");
  convertedChord = convertedChord.replace("Si", "B");

  convertedChord = convertedChord.replace("Cb", "B");
  convertedChord = convertedChord.replace("Db", "Cs");
  convertedChord = convertedChord.replace("Eb", "Ds");
  convertedChord = convertedChord.replace("Fb", "E");
  convertedChord = convertedChord.replace("Gb", "Fs");
  convertedChord = convertedChord.replace("Ab", "Gs");
  convertedChord = convertedChord.replace("Bb", "As");

  convertedChord = convertedChord.replace("E#", "F");
  convertedChord = convertedChord.replace("B#", "C");

  convertedChord = convertedChord.replace("#", "s");

  if (majorOrMinor === "minor") {
    convertedChord = convertedChord + "m";
  }

  let pianoChords = {
    C: ["C3", "E3", "G3"],
    D: ["D3", "F#3", "A3"],
    E: ["E3", "G#3", "B3"],
    F: ["F3", "A3", "C4"],
    G: ["G3", "B3", "D4"],
    A: ["A3", "C#4", "E4"],
    B: ["B3", "D#4", "F#4"],

    Cs: ["C#3", "F3", "G#3"],
    Ds: ["D#3", "G3", "A#3"],
    Fs: ["F#3", "A#3", "C#4"],
    Gs: ["G#3", "C4", "D#4"],
    As: ["A#3", "D4", "F4"],

    Cm: ["C3", "D#3", "G3"],
    Dm: ["D3", "F3", "A3"],
    Em: ["E3", "G3", "B3"],
    Fm: ["F3", "G#3", "C4"],
    Gm: ["G3", "A#3", "D4"],
    Am: ["A3", "C4", "E4"],
    Bm: ["B3", "D4", "F#4"],

    Csm: ["C#3", "E3", "G#3"],
    Dsm: ["D#3", "F#3", "A#3"],
    Fsm: ["F#3", "A3", "C#4"],
    Gsm: ["G#3", "B3", "D#4"],
    Asm: ["A#3", "C#4", "F4"],
  }


  let listOfKeys = [];
  listOfKeys = document.querySelectorAll('.cmr-relative-piano.' + majorOrMinor + ' .key');

  listOfKeys.forEach(key => {
    key.classList.remove('active');
  });
/*
  if (pianoChords.hasOwnProperty(convertedChord)) {
    console.log("Notas para el acorde", convertedChord, ":", pianoChords[convertedChord]);
  } else {
    console.log("No existe el acorde", convertedChord);
  }*/


  let tempList = [...pianoChords[convertedChord]]; // Hacemos una copia si no querés modificar el original

  requestAnimationFrame(() => {  // Forzar la actualización visual
    for (const key of listOfKeys) {
      if (tempList.length === 0) break;
      if (key.dataset.note === tempList[0]) {
        key.classList.add('active');
        tempList.shift();
      }
    }
  });
}

// ------------- Sistema para que suenen las teclas al hacer click ------------ //

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


function getTranslatedText(key){
  switch (lang) {
    case "en": // english
      if (key == "add-s") {return "Add Sharp";}
      if (key == "add-f") {return "Add Flat";}
      if (key == "remove-s") {return "Remove Sharp";}
      if (key == "remove-f") {return "Remove Flat";}
      if (key == "and") {return " and ";}
      if (key == "noSnoF") {return "No sharps or flats";}
      break;
    case "es": // español
      if (key == "and") {return " y ";}
      if (key == "add-s") {return "Agregar Sostenido";}
      if (key == "add-f") {return "Agregar Bemol";}
      if (key == "remove-s") {return "Quitar Sostenido";}
      if (key == "remove-f") {return "Quitar Bemol";}
      if (key == "noSnoF") {return "Sin sostenidos ni bemoles";}
      break;
    case "pt": // português
      if (key == "and") {return " e ";}
      if (key == "add-s") {return "Adicionar Sustenido";}
      if (key == "add-f") {return "Adicionar Bemol";}
      if (key == "remove-s") {return "Remover Sustenido";}
      if (key == "remove-f") {return "Remover Bemol";}
      if (key == "noSnoF") {return "Sem sustenidos ou bemóis";}
      break;
  }
}
