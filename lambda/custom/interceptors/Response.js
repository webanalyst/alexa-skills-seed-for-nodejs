module.exports = {
    async process(handlerInput){
        try {
            let response = JSON.stringify(handlerInput);
        } catch (error) {
            console.log(`Error in response: ${error}`);
        }
    }
}