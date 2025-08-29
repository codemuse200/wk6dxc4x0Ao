justForMakeAllLocal();

/*
    La función simula una IIFE (Immediately Invoked Function Expression), como sería:

    (function () {
        // code..
    })();

    Es un encapsulamiento, para que todo lo que se declare dentro de la función
    (let, const, function, etc.) quede local a esa función. Así se evita que
    variables o funciones interfieran con otras partes del código o con otras
    librerías. En este caso evita que los otros scripts que llaman los HTML
    creen confusiones con los nombres de las variables o constantes.
*/

function justForMakeAllLocal () {

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

            // Mobile
            mbltxtDonate: "Donate",
            mbltxtSettings: "Settings",
            mbltxtLanguage: "Language",
            mbltxtNotation: "Notation",
            mbltxtTools: "Tools",
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

            // Mobile
            mbltxtDonate: "Donar",
            mbltxtSettings: "Ajustes",
            mbltxtLanguage: "Idioma",
            mbltxtNotation: "Nomenclatura",
            mbltxtTools: "Herramientas",
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

            // Mobile
            mbltxtDonate: "Doar",
            mbltxtSettings: "Configuração",
            mbltxtLanguage: "Idioma",
            mbltxtNotation: "Nomenclatura",
            mbltxtTools: "Ferramentas",
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

    // let lang = localStorage.getItem("language") || "en";
    // let langNotation = localStorage.getItem("langNotation") || "en";
    // changeLanguage(lang);
    // changeLanguageNotation(langNotation);

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

    
}