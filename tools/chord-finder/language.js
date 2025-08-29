const element_menu_lang_EN = document.getElementById('menu-lang-EN');
const element_menu_lang_ES = document.getElementById('menu-lang-ES');
const element_menu_lang_PT = document.getElementById('menu-lang-PT');
const element_menu_langNotation_EN = document.getElementById('menu-langNotation-EN');
const element_menu_langNotation_ES = document.getElementById('menu-langNotation-ES');
const element_menu_langNotation_PT = document.getElementById('menu-langNotation-PT');

const element_mbl_menu_lang_EN = document.getElementById('mbl-menu-lang-EN');
const element_mbl_menu_lang_ES = document.getElementById('mbl-menu-lang-ES');
const element_mbl_menu_lang_PT = document.getElementById('mbl-menu-lang-PT');
const element_mbl_menu_langNotation_EN = document.getElementById('mbl-menu-langNotation-EN');
const element_mbl_menu_langNotation_ES = document.getElementById('mbl-menu-langNotation-ES');
const element_mbl_menu_langNotation_PT = document.getElementById('mbl-menu-langNotation-PT');

const langOptions = {
  en: element_menu_lang_EN,
  es: element_menu_lang_ES,
  pt: element_menu_lang_PT
};

const langNotationOptions = {
    en: element_menu_langNotation_EN,
    es: element_menu_langNotation_ES,
    pt: element_menu_langNotation_PT
};

/* ------------------------------------------ */

