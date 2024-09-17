// netlify/functions/zohoWebhook.js

const fetch = require('node-fetch');

let accessToken = null;
let tokenExpiration = null;

exports.handler = async (event, context) => {
  try {
    // Parse the request body
    const payload = JSON.parse(event.body);
    const formData = payload.formData;

    // Ensure we have a valid access token
    await ensureValidAccessToken();

    // Step 1: Create the Account
    const accountData = await createAccount(formData);

    // Step 2: Create the Contact linked to the Account
    const contactData = await createContact(formData, accountData.id);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Account and Contact created successfully', account: accountData, contact: contactData }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error', details: error.message }),
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
        Phone: formData.phone
      }
    ],
    trigger: ["workflow"]
  };

  const response = await fetch(`${zohoApiBaseUrl}/crm/v5/Accounts`, {
    method: 'POST',
    headers: {
      'Authorization': `Zoho-oauthtoken ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(zohoAccountData),
  });

  const data = await response.json();

  if (response.ok && data.data && data.data.length > 0) {
    return data.data[0]; // Return the created Account object
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
        Area_de_campo: formData.areaDeCampo,
        Empresa: formData.empresa,
        Mobile: formData.mobile,
        Title: formData.title,
        Department: formData.department,
        City: formData.city,
        Comments: formData.comments,
        Account_Name: accountId // Link Contact to Account
      }
    ],
    trigger: ["workflow"]
  };

  const response = await fetch(`${zohoApiBaseUrl}/crm/v5/Contacts`, {
    method: 'POST',
    headers: {
      'Authorization': `Zoho-oauthtoken ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(zohoContactData),
  });

  const data = await response.json();

  if (response.ok && data.data && data.data.length > 0) {
    return data.data[0]; // Return the created Contact object
  } else {
    console.error('Zoho API Error Response (Contact):', data);
    throw new Error(data.message || 'Failed to create contact');
  }
}

async function ensureValidAccessToken() {
  const currentTime = Date.now();
  if (!accessToken || !tokenExpiration || currentTime >= tokenExpiration) {
    await refreshAccessToken();
  }
}

async function refreshAccessToken() {
  // Retrieve the environment variables
  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
  const zohoAccountsUrl = process.env.ZOHO_ACCOUNTS_URL || 'https://accounts.zoho.com';

  const params = new URLSearchParams();
  params.append('refresh_token', refreshToken);
  params.append('client_id', clientId);
  params.append('client_secret', clientSecret);
  params.append('grant_type', 'refresh_token');

  const response = await fetch(`${zohoAccountsUrl}/oauth/v2/token`, {
    method: 'POST',
    body: params,
  });

  const data = await response.json();

  if (response.ok) {
    accessToken = data.access_token;
    // Set token expiration to 50 minutes from now (10 minutes before the actual 1-hour expiration)
    tokenExpiration = Date.now() + 50 * 60 * 1000;
    console.log('Access token refreshed successfully.');
  } else {
    console.error('Error refreshing access token:', data);
    throw new Error('Failed to refresh access token');
  }
}
