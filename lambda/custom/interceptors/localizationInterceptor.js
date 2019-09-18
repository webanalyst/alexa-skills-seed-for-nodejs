const i18n = require('i18next');
const sprintf = require('i18next-sprintf-postprocessor');

const enData = require("../i18n/en");
const enUSData = require("../i18n/enUS");
const esData = require("../i18n/es");
const esESData = require("../i18n/esES");

const languageStrings = {
    'en': enData,
    'en-US': enUSData,
    'es': esData,
    'es-ES': esESData
  };

const LocalizationInterceptor = {
    async process(handlerInput) {
      // Gets the locale from the request and initializes 
      // i18next.
      const localizationClient = i18n.use(sprintf).init({
        lng: handlerInput.requestEnvelope.request.locale,
        resources: languageStrings,
      });
      // Creates a localize function to support arguments.
      localizationClient.localize = function localize() {
        // gets arguments through and passes them to
        // i18next using sprintf to replace string placeholders
        // with arguments.
        const args = arguments;
        const values = [];
        for (let i = 1; i < args.length; i += 1) {
          values.push(args[i]);
        }
        const value = i18n.t(args[0], {
          returnObjects: true,
          postProcess: 'sprintf',
          sprintf: values,
        });
  
        // If an array is used then a random value is selected 
        if (Array.isArray(value)) {
          return value[Math.floor(Math.random() * value.length)];
        }
        return value;
      };
      // this gets the request attributes and save the localize function inside 
      // it to be used in a handler by calling requestAttributes.t(STRING_ID, [args...])
      const attributes = handlerInput.attributesManager.getRequestAttributes();
      attributes.t = function translate(...args) {
        return localizationClient.localize(...args);
      };
    },
  };


module.exports = LocalizationInterceptor;