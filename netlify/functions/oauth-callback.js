// netlify/functions/oauth-callback.js

const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  try {
    const query = event.queryStringParameters;
    const code = query.code;

    if (!code) {
      return {
        statusCode: 400,
        body: 'Authorization code not provided.',
      };
    }

    const clientId = process.env.ZOHO_CLIENT_ID;
    const clientSecret = process.env.ZOHO_CLIENT_SECRET;
    const redirectUri = 'https://testa-marketing.netlify.app/.netlify/functions/oauth-callback';

    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', clientId);
    params.append('client_secret', clientSecret);
    params.append('redirect_uri', redirectUri);
    params.append('code', code);

    const response = await fetch('https://accounts.zoho.com/oauth/v2/token', {
      method: 'POST',
      body: params,
    });

    const data = await response.json();

    if (response.ok) {
      // Optionally, store the refresh_token securely here
      // For demonstration, we'll return a success message
      return {
        statusCode: 200,
        body: 'Authorization successful. You can close this window.',
      };
    } else {
      console.error('Error exchanging code for tokens:', data);
      return {
        statusCode: 500,
        body: 'Failed to exchange code for tokens.',
      };
    }
  } catch (error) {
    console.error('Error in OAuth callback:', error);
    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }
};
