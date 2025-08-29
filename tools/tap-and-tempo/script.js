let clickTimes = []; // Arreglo para almacenar los tiempos de los clics
let bpm = 0;
const minClicks = 3; // Número mínimo de clics para calcular BPM de manera confiable
let countTempo = 0;

// Función para manejar el click y la tecla espacio
function handleBPMMeasurement() {
  const currentTime = Date.now();
  document.getElementById('txtTapScreen').classList.remove('hasBPM');
  document.getElementById('txtTapSecondary').classList.remove('hidden');

  // Si hay clics anteriores, calculamos el BPM
  if (clickTimes.length > 0) {
    // Calculamos el tiempo entre el clic más reciente y el anterior
    const timeDifference = currentTime - clickTimes[clickTimes.length - 1];
    clickTimes.push(currentTime); // Agregamos el nuevo clic al arreglo

    // Si tenemos suficientes clics (al menos 3), calculamos el BPM
    if (clickTimes.length >= minClicks) {
      // Calculamos los intervalos entre todos los clics
      const intervals = [];
      for (let i = 1; i < clickTimes.length; i++) {
        intervals.push(clickTimes[i] - clickTimes[i - 1]);
      }

      // Calculamos el promedio de los intervalos
      const avgInterval = intervals.reduce((acc, interval) => acc + interval, 0) / intervals.length;

      // Calculamos el BPM a partir del intervalo promedio
      bpm = Math.round(60000 / avgInterval);
      document.getElementById('txtTapScreen').classList.add('hasBPM');
      document.getElementById('txtTapScreen').textContent = `${bpm} BPM`;
      document.getElementById('txtTapSecondary').classList.add('hidden');
    }
  } else {
    clickTimes.push(currentTime); // Si es el primer clic, lo agregamos al arreglo
  }

  // Agregar el parpadeo al fondo
  element_container_main.classList.add('blink');
  setTimeout(() => {
    element_container_main.classList.remove('blink'); // Eliminar la clase de parpadeo después de 75ms
  }, 75);

  // Actualizar el tempo
  updateTempoDisplay(bpm);  
  // Actualizar el contador
  updateCountDisplay(true);
}

const element_container_main = document.getElementById('containerMain');
// Detectar clic en la pantalla
element_container_main.addEventListener('click', handleBPMMeasurement);

// Detectar la tecla espacio (keyCode 32 es la tecla espacio)
document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    event.preventDefault();

    // Verificar si el foco está en el botón RESET, en cuyo caso no medimos BPM
    if (document.activeElement.id === 'resetButton') {
      return; // Salir de la función si el botón RESET está enfocado
    }
    handleBPMMeasurement();
  }
});

// Función para resetear el contador de BPM
function resetBPM() {
  clickTimes = []; // Limpiar el arreglo de tiempos
  bpm = 0; // Reiniciar el BPM a 0
  countTempo = 0; // Reiniciar el contador
  document.getElementById('txtTapScreen').textContent = getTranslatedText('tap'); // Restablecer el mensaje
  document.getElementById('resetButton').blur(); // Quitar el foco del botón RESET
  document.getElementById('txtTapScreen').classList.remove('hasBPM');
  document.getElementById('txtTapSecondary').classList.remove('hidden');
  updateCountDisplay(false);
  updateTempoDisplay(bpm);
}

// Detectar clic en el botón RESET
//document.getElementById('resetButton').addEventListener('click', resetBPM);

// Evento para el botón RESET
document.getElementById('resetButton').addEventListener("click", (event) => {
  event.stopPropagation(); // Detener la propagación del clic, esta linea sirve para que no se active el listener del containerMain
  resetBPM(); // Llamar a la función de reinicio
});


// Función para determinar el tempo basado en los BPMs
function getTempo(bpm) {
  if (bpm < 1) return "";
  else if (bpm < 21) return "Larghissimo";
  else if (bpm < 25) return "Larghissimo/Grave";
  else if (bpm < 40) return "Grave";
  else if (bpm < 60) return "Lento/Largo";
  else if (bpm < 66) return "Larghetto";
  else if (bpm < 76) return "Adagio";
  else if (bpm < 108) return "Andante";
  else if (bpm < 112) return "Moderato";
  else if (bpm < 120) return "Moderato/Allegretto";
  else if (bpm < 156) return "Allegro";
  else if (bpm < 176) return "Vivace";
  else if (bpm < 200) return "Presto";
  else if (bpm < 1000) return "Prestissimo";
  return "";
}

// Actualizar el texto del tempo
function updateTempoDisplay(bpm) {
  const tempoDisplay = document.querySelector(".tempoDisplay");
  const tempo = getTempo(bpm);
  tempoDisplay.textContent = getTranslatedText('tempo') + `${tempo}`;
}

function updateCountDisplay(shouldCount) {
  const countDisplay = document.querySelector(".countDisplay");  
  
  if (shouldCount) {
    countTempo++;
  }

  countDisplay.textContent =  getTranslatedText('count') + `${countTempo}`;
  if (countTempo == 0 )
    countDisplay.textContent = getTranslatedText('count');
}

function getTranslatedText(key){
  switch (lang) {
    case "en": // english
      if (key == "tap") {return "Click somewhere";}
      if (key == "tempo") {return "Tempo: ";}
      if (key == "count") {return "Count: ";}
      break;
    case "es": // español
      if (key == "tap") {return "Clickea en algún lugar";}
      if (key == "tempo") {return "Tempo: ";}
      if (key == "count") {return "Conteo: ";}
      break;
    case "pt": // português
      if (key == "tap") {return "Clica em algum lugar";}
      if (key == "tempo") {return "Tempo: ";}
      if (key == "count") {return "Contagem: ";}
      break;
  }
}