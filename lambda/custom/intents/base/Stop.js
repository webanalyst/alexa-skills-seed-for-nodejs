const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
          || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
      const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
      const speechText = requestAttributes.t('EXIT_MESSAGE');
  
      return handlerInput.responseBuilder
        .speak(speechText)
        .getResponse();
    },
};

module.exports = CancelAndStopIntentHandler;