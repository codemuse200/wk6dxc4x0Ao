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
    
    // Key Signatures
    txtTitle12: "KEY",
    txtTitle22: "SIGNATURES",
    txtMainTitle: `<span class="title-keyword"> KEY </span> SIGNATURES`,
    txtSubtitle: "Choose a key signature and see how it's represented musically",
    // addAccidentalButton: "Add Sharp",
    // removeAccidentalButton: "Remove Sharp",
    txtPitches: "Pitches: ",
    cmrtxtRelativeMajor: "Relative Major: ",
    cmrtxtRelativeMinor: "Relative Minor: ",

    cstCAm: "C<-->A",
    cstGEm: "G<-->E",
    cstDBm: "D<-->B",
    cstAFsm: "A<-->F#",
    cstECsm: "E<-->C#",
    cstBGsm: "B<-->G#",
    cstFsDsm: "F#<-->D#",
    cstCsAsm: "C#<-->A#",
    cstCAm2: "C<-->A",
    cstFDm: "F<-->D",
    cstBbGm: "Bb<-->G",
    cstEbCm: "Eb<-->C",
    cstAbFm: "Ab<-->F",
    cstDbBbm: "Db<-->Bb",
    cstGbEbm: "Gb<-->Eb",
    cstCbAbm: "Cb<-->Ab",

    /*cstCAm: "C major / A minor",
    cstGEm: "G major / E minor",
    cstDBm: "D major / B minor",
    cstAFsm: "A major / F# minor",
    cstECsm: "E major / C# minor",
    cstBGsm: "B major / G# minor",
    cstFsDsm: "F# major / D# minor",
    cstCsAsm: "C# major / A# minor",
    cstCAm2: "C major / A minor",
    cstFDm: "F major / D minor",
    cstBbGm: "Bb major / G minor",
    cstEbCm: "Eb major / C minor",
    cstAbFm: "Ab major / F minor",
    cstDbBbm: "Db major / Bb minor",
    cstGbEbm: "Gb major / Eb minor",
    cstCbAbm: "Cb major / Ab minor",*/

  },
  es: {
    menuMainA1: "Piano Completo", 
    menuMainA2: "Buscador de Acordes",
    menuMainA3: "Tap n' Tempo",
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

    // Key Signatures
    txtTitle12: "ARMADURAS", // se descartó
    txtTitle22: "", // se descartó
    txtMainTitle: `<span class="title-keyword"> ARMADURAS </span>`,
    txtSubtitle: "Elige una armadura y mira cómo se representa musicalmente",
    // addAccidentalButton: "Agregar Sostenido",
    // removeAccidentalButton: "Quitar Sostenido",
    txtPitches: "Tonos: ",
    cmrtxtRelativeMajor: "Relativa Mayor: ",
    cmrtxtRelativeMinor: "Relativa Menor: ",

    cstCAm: "Do<-->La",
    cstGEm: "Sol<-->Mi",
    cstDBm: "Re<-->Si",
    cstAFsm: "La<-->Fa#",
    cstECsm: "Mi<-->Do#",
    cstBGsm: "Si<-->Sol#",
    cstFsDsm: "Fa#<-->Re#",
    cstCsAsm: "Do#<-->La#",
    cstCAm2: "Do<-->La",
    cstFDm: "Fa<-->Re",
    cstBbGm: "Sib<-->Sol",
    cstEbCm: "Mib<-->Do",
    cstAbFm: "Lab<-->Fa",
    cstDbBbm: "Reb<-->Sib",
    cstGbEbm: "Solb<-->Mib",
    cstCbAbm: "Dob<-->Lab",

    /*
    cstCAm: "Do mayor / La menor",
    cstGEm: "Sol mayor / Mi menor",
    cstDBm: "Re mayor / Si menor",
    cstAFsm: "La mayor / Fa# menor",
    cstECsm: "Mi mayor / Do# menor",
    cstBGsm: "Si mayor / Sol# menor",
    cstFsDsm: "Fa# mayor / Re# menor",
    cstCsAsm: "Do# mayor / La# menor",
    cstCAm2: "Do mayor / La menor",
    cstFDm: "Fa mayor / Re menor",
    cstBbGm: "Sib mayor / Sol menor",
    cstEbCm: "Mib mayor / Do menor",
    cstAbFm: "Lab mayor / Fa menor",
    cstDbBbm: "Reb mayor / Sib menor",
    cstGbEbm: "Solb mayor / Mib menor",
    cstCbAbm: "Dob mayor / Lab menor",
    */
  },
  pt: {
    menuMainA1: "Piano Completo", 
    menuMainA2: "Identificador de Acordes",
    menuMainA3: "Tap n' Tempo",
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

    // Key Signatures
    txtTitle12: "ARMADURAS", // se descartó
    txtTitle22: " DE CLAVE", // se descartó
    txtMainTitle: `<span class="title-keyword"> ARMADURAS </span> DE CLAVE`,
    txtSubtitle: "Escolha una armadura de clave e veja como ela é representada musicalmente",
    // addAccidentalButton: "Adicionar Sustenido",
    // removeAccidentalButton: "Remover Sustenido",
    txtPitches: "Tons: ",
    cmrtxtRelativeMajor: "Relativa Maior: ",
    cmrtxtRelativeMinor: "Relativa Menor: ",

    cstCAm: "Dó<-->Lá",
    cstGEm: "Sol<-->Mi",
    cstDBm: "Ré<-->Si",
    cstAFsm: "Lá<-->Fá#",
    cstECsm: "Mi<-->Dó#",
    cstBGsm: "Si<-->Sol#",
    cstFsDsm: "Fá#<-->Ré#",
    cstCsAsm: "Dó#<-->Lá#",
    cstCAm2: "Dó<-->Lá",
    cstFDm: "Fá<-->Ré",
    cstBbGm: "Sib<-->Sol",
    cstEbCm: "Mib<-->Dó",
    cstAbFm: "Láb<-->Fá",
    cstDbBbm: "Réb<-->Sib",
    cstGbEbm: "Solb<-->Mib",
    cstCbAbm: "Dób<-->Láb",

    /*
    cstCAm: "Dó maior / Lá menor",
    cstGEm: "Sol maior / Mi menor",
    cstDBm: "Ré maior / Si menor",
    cstAFsm: "Lá maior / Fá# menor",
    cstECsm: "Mi maior / Dó# menor",
    cstBGsm: "Si maior / Sol# menor",
    cstFsDsm: "Fá# maior / Ré# menor",
    cstCsAsm: "Dó# maior / Lá# menor",
    cstCAm2: "Dó maior / Lá menor",
    cstFDm: "Fá maior / Ré menor",
    cstBbGm: "Sib maior / Sol menor",
    cstEbCm: "Mib maior / Dó menor",
    cstAbFm: "Láb maior / Fá menor",
    cstDbBbm: "Réb maior / Sib menor",
    cstGbEbm: "Solb maior / Mib menor",
    cstCbAbm: "Dób maior / Láb menor",*/	 
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
      } else if (translationType === "inner") {
        element.innerHTML = translations[langparameter][key];
      } else if (translationType === "keySignature") {
        updateKeySignaturesLang(element, false);
      }
    }
  });

  const element_keySignatures_selected = document.getElementById('cstSelected');
  updateKeySignaturesLangSelected(element_keySignatures_selected);

  updateFlagImage(langparameter);
  checkMenu();
  updateTitleTab();
  updatePitches();
  updateAccidentalText();
  updateRelativePianos();
  switchMode(globalMode);
}

