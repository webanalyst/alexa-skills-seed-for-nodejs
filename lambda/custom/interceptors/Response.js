module.exports = {
    async process(handlerInput){
        try {
            let response = JSON.stringify(handlerInput);
            console.log(`Intercept Response: ${response}`);
        } catch (error) {
            console.log(`Error in response: ${error}`);
        }
    }
}