const { RealtimeClient } = require('@openai/realtime-api-beta');

async function connect() {
  const client = new RealtimeClient({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowAPIKeyInBrowser: true
  });

  client.updateSession({ instructions: 'You are a helpful assistant.' });

  client.on('conversation.updated', (event) => {
    console.log('Conversation updated:', event);
  });

  try {
    await client.connect();
    console.log('Connected to OpenAI Realtime API.');
  } catch (error) {
    console.error('Failed to connect:', error);
  }
}

connect();