// utils/testConnection.js

import { RealtimeClient } from '@openai/realtime-api-beta';
import dotenv from 'dotenv';

dotenv.config();

async function testConnection() {
  const client = new RealtimeClient({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowAPIKeyInBrowser: true,
  });

  try {
    await client.connect();
    console.log('Connection successful');
    client.sendUserMessageContent([{ type: 'input_text', text: 'Hello!' }]);
    client.on('conversation.updated', (event) => {
      console.log('Received response:', event);
    });
  } catch (error) {
    console.error('Test connection failed:', error);
  }
}

testConnection();