// Import the dotenv package to load environment variables from a .env file
require('dotenv').config();

// Import the TeleSign SDK
const TeleSignSDK = require('telesignsdk');

// Function to send an SMS message
function sendSMS(phone, message){
    try {
        // Initialize the TeleSign client with environment variables for customer ID and API key
        const client = new TeleSignSDK(process.env.CUSTOMER_ID, process.env.API_KEY);

        // Send an SMS message using the client
        client.sms.message(smsCallback, phone, message, 'ARN')
    } catch (error) {
        // Log any errors that occur during the process
        console.error('Error', error);
    }
}

// Callback function for handling the response of the SMS API
function smsCallback(error, responseBody){
    if (error) {
        // Log the error if one occurs
        console.error(error);
    } else {
        // Log the response body if the SMS is sent successfully
        console.log(responseBody);
    }
}

// Send an SMS message using the sendSMS function with environment variables for phone number and a test message
sendSMS(process.env.PHONE_NUMBER, 'Hello CodingWithAdo Test');
