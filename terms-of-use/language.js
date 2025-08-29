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

    // Privacy Policy,
    mainTitle: 'Terms of Use',
    mainDescription: 'Last Update: August 18, 2025',
    introText: "Welcome to Akordify! By accessing and using this website, you agree to the following terms and conditions. Please read them carefully.", 

    pptitle1: "1. Use of the Website",
    pptitle2: "2. Privacy",
    pptitle3: "3. Intellectual Property",
    pptitle4: "4. Limitation of Liability",
    pptitle5: "5. Changes to These Terms",
    pptitle6: "6. Contact",
    pptitle7: "7. Acceptance of This Terms of Use",

    ppdesc1: "This website offers free musical tools such as a chord finder, scale identifier, key signature guides, virtual piano, and other resources. These tools are provided for informational, educational, and/or entertainment purposes only. You agree to use the website responsibly and not engage in any activity that could harm or disrupt its functionality.",
    ppdesc2: `We do not collect personal data from users. No login or account creation is required to access the features. Basic, anonymized analytics may be used to improve functionality (e.g., tool usage frequency), but no personally identifiable information is tracked. For more information, please refer to our <a href="../../privacy-policy/index.html"> Privacy Policy</a>.`,
    ppdesc3: "All content on this site — including tool interfaces, design elements, source code, audio, video, text, and graphics — is protected by applicable intellectual property laws. You may use the tools freely, but you may not copy, modify, distribute, or republish the content without prior permission.",
    ppdesc4: 'We strive to keep the tools accurate and useful, but we make no guarantees. This website and its content are provided "as is," without warranties of any kind. We are not liable for any damages resulting from the use of the site.',
    ppdesc5: "We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with a revised “Last Updated” date. Continued use of the website after changes implies acceptance of the updated terms.",
    ppdesc6: `If you have any questions or concerns, feel free to reach out to us at <b class="email"> contact@akordify.com</b>.`,
    ppdesc7: "By continuing to use this website, you acknowledge and accept the terms outlined in this Terms of Use. If you do not agree, please refrain from using the site.",
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

    // Terms of Service
    mainTitle: 'Términos de Uso',
    mainDescription: 'Última actualización: 18 de agosto de 2025',
    introText: "¡Bienvenido a Akordify! Al acceder y utilizar este sitio web, aceptas los siguientes términos y condiciones. Por favor, léelos detenidamente.",    

    pptitle1: "1. Uso del Sitio Web",
    pptitle2: "2. Privacidad",
    pptitle3: "3. Propiedad Intelectual",
    pptitle4: "4. Limitación de Responsabilidad",
    pptitle5: "5. Cambios en los Términos",
    pptitle6: "6. Contacto",
    pptitle7: "7. Aceptación de Estos Términos de Uso",

    ppdesc1: "Este sitio ofrece herramientas musicales gratuitas como buscador de acordes, identificador de escalas, guías de armaduras, piano virtual y otros recursos. Estas herramientas se proporcionan con fines informativos, educativos y/o de entretenimiento. Aceptas utilizar el sitio de manera responsable y no realizar actividades que puedan dañar o interrumpir su funcionamiento.",
    ppdesc2: `No recopilamos datos personales de los usuarios. No se requiere iniciar sesión ni crear una cuenta para acceder a las funciones. Se pueden utilizar análisis básicos y anónimos para mejorar la funcionalidad (por ejemplo, frecuencia de uso de herramientas), pero no se rastrea información que permita identificarte personalmente. Para más información, consulta nuestra <a href="../../privacy-policy/index.html"> Política de Privacidad</a>.`,
    ppdesc3: "Todo el contenido de este sitio —incluyendo interfaces de herramientas, elementos de diseño, código fuente, audio, video, texto y gráficos— está protegido por las leyes de propiedad intelectual aplicables. Puedes utilizar las herramientas libremente, pero no puedes copiar, modificar, distribuir ni republicar el contenido sin autorización previa.",
    ppdesc4: 'Nos esforzamos por mantener las herramientas precisas y útiles, pero no ofrecemos garantías. Este sitio y su contenido se proporcionan "tal cual", sin garantías de ningún tipo. No nos hacemos responsables por daños derivados del uso del sitio.',
    ppdesc5: "Nos reservamos el derecho de actualizar estos Términos de Uso en cualquier momento. Los cambios se publicarán en esta página con una fecha de “Última actualización” revisada. El uso continuado del sitio después de los cambios implica la aceptación de los términos actualizados.",
    ppdesc6: `Si tienes preguntas o inquietudes, no dudes en contactarnos a través de <b class="email"> contact@akordify.com</b>.`,
    ppdesc7: "Al continuar utilizando este sitio web, usted reconoce y acepta los términos establecidos en esta Términos de Uso. Si no está de acuerdo, por favor absténgase de utilizar el sitio.",
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

    // Terms of Service
    mainTitle: 'Termos de Uso',
    mainDescription: 'Última atualização: 18 de agosto de 2025',
    introText: "Bem-vindo ao Akordify! Ao acessar e utilizar este site, você concorda com os seguintes termos e condições. Por favor, leia-os com atenção.",

    pptitle1: "1. Uso do Site",
    pptitle2: "2. Privacidade",
    pptitle3: "3. Propriedade Intelectual",
    pptitle4: "4. Limitação de Responsabilidade",
    pptitle5: "5. Alterações nos Termos",
    pptitle6: "6. Contato",
    pptitle7: "7. Aceitação destes Termos de Uso",

    ppdesc1: "Este site oferece ferramentas musicais gratuitas, como buscador de acordes, identificador de escalas, guias de armaduras, piano virtual e outros recursos. Essas ferramentas são fornecidas para fins informativos, educacionais e/ou de entretenimento. Você concorda em usar o site de forma responsável e não realizar atividades que possam prejudicar ou interromper seu funcionamento.",
    ppdesc2: `Não coletamos dados pessoais dos usuários. Não é necessário fazer login ou criar uma conta para acessar os recursos. Análises básicas e anônimas podem ser utilizadas para melhorar a funcionalidade (por exemplo, frequência de uso das ferramentas), mas nenhuma informação pessoal identificável é rastreada. Para mais informações, consulte nossa <a href="../../privacy-policy/index.html"> Política de Privacidade</a>.`,
    ppdesc3: "Todo o conteúdo deste site — incluindo interfaces das ferramentas, elementos de design, código-fonte, áudio, vídeo, texto e gráficos — está protegido pelas leis de propriedade intelectual aplicáveis. Você pode usar as ferramentas livremente, mas não pode copiar, modificar, distribuir ou republicar o conteúdo sem autorização prévia.",
    ppdesc4: 'Nos esforçamos para manter as ferramentas precisas e úteis, mas não oferecemos garantias. Este site e seu conteúdo são fornecidos “como estão”, sem garantias de qualquer tipo. Não nos responsabilizamos por danos decorrentes do uso do site.',
    ppdesc5: "Reservamo-nos o direito de atualizar estes Termos de Uso a qualquer momento. As alterações serão publicadas nesta página com uma nova data de “Última atualização”. O uso contínuo do site após as alterações implica aceitação dos termos atualizados.",
    ppdesc6: `Se você tiver dúvidas ou preocupações, sinta-se à vontade para entrar em contato conosco pelo <b class="email"> contact@akordify.com</b>.`,
    ppdesc7: "Ao continuar utilizando este site, você reconhece e aceita os termos estabelecidos nestes Termos de Uso. Se não concordar, por favor, não utilize o site.",
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
    en: "Terms of Use - Akordify",
    es: "Términos de Uso - Akordify",
    pt: "Termos de Uso - Akordify",
  }

  document.title = titleTab[lang];
}