module.exports = {
    async process(handlerInput){
        try {
            let request = JSON.stringify(handlerInput.requestEnvelope);
            console.log(`Intercept Request: ${request}`);
        } catch (error) {
            console.log(`Error in request: ${error}`);
        }
    }
}