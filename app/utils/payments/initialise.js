import axios from 'axios';


// Endpoint for initializing a transaction
const INITIALIZE_TRANSACTION_URL = 'https://api.paystack.co/transaction/initialize';

export async function initializeTransaction(amount, email,plan) {


  const headers = {
    Authorization :`Bearer ${process.env.PAYSTACK_SECRET}`,
    'Content-Type': 'application/json',
  };

  const data = {
    amount,     
    email,
    plan        
  };

  try {
    const response = await axios.post(INITIALIZE_TRANSACTION_URL, data, { headers });
    if (response.status === 200 && response.data.status) {
      // Transaction initialized successfully
      return response.data.data.authorization_url;
    } else {
      // Error occurred, log error message
      console.error("Error:", response.data.message);
      return null;
    }
  } catch (error) {
    console.error("An error occurred:", error.message);
    return null;
  }
}