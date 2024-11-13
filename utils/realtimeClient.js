// utils/realtimeClient.js
import { RealtimeClient } from '@openai/realtime-api-beta';
import dotenv from 'dotenv';

dotenv.config();

export async function getRealtimeApi() { // Add 'async' here
  const client = new RealtimeClient({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowAPIKeyInBrowser: true,
  });

  try {
    await client.connect(); // Now 'await' works within async function
    console.log('Connection successful');
    client.sendUserMessageContent([{ type: 'input_text', text: 'Hello!' }]);
    client.on('conversation.updated', (event) => {
      console.log('Received response:', event);
    });

    return client; // Return the client instance after connecting
  } catch (error) {
    console.error('Connection failed:', error);
    return null; // Return null on failure
  }
}