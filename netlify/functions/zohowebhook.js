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

    // First, check if the account exists or create a new one
    const accountId = await getOrCreateAccount(formData);

    // Now create the contact
    const contactData = await createContact(formData, accountId);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Contact created successfully', contact: contactData }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error', details: error.message }),
    };
  }
};

async function getOrCreateAccount(formData) {
  const zohoApiBaseUrl = process.env.ZOHO_API_BASE_URL || 'https://www.zohoapis.com';
  
  // First, try to find the account
  const searchResponse = await fetch(`${zohoApiBaseUrl}/crm/v2/Accounts/search?criteria=(Account_Name:equals:${encodeURIComponent(formData.accountName)})`, {
    method: 'GET',
    headers: {
      'Authorization': `Zoho-oauthtoken ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  const searchData = await searchResponse.json();

  if (searchData.data && searchData.data.length > 0) {
    // Account exists, return its ID
    return searchData.data[0].id;
  } else {
    // Account doesn't exist, create a new one
    const newAccountData = {
      data: [
        {
          Account_Name: formData.accountName,
          Industry: formData.industry,
          Phone: formData.phone,
        },
      ],
    };

    const createResponse = await fetch(`${zohoApiBaseUrl}/crm/v2/Accounts`, {
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAccountData),
    });

    const createData = await createResponse.json();

    if (createData.data && createData.data.length > 0) {
      return createData.data[0].details.id;
    } else {
      throw new Error('Failed to create account');
    }
  }
}

async function createContact(formData, accountId) {
  const zohoApiBaseUrl = process.env.ZOHO_API_BASE_URL || 'https://www.zohoapis.com';

  const zohoContactData = {
    data: [
      {
        Account_Name: { id: accountId },
        First_Name: formData.firstName,
        Last_Name: formData.lastName,
        Email: formData.email,
        Fuente_de_posible_clientes: formData.fuenteDePosibleClientes,
        Area_de_campo: formData.areaDeCampo,
        Empresa: formData.empresa,
        Mobile: formData.mobile,
        Title: formData.title,
        Department: formData.department,
      },
    ],
    trigger: ["workflow"]
  };

  const response = await fetch(`${zohoApiBaseUrl}/crm/v2/Contacts`, {
    method: 'POST',
    headers: {
      'Authorization': `Zoho-oauthtoken ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(zohoContactData),
  });

  const data = await response.json();

  if (response.ok && data.data && data.data.length > 0) {
    return data.data[0].details;
  } else {
    throw new Error('Failed to create contact');
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
  } else {
    console.error('Error refreshing access token:', data);
    throw new Error('Failed to refresh access token');
  }
}