const translations = {
  en: {
    menuMainA1: "Full Free Play Piano", 
    menuMainA2: "Chord Finder",
    menuMainA3: "Tap n' Tempo",
    menuMainA4: "Scales",
    menuMainA5: "Key Signatures",
    menuMainA1b: "Full Free Play Piano", 
    menuMainA2b: "Chord Finder",
    menuMainA3b: "Tap n' Tempo",
    menuMainA4b: "Scales",
    menuMainA5b: "Key Signatures",
    menuMainA1c: "Full Free Play Piano", 
    menuMainA2c: "Chord Finder",
    menuMainA3c: "Tap n' Tempo",
    menuMainA4c: "Scales",
    menuMainA5c: "Key Signatures",
    txtTools: "Tools",
    menuLanguage: "Language",
    txtLanguage: "Language",
    txtNotation: "Notation",
    txtDonate: "Donate",

    // Footer
    footerDonationTitleText: "Would you like to support us?",
    footerDonationTitleDescription: "If you find our tools helpful and want to help us keep improving, consider making a donation. We truly appreciate your support!",
    footerCopyRightText: "© 2025 Akordify. All rights reserved.",
    footerPrivacyPolicyText: "Privacy Policy",
    txtDonateFT: "Donate",
    ftToolsTitle: "Tools",
    ftFullPiano: "Full Free Play Piano",
    ftChordFinder: "Chord Finder",
    ftTapTempo: "Tap n' Tempo",
    ftScales: "Scales",
    ftKeySignatures: "Key Signatures",
    ftResourcesTitle: "Resources",
    ftResources1: "Releases",
    ftResources2: "Terms of Use",
    ftResources3: "Privacy Policy",
    ftContactTitle: "Contact",
    ftContactUs: "Contact us",

    // Mobile
    mbltxtDonate: "Donate",
    mbltxtSettings: "Settings",
    mbltxtLanguage: "Language",
    mbltxtNotation: "Notation",
    mbltxtTools: "Tools",

    // Chord Finder...
    txtSubtitle: "Discover a new way to find chord with our intuitive search tool and enhance your creative process",
    cfSearchInput: "Write a chord", // placeholder
    txtTitle11: "Chord",
    txtTitle12: "Finder",
    clearButton: "CLEAR",
    txtSavedChords: "Saved Chords:",
    txtBottomMessageBold: "Note: ",
    txtBottomMessage: "More complex chords can vary depending on the musical context, and their choice within a specific harmonic progression or melody can change their function and impact.",
    tooltipCopy: "Copy to clipboard",
    txtSavedChordsNoSpace: "Limit reached, please remove one first.",

  },
  es: {
    menuMainA1: "Piano Completo", 
    menuMainA2: "Buscador de Acordes",
    menuMainA3: "Tap & Tempo",
    menuMainA4: "Escalas",
    menuMainA5: "Armaduras",
    menuMainA1b: "Piano Completo", 
    menuMainA2b: "Buscador de Acordes",
    menuMainA3b: "Tap & Tempo",
    menuMainA4b: "Escalas",
    menuMainA5b: "Armaduras",
    menuMainA1c: "Piano Completo", 
    menuMainA2c: "Buscador de Acordes",
    menuMainA3c: "Tap & Tempo",
    menuMainA4c: "Escalas",
    menuMainA5c: "Armaduras",
    txtTools: "Herramientas",
    menuLanguage: "Idioma",
    txtLanguage: "Idioma",
    txtNotation: "Nomenclatura",
    txtDonate: "Donar",

    // Footer
    footerDonationTitleText: "¿Te gustaría apoyarnos?",
    footerDonationTitleDescription: "Si encuentras útiles nuestras herramientas y deseas ayudarnos a seguir mejorando, por favor considera hacer una donación. ¡Agradecemos mucho tu apoyo!",
    footerCopyRightText: "© 2025 Akordify. Todos los derechos reservados.",
    footerPrivacyPolicyText: "Políticas de Privacidad",
    txtDonateFT: "Donar",
    ftToolsTitle: "Herramientas",
    ftFullPiano: "Piano Completo",
    ftChordFinder: "Buscador de Acordes",
    ftTapTempo: "Tap & Tempo",
    ftScales: "Escalas",
    ftKeySignatures: "Armaduras",
    ftResourcesTitle: "Recursos",
    ftResources1: "Lanzamientos",
    ftResources2: "Términos de Uso",
    ftResources3: "Políticas de Privacidad",
    ftContactTitle: "Contacto",
    ftContactUs: "Contáctanos",

    // Mobile
    mbltxtDonate: "Donar",
    mbltxtSettings: "Ajustes",
    mbltxtLanguage: "Idioma",
    mbltxtNotation: "Nomenclatura",
    mbltxtTools: "Herramientas",

    // Chord Finder...    
    txtSubtitle: "Descubre una nueva forma de encontrar acordes con nuestra herramienta de búsqueda intuitiva y mejora tu proceso creativo",
    cfSearchInput: "Escribe un acorde", // placeholder
    txtTitle11: "Buscador de ",
    txtTitle12: "Acordes",
    clearButton: "LIMPIAR",
    txtSavedChords: "Acordes guardados:",
    txtBottomMessageBold: "Nota: ",
    txtBottomMessage: "Los acordes más complejos pueden variar dependiendo del contexto musical, y su elección dentro de una progresión armónica o melodía específica puede cambiar su función e impacto.", 
    tooltipCopy: "Copiar acorde",
    txtSavedChordsNoSpace: "Límite alcanzado, por favor elimina uno",
  },
  pt: {
    menuMainA1: "Piano Completo", 
    menuMainA2: "Identificador de Acordes",
    menuMainA3: "Tap & Tempo",
    menuMainA4: "Escalas",
    menuMainA5: "Armaduras de Clave",
    menuMainA1b: "Piano Completo", 
    menuMainA2b: "Identificador de Acordes",
    menuMainA3b: "Tap & Tempo",
    menuMainA4b: "Escalas",
    menuMainA5b: "Armaduras de Clave",
    menuMainA1c: "Piano Completo", 
    menuMainA2c: "Identificador de Acordes",
    menuMainA3c: "Tap & Tempo",
    menuMainA4c: "Escalas",
    menuMainA5c: "Armaduras de Clave",
    txtTools: "Ferramentas",
    menuLanguage: "Idioma",
    txtLanguage: "Idioma",
    txtNotation: "Nomenclatura",      
    txtDonate: "Doar",

    // Footer
    footerDonationTitleText: "Gostaria de nos apoiar?",
    footerDonationTitleDescription: "Se você achar nossas ferramentas úteis e quiser nos ajudar a continuar melhorando, considere fazer uma doação. Agradecemos muito o seu apoio!",
    footerCopyRightText: "© 2025 Akordify. Todos os direitos reservados.",
    footerPrivacyPolicyText: "Política de Privacidade",
    txtDonate: "Doar",
    ftToolsTitle: "Ferramentas",
    ftFullPiano: "Piano Completo",
    ftChordFinder: "Identificador de Acordes",
    ftTapTempo: "Tap & Tempo",
    ftScales: "Escalas",
    ftKeySignatures: "Armaduras de Clave",
    ftResourcesTitle: "Recursos",
    ftResources1: "Lançamentos",
    ftResources2: "Termos de Uso",
    ftResources3: "Políticas de Privacidade",
    ftContactTitle: "Contato",
    ftContactUs: "Contate-nos",

    // Mobile
    mbltxtDonate: "Doar",
    mbltxtSettings: "Configuração",
    mbltxtLanguage: "Idioma",
    mbltxtNotation: "Nomenclatura",
    mbltxtTools: "Ferramentas",

    // Chord Finder...    
    txtSubtitle: "Descubra uma nova maneira de encontrar acordes com nossa ferramenta de busca intuitiva e melhore seu processo criativo",
    cfSearchInput: "Digite um acorde", // placeholder
    txtTitle11: "Identificador de ",
    txtTitle12: "Acordes",
    clearButton: "LIMPAR",
    txtSavedChords: "Acordes salvos:",
    txtBottomMessageBold: "Nota: ",
    txtBottomMessage: "Acordes mais complexos podem variar dependendo do contexto musical, e sua escolha dentro de uma progressão harmônica ou melodia específica pode mudar sua função e impacto.", 
    tooltipCopy: "Copiar acorde",
    txtSavedChordsNoSpace: "Limite atingido, por favor remova um.",
  },    
}

