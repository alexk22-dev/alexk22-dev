// utils/googleSheets.js
const SPREADSHEET_ID = 'your_spreadsheet_id';
const API_KEY = 'your_api_key';

async function submitToGoogleSheet(formData) {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/A1:append?valueInputOption=USER_ENTERED&key=${API_KEY}`;

  const body = JSON.stringify({
    values: [
      [
        formData.firstName,
        formData.lastName,
        formData.email,
        formData.phone,
        formData.company,
        formData.title,
        formData.message
      ]
    ]
  });

  const options = {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Failed to submit data');
  }

  return response.json();
}

export default submitToGoogleSheet;