function changeLanguageNotation(langNotationparameter) {
  langNotation = langNotationparameter;
  localStorage.setItem("langNotation", langNotationparameter);
  updateActiveClassLang(langNotationparameter, langNotationOptions);
  changeLanguage(lang);
  updateWhiteKeyLabels();
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

updateAccidentalText();


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

// ------------- Key Signatures functions ------------- //

function updateKeySignaturesLangSelected(element) {
  updateKeySignaturesLang(element, true);
}

function updateKeySignaturesLang(element, isTheMain) {
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

  if (isTheMain) {
    newTextContent = translations[langNotation][element.dataset.valueid];
  } else {
    newTextContent = translations[langNotation][element.id];

    /*if (langNotation == "en") {
      newTextContent = translations[element.id];
    } else if (langNotation == "es") {
      newTextContent = keySignaturesOptions_es[element.id];
    } else if (langNotation == "pt") {
      newTextContent = keySignaturesOptions_pt[element.id];
    }*/

  // C<-->A
  }
    newTextContent = newTextContent.replace("<-->", " " + txtMajor + " / ") + " " + txtMinor;
    element.textContent = newTextContent;
}

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
}

function updateTitleTab() {
  let titleTab = {
    en: "Key Signatures - Akordify",
    es: "Armaduras - Akordify",
    pt: "Armaduras de Clave - Akordify",
  }

  document.title = titleTab[lang];
}

// ------------- Translates ------------- //

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