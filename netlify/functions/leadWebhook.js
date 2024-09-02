const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const webhookUrl = '/';

  const headers = { 'Content-Type': 'application/json' };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: headers,
      body: event.body
    });

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error forwarding request', details: error.message })
    };
  }
};
