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
    mainTitle: 'Privacy Policy',
    mainDescription: 'Last Update: August 18, 2025',

    pptitle1: "1. Introduction",
    pptitle2: "2. Information Collection",
    pptitle3: "3. Cookies and Tracking Technologies",
    pptitle4: "4. Security",
    pptitle5: "5. Third-Party Services",
    pptitle6: "6. Changes to This Privacy Policy",
    pptitle7: "7. Acceptance of This Policy",

    ppdesc1: "Thank you for visiting Akordify. This Privacy Policy explains how we handle information collected through our website. We are committed to protecting user privacy and complying with relevant data protection regulations. By browsing or using our website, you agree to the terms of this Privacy Policy. If you have any questions or concerns, please feel free to contact us.",
    ppdesc2: 'Our website does not actively collect, store, or share personal data from visitors. We do not request or process personally identifiable information unless you voluntarily provide it (e.g., via future updates). However, for user convenience, our site stores limited non-personal data in your browser cache or local storage. This includes preferences such as the selected display language and musical elements saved through features like "Saved Chords." This data is stored locally on your device and is not transmitted to our servers.',
    ppdesc3: "We do not use cookies or tracking technologies to collect data about your browsing behavior. If we implement these tools in the future, we will update this policy and notify users accordingly.",
    ppdesc4: "We take reasonable measures to safeguard our website from unauthorized access, alteration, or misuse. As we do not store personal data directly through the site, the risk to user data is minimal.",
    ppdesc5: "Our website does not currently integrate with third-party services that collect personal information. Should this change, we will update this policy and disclose the nature of such integrations.",
    ppdesc6: "We may update this Privacy Policy from time to time. Significant changes will be reflected directly on this page, and we encourage you to check back periodically to stay informed.",
    ppdesc7: "By continuing to use this website, you acknowledge and accept the terms outlined in this Privacy Policy. If you do not agree, please refrain from using the site.",
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

    // Privacy Policy
    mainTitle: 'Política de Privacidad',
    mainDescription: 'Última actualización: 18 de agosto de 2025',

    pptitle1: "1. Introducción",
    pptitle2: "2. Recopilación de Información",
    pptitle3: "3. Cookies y Tecnologías de Seguimiento",
    pptitle4: "4. Seguridad",
    pptitle5: "5. Servicios de Terceros",
    pptitle6: "6. Cambios en Esta Política de Privacidad",
    pptitle7: "7. Aceptación de Esta Política",

    ppdesc1: "Gracias por visitar Akordify. Esta Política de Privacidad explica cómo manejamos la información recopilada a través de nuestro sitio web. Estamos comprometidos con la protección de la privacidad de los usuarios y con el cumplimiento de las regulaciones pertinentes en materia de protección de datos. Al navegar o utilizar nuestro sitio web, usted acepta los términos de esta Política de Privacidad. Si tiene alguna pregunta o inquietud, no dude en contactarnos.",
    ppdesc2: 'Nuestro sitio web no recopila, almacena ni comparte activamente datos personales de los visitantes. No solicitamos ni procesamos información personalmente identificable a menos que usted la proporcione voluntariamente (por ejemplo, mediante futuras actualizaciones). Sin embargo, para mayor comodidad del usuario, nuestro sitio almacena datos no personales limitados en la memoria caché del navegador o en el almacenamiento local. Esto incluye preferencias como el idioma de visualización seleccionado y elementos musicales guardados mediante funciones como "Acordes Guardados". Estos datos se almacenan localmente en su dispositivo y no se transmiten a nuestros servidores.',
    ppdesc3: "No utilizamos cookies ni tecnologías de seguimiento para recopilar datos sobre su comportamiento de navegación. Si en el futuro implementamos estas herramientas, actualizaremos esta política y notificaremos a los usuarios en consecuencia.",
    ppdesc4: "Tomamos medidas razonables para proteger nuestro sitio web contra accesos no autorizados, alteraciones o usos indebidos. Como no almacenamos datos personales directamente a través del sitio, el riesgo para la información del usuario es mínimo.",
    ppdesc5: "Actualmente, nuestro sitio web no se integra con servicios de terceros que recopilen información personal. En caso de que esto cambie, actualizaremos esta política y divulgaremos la naturaleza de dichas integraciones.",
    ppdesc6: "Podemos actualizar esta Política de Privacidad ocasionalmente. Los cambios significativos se reflejarán directamente en esta página, y le recomendamos revisar periódicamente para mantenerse informado.",
    ppdesc7: "Al continuar utilizando este sitio web, usted reconoce y acepta los términos establecidos en esta Política de Privacidad. Si no está de acuerdo, por favor absténgase de utilizar el sitio.",
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

    // Privacy Policy
    mainTitle: 'Política de Privacidade',
    mainDescription: 'Última atualização: 18 de agosto de 2025',

    pptitle1: "1. Introdução",
    pptitle2: "2. Coleta de Informações",
    pptitle3: "3. Cookies e Tecnologias de Rastreamento",
    pptitle4: "4. Segurança",
    pptitle5: "5. Serviços de Terceiros",
    pptitle6: "6. Alterações nesta Política de Privacidade",
    pptitle7: "7. Aceitação desta Política",

    ppdesc1: 'Obrigado por visitar Akordify. Esta Política de Privacidade explica como lidamos com as informações coletadas por meio do nosso site. Estamos comprometidos com a proteção da privacidade dos usuários e com o cumprimento das regulamentações relevantes de proteção de dados. Ao navegar ou utilizar nosso site, você concorda com os termos desta Política de Privacidade. Se tiver alguma dúvida ou preocupação, não hesite em entrar em contato conosco.',
    ppdesc2: 'Nosso site não coleta, armazena nem compartilha ativamente dados pessoais dos visitantes. Não solicitamos nem processamos informações pessoalmente identificáveis, a menos que você as forneça voluntariamente (por exemplo, por meio de futuras atualizações). No entanto, para maior comodidade do usuário, nosso site armazena dados não pessoais limitados na memória cache do navegador ou no armazenamento local. Isso inclui preferências como o idioma de exibição selecionado e elementos musicais salvos por meio de funções como "Acordes Salvos". Esses dados são armazenados localmente no seu dispositivo e não são transmitidos aos nossos servidores.',
    ppdesc3: "Não utilizamos cookies nem tecnologias de rastreamento para coletar dados sobre o seu comportamento de navegação. Caso venhamos a implementar essas ferramentas no futuro, atualizaremos esta política e notificaremos os usuários adequadamente.",
    ppdesc4: "Tomamos medidas razoáveis para proteger nosso site contra acessos não autorizados, alterações ou usos indevidos. Como não armazenamos dados pessoais diretamente por meio do site, o risco para as informações do usuário é mínimo.",
    ppdesc5: "Atualmente, nosso site não se integra a serviços de terceiros que coletam informações pessoais. Caso isso mude, atualizaremos esta política e divulgaremos a natureza dessas integrações.",
    ppdesc6: "Podemos atualizar esta Política de Privacidade ocasionalmente. Alterações significativas serão refletidas diretamente nesta página, e recomendamos que você a revise periodicamente para se manter informado.",
    ppdesc7: "Ao continuar utilizando este site, você reconhece e aceita os termos estabelecidos nesta Política de Privacidade. Se não concordar, por favor, não utilize o site.",
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
    en: "Privacy Policy - Akordify",
    es: "Políticas de Privacidad - Akordify",
    pt: "Políticas de Privacidade - Akordify",
  }

  document.title = titleTab[lang];
}