element_menu_lang_EN.addEventListener("click", () => changeLanguage("en"));
element_menu_lang_ES.addEventListener("click", () => changeLanguage("es"));
element_menu_lang_PT.addEventListener("click", () => changeLanguage("pt"));

element_menu_langNotation_EN.addEventListener("click", () => changeLanguageNotation("en"));
element_menu_langNotation_ES.addEventListener("click", () => changeLanguageNotation("es"));
element_menu_langNotation_PT.addEventListener("click", () => changeLanguageNotation("pt"));

// Mobile
element_mbl_menu_lang_EN.addEventListener("click", () => changeLanguage("en"));
element_mbl_menu_lang_ES.addEventListener("click", () => changeLanguage("es"));
element_mbl_menu_lang_PT.addEventListener("click", () => changeLanguage("pt"));

element_mbl_menu_langNotation_EN.addEventListener("click", () => changeLanguageNotation("en"));
element_mbl_menu_langNotation_ES.addEventListener("click", () => changeLanguageNotation("es"));
element_mbl_menu_langNotation_PT.addEventListener("click", () => changeLanguageNotation("pt"));


let lang = localStorage.getItem("language") || "en";
let langNotation = localStorage.getItem("langNotation") || "en";
changeLanguage(lang);
changeLanguageNotation(langNotation);

function changeLanguage(langparameter) {
  lang = langparameter;
  localStorage.setItem("language", langparameter);

  updateActiveClassLang(langparameter, langOptions);
  updateNoChordText();

  if (!element_chord_display.classList.contains("noChord")) {
    updateChord(pressedKeysNumber);
  }

  // Recorre todas las claves del idioma seleccionado
  Object.keys(translations[langparameter]).forEach((key) => {
    const element = document.getElementById(key);
    if (element) {
      const translationType = element.dataset.translate || "textContent"; // Si no tiene `data-translate`, usa textContent por defecto
      
      // Para traducir otros elementos que no sean con textContent...
      // hay que usar asignarle un data-translate en el elemento HTML
      if (translationType === "textContent") {
        element.textContent = translations[langparameter][key];
      } else if (translationType === "placeholder") {
        element.placeholder = translations[langparameter][key];
      }
    }
  });
  
  updateFlagImage(langparameter);
  // El forEach anterior optimiza esto...
  /*document.getElementById("menuMainA1").textContent = translations[lang].menuMainA1;
  document.getElementById("menuMainA2").textContent = translations[lang].menuMainA2;
  document.getElementById("menuMainA3").textContent = translations[lang].menuMainA3;
  [...]  */

  checkMenu();
  updateTitleTab();
}

