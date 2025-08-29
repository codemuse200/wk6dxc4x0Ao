// Selecciona todas las teclas del piano
const keys = document.querySelectorAll(".key");

// Mapeo de teclas del teclado físico a las notas del piano
const keyMapping = {
  z: "C3", // La tecla "Z" toca C3
  x: "D3", // La tecla "X" toca D3
  c: "E3", // La tecla "C" toca E3
  v: "F3", // La tecla "V" toca F3
  b: "G3", // La tecla "B" toca G3
  n: "A3", // La tecla "N" toca A3
  m: "B3", // La tecla "M" toca B3

  s: "C#3", // La tecla "S" toca C#3
  d: "D#3", // La tecla "D" toca D#3
  g: "F#3", // La tecla "G" toca F#3
  h: "G#3", // La tecla "H" toca G#3
  j: "A#3", // La tecla "J" toca A#3

  q: "C4", // La tecla "A" toca C4
  w: "D4", // La tecla "S" toca D4
  e: "E4", // La tecla "D" toca E4
  r: "F4", // La tecla "F" toca F4
  t: "G4", // La tecla "G" toca G4
  y: "A4", // La tecla "H" toca A4
  u: "B4", // La tecla "J" toca B4

  2: "C#4", // La tecla "S" toca C#4
  3: "D#4", // La tecla "D" toca D#4
  5: "F#4", // La tecla "G" toca F#4
  6: "G#4", // La tecla "H" toca G#4
  7: "A#4", // La tecla "J" toca A#4
};



document.addEventListener("touchstart", () => {
  const dummyAudio = new Audio();
  dummyAudio.play().catch(() => {
    // no importa si falla, lo importante es que el usuario tocó algo
  });
}, { once: true });


// ----------------- Detección del piano con el mouse --------------- //

let mouseDown = false;

document.addEventListener("mousedown", () => {
  mouseDown = true;
});

document.addEventListener("mouseup", () => {
  mouseDown = false;
});

keys.forEach(key => {
      // Al presionar el mouse, reproducir el sonido y encender la tecla
  key.addEventListener("mousedown", () => {
    key.classList.add("active");
    const note = key.dataset.note; // Obtén el atributo data-note
    let actualNote = note.replace("#", "sharp");
    playNote(actualNote); // Llama a la función para reproducir la nota
  });

  // Al soltar el mouse, apagar la tecla
  key.addEventListener("mouseup", () => {
    key.classList.remove("active");
  });

  // Si el mouse sale de la tecla sin soltar el botón, apagar la tecla
  key.addEventListener("mouseleave", () => {
    key.classList.remove("active");
  });

  // Esta es la clave para el arrastre
  key.addEventListener("mousemove", () => {
    if (mouseDown) {
      if (!key.classList.contains("active")) {
        key.classList.add("active");
        const note = key.dataset.note;
        const actualNote = note.replace("#", "sharp");
        playNote(actualNote);
      }
    }
  });
});



// ---------------- Sistema para detectar si el usuario presiona el piano con touch ---------------- //

let currentKeyTouched = null;

keys.forEach(key => {
  key.addEventListener("touchstart", (e) => {
    e.preventDefault();
    const note = key.dataset.note;
    const actualNote = note.replace("#", "sharp");
    playNote(actualNote);
    console.log(actualNote);
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
    const note = elem.dataset.note;
    const actualNote = note.replace("#", "sharp");
    playNote(actualNote);
    console.log(actualNote);
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

// Función para reproducir una nota
function playNote(note) {
  if (navigator.userActivation.isActive) {
    const audio = new Audio(`_assets/sounds/piano-notes/${note}.ogg`); // Ruta del archivo de sonido
    audio.play(); // Reproduce el sonido
  }
}

// Detectar cuando se presiona una tecla del teclado físico
document.addEventListener("keydown", (event) => {
    const note = keyMapping[event.key.toLowerCase()]; // Obtener la nota asociada a la tecla
    if (note) {
      let actualNote = note.replace("#", "sharp");
      const keyElement = document.querySelector(`.key[data-note="${note}"]`);
      if (keyElement && !keyElement.classList.contains("active")) {
          playNote(actualNote); // Reproducir la nota
          keyElement.classList.add("active"); // Encender la tecla visualmente
      }
    }
});

// Detectar cuando se suelta una tecla del teclado físico
document.addEventListener("keyup", (event) => {
    const note = keyMapping[event.key.toLowerCase()];
    if (note) {
    const keyElement = document.querySelector(`.key[data-note="${note}"]`);
    if (keyElement) {
        keyElement.classList.remove("active"); // Apagar la tecla visualmente
    }
    }
});

const tools = document.querySelectorAll(".tool");
const textDescription = document.querySelector('.text-tool-description');

tools.forEach(tool => {
  tool.addEventListener("mouseenter", () => {
    const description = getTranslatedDescription(tool.getAttribute('data-descriptionKey'));
    textDescription.textContent = description; // Cambia el texto dinámicamente
    textDescription.style.display = 'block'; // Muestra el texto
  });

  tool.addEventListener("mouseleave", () => {
    textDescription.textContent = ""; // Cambia el texto dinámicamente
    textDescription.style.display = 'none'; // Oculta el texto
  });
});


function getTranslatedDescription (key) {
  switch (lang) {

    case "en":
      if (key == "tool1") {
        return "Play freely the 88-key piano and create your own melodies!";
      } else if (key == "tool2") {
        return "Find chords with our intuitive search tool that enhances your creative process!";
      } else if (key == "tool3") {
        return "Discover the BPM (beats per minute) of any song or melody. Tap along with the rhythm!";
      } else if (key == "tool4") {
        return "Choose a scale and explore the notes that form it on the piano!";
      } else if (key == "tool5") {
        return "Select a key signature and learn how it's represented musically!";
      }
    break;

    case "es":
      if (key == "tool1") {
        return "¡Toca libremente el piano de 88 teclas y crea tus propias melodías!";
      } else if (key == "tool2") {
        return "¡Encuentra acordes con nuestro buscador intuitivo que mejora tu proceso creativo!";
      } else if (key == "tool3") {
        return "Descubre los BPM (beats por minuto) de cualquier canción o melodía. " +
               "¡Toca la pantalla siguiendo el ritmo de la música!";
      } else if (key == "tool4") {
        return "¡Elige una escala y explora las notas que la forman en el piano!";
      } else if (key == "tool5") {
        return "¡Elige una armadura y aprende cómo se representa musicalmente!"
      }
    break;

    case "pt":
      if (key == "tool1") {
        return "Toque livremente o piano de 88 teclas e crie suas próprias melodias!";
      } else if (key == "tool2") {
        return "Encontre acordes com nossa ferramenta intuitiva que estimula seu processo criativo!";
      } else if (key == "tool3") {
        return "Descubra o BPM (batidas por minuto) de qualquer música ou melodia. Toque na tela acompanhando o ritmo!";
      } else if (key == "tool4") {
        return "Escolha uma escala e explore as notas que a compõem no piano!";
      } else if (key == "tool5") {
        return "Selecione uma armadura e aprenda como ela é representada na música!";
      }
    break;
  }

}
