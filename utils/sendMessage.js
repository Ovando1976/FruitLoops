const { RealtimeClient } = require('@openai/realtime-api-beta');

async function sendMessage() {
  const client = new RealtimeClient({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowAPIKeyInBrowser: true
  });

  await client.connect();

  client.sendUserMessageContent([{ type: 'input_text', text: 'Hello, how are you?' }]);

  client.on('conversation.updated', (event) => {
    console.log('Received response:', event);
  });
}

sendMessage();