function changeLanguageNotation(langNotationparameter) {
  langNotation = langNotationparameter;
  localStorage.setItem("langNotation", langNotationparameter);
  updateActiveClassLang(langNotationparameter, langNotationOptions);

  updateWhiteKeyLabels();
  updateBlackKeyLabels();
  if (!element_chord_display.classList.contains("noChord")) {
    updateChord(pressedKeysNumber);
  }

  updateFlagImage(lang);
}

// Función para actualizar la clase "active"
function updateActiveClassLang(selectedLang, options) {
  Object.keys(options).forEach(lang => {
      options[lang].classList.toggle("active", lang === selectedLang);
  });
}

function updateFlagImage(lang) {
    // Seleccionar la imagen
    const imgElement = document.getElementById("imgFlagSelected");
    const mbl_img_lang_element = document.getElementById("mblImgLangFlagSelected");
    const mbl_img_langNotation_element = document.getElementById("mblImgLangNotationFlagSelected");
    
    // Actualizar el src según el idioma
    imgElement.src = `../../_assets/images/flags/${lang}.png`;
    mbl_img_lang_element.src = `../../_assets/images/flags/${lang}.png`;
    mbl_img_langNotation_element.src = `../../_assets/images/flags/${langNotation}.png`;
}

function updateNoChordText() {

  const element_chord_display = document.getElementById('chordDisplay');

  if (element_chord_display.classList.contains("noChord")) {
    element_chord_display.textContent = getTranslatedText("nochord");
  }

  if (element_chord_display.classList.contains("unrecognized")) {
    element_chord_display.textContent = getTranslatedText("UnrecognizedChord");
  }

 /* if (element_chord_display_detail.style.display == "block") {
    element_chord_display_detail.textContent = getTranslatedText("alsoConsider");
  }
  if (element_chord_display_detail_match.style.display == "block") {
    element_chord_display_detail_match.textContent = getTranslatedText("notesMatch") `These notes match with ${convertedQuery}`;
  }*/
}

function updateWhiteKeyLabels() {
  document.getElementById('wk-c3').textContent = getTranslatedTextNote('chord-C');
  document.getElementById('wk-d3').textContent = getTranslatedTextNote('chord-D');
  document.getElementById('wk-e3').textContent = getTranslatedTextNote('chord-E');
  document.getElementById('wk-f3').textContent = getTranslatedTextNote('chord-F');
  document.getElementById('wk-g3').textContent = getTranslatedTextNote('chord-G');
  document.getElementById('wk-a3').textContent = getTranslatedTextNote('chord-A');
  document.getElementById('wk-b3').textContent = getTranslatedTextNote('chord-B');
  document.getElementById('wk-c4').textContent = getTranslatedTextNote('chord-C');
  document.getElementById('wk-d4').textContent = getTranslatedTextNote('chord-D');
  document.getElementById('wk-e4').textContent = getTranslatedTextNote('chord-E');
  document.getElementById('wk-f4').textContent = getTranslatedTextNote('chord-F');
  document.getElementById('wk-g4').textContent = getTranslatedTextNote('chord-G');
  document.getElementById('wk-a4').textContent = getTranslatedTextNote('chord-A');
  document.getElementById('wk-b4').textContent = getTranslatedTextNote('chord-B');
}

// Función para verificar si el menú principal entra bien en el espacio de la pantala
function checkMenu() {
    const menuMain = document.getElementById("menuMain");
    const menuMainSmall = document.getElementById("menuMainSmall");

    menuMain.style.display = "flex";
    menuMainSmall.style.display = "none";

    // Si el menú en línea NO cabe en una sola línea, ocultarlo y mostrar el dropdown
    if (menuMain.scrollHeight > menuMain.clientHeight) {
      menuMain.style.display = "none";
      menuMainSmall.style.display = "flex";
    } else {
      menuMain.style.display = "flex";
      menuMainSmall.style.display = "none";
    }
}

function updateTitleTab() {
  let titleTab = {
    en: "Chord Finder - Akordify",
    es: "Buscador de Acordes - Akordify",
    pt: "Identificador de Acordes - Akordify",
  }

  document.title = titleTab[lang];
}