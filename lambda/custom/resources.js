const resources = {
    "en-US": {
        translation:{
            
            // Help.js
            "HELP_MESSAGE" : "You can say hello!",

            // Stop.js
            "EXIT_MESSAGE" : "Goodbye!",

            // Launch.js
            "WELCOME_MESSAGE" : "Welcome to demo skill"

        }
    },
    "es-ES": {
        translation:{
            
            // Help.js
            "HELP_MESSAGE" : "Puedes decir hola!",

            // Stop.js
            "EXIT_MESSAGE" : "Adiós!",

            // Launch.js
            "WELCOME_MESSAGE" : "Bienvenido, ¿en qué puedo ayudarte?"

        }
    }
}

const utils = locale => {
    let translation;
    if(resources[locale]){
        translation = resources[locale].translation;
    }else{
        // Default to en-US
        translation = resources["en-US"].translation;
    }

    return {
        strings: translation
    }
}

module.exports = utils;