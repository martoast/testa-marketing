// netlify/functions/zohoWebhook.js

const fetch = require('node-fetch');

let accessToken = null;
let tokenExpiration = null;

exports.handler = async (event, context) => {
  try {
    console.log('Received request:', event.body);

    const payload = JSON.parse(event.body);
    const formData = payload.formData;

    console.log('Form Data:', formData);

    await ensureValidAccessToken();

    const accountData = await createAccount(formData);
    console.log('Created Account:', accountData);

    const contactData = await createContact(formData, accountData.details.id);
    console.log('Created Contact:', contactData);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Account and Contact created successfully',
        account: accountData,
        contact: contactData,
      }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({
        error: error.message || 'Internal Server Error',
        details: error.details || {},
      }),
    };
  }
};

async function createAccount(formData) {
  const zohoApiBaseUrl = process.env.ZOHO_API_BASE_URL || 'https://www.zohoapis.com';

  const zohoAccountData = {
    data: [
      {
        Account_Name: formData.accountName,
        Industry: formData.industry,
        Phone: formData.phone,
      },
    ],
    trigger: ['workflow'],
  };

  const response = await fetch(`${zohoApiBaseUrl}/crm/v5/Accounts`, {
    method: 'POST',
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(zohoAccountData),
  });

  const data = await response.json();
  console.log('Zoho Account API Response:', data);

  if (response.ok && data.data && data.data.length > 0) {
    return data.data[0];
  } else {
    console.error('Zoho API Error Response (Account):', data);
    throw new Error(data.message || 'Failed to create account');
  }
}

async function createContact(formData, accountId) {
  const zohoApiBaseUrl = process.env.ZOHO_API_BASE_URL || 'https://www.zohoapis.com';

  const zohoContactData = {
    data: [
      {
        First_Name: formData.firstName,
        Last_Name: formData.lastName,
        Email: formData.email,
        Fuente_de_posible_clientes: formData.fuenteDePosibleClientes,
        rea_de_campo: formData.rea_de_campo,
        Empresa: formData.empresa,
        Mobile: formData.mobile,
        Phone: formData.phone,
        Mailing_City: formData.mailingCity,
        Estado: formData.estado,
        Description: formData.description,
        Account_Name: accountId,
      },
    ],
    trigger: ['workflow'],
  };

  const response = await fetch(`${zohoApiBaseUrl}/crm/v5/Contacts`, {
    method: 'POST',
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(zohoContactData),
  });

  const data = await response.json();
  console.log('Zoho Contact API Response:', data);

  if (response.ok && data.data && data.data.length > 0) {
    return data.data[0];
  } else {
    console.error('Zoho API Error Response (Contact):', data);
    throw new Error(data.message || 'Failed to create contact');
  }
}

async function ensureValidAccessToken() {
  const currentTime = Date.now();
  if (!accessToken || !tokenExpiration || currentTime >= tokenExpiration) {
    console.log('Access token is missing or expired. Refreshing token...');
    await refreshAccessToken();
  } else {
    console.log('Access token is valid.');
  }
}

async function refreshAccessToken() {
  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
  const zohoAccountsUrl = 'https://accounts.zoho.com';

  const params = new URLSearchParams();
  params.append('refresh_token', refreshToken);
  params.append('client_id', clientId);
  params.append('client_secret', clientSecret);
  params.append('grant_type', 'refresh_token');

  console.log('Refreshing access token...');

  const response = await fetch(`${zohoAccountsUrl}/oauth/v2/token`, {
    method: 'POST',
    body: params,
  });

  const data = await response.json();
  console.log('Zoho Token Refresh Response:', data);

  if (response.ok) {
    accessToken = data.access_token;
    tokenExpiration = Date.now() + (data.expires_in * 1000);
    console.log('Access token refreshed successfully.');
  } else {
    console.error('Error refreshing access token:', data);
    throw new Error('Failed to refresh access token');
  }
}