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

    // Donate
    kofiButtonText: "Support me on Ko-fi",
    txtTitle: "Donate",
    txtDescription: "If this website is helpful to you, consider supporting the work behind it. Every contribution helps us keep growing.",
    txtp1: "Maybe you learned something new, sparked a fresh idea, were inspired to create a new melody, saved time, found clarity in a moment of doubt, or simply had fun exploring. Maybe you were reminded of something you'd forgotten, something meaningful, or maybe your passion for art was reborn. Whatever brought you here, thanks for being part of this, it means more than you know.",
    txtq1: "Dream. Learn. Build.",
    thanks: "Thank you",

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

    // Donate
    kofiButtonText: "Apóyame en Ko-fi",
    txtTitle: "Donar",
    txtDescription: "Si este sitio web te resulta útil, considera apoyar el trabajo que hay detrás. Cada contribución nos ayuda a seguir creciendo.",
    txtp1: "Quizás aprendiste algo nuevo, se te ocurrió una idea nueva, te inspiraste para crear una nueva melodía, ahorraste tiempo, encontraste claridad en un momento de duda, o simplemente te divertiste explorando. Quizás recordaste algo que habías olvidado, algo significativo, o quizás tu pasión por el arte volvió a nacer. Sea lo que sea que te trajo hasta aquí, gracias por ser parte de esto. Significa más de lo que imaginas.",
    txtq1: "Sueña. Aprende. Construye.",
    thanks: "Gracias",

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

    // Donate
    kofiButtonText: "Apoie-me no Ko-fi",
    txtTitle: "Doar",
    txtDescription: "Se este site é útil para você, considere apoiar o trabalho por trás dele. Cada contribuição nos ajuda a continuar crescendo.",
    txtp1: "Talvez você tenha aprendido algo novo, tido alguma nova ideia, se inspirado para criar alguma nova melodia, economizado tempo, encontrado clareza em um momento de dúvida, ou simplesmente se divertido explorando. Talvez tenha se lembrado de algo que havia esquecido, algo significativo, ou talvez sua paixão pela arte tenha renascido. Seja o que for que te trouxe até aqui, obrigado por fazer parte disso. Significa mais do que você imagina.",
    txtq1: "Sonhe. Aprenda. Construa.",
    thanks: "Obrigado",
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
      }
    }
  });

  updateFlagImage(langparameter);
  checkMenu();
  updateTitleTab();
}

function changeLanguageNotation(langNotationparameter) {
  langNotation = langNotationparameter;
  localStorage.setItem("langNotation", langNotationparameter);
  updateActiveClassLang(langNotationparameter, langNotationOptions);
  changeLanguage(lang);
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
    en: "Donate - Akordify",
    es: "Donar - Akordify",
    pt: "Doar - Akordify",
  }

  document.title = titleTab[lang];
}