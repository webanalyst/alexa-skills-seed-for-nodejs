module.exports = {
    async process(handlerInput){
        try {
            let request = JSON.stringify(handlerInput.requestEnvelope);
        } catch (error) {
            console.log(`Error in request: ${error}`);
        }
    }
}