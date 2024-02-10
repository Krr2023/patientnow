const fetch = require('node-fetch');

const API_URL = 'https://api.netlify.com/api/v1/sites/YOUR_SITE_ID';

module.exports = async (event) => {
  const body = JSON.parse(event.body);
  const number = body.number;

  // 將數字存儲至 Netlify API
  await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer YOUR_ACCESS_TOKEN`,
    },
    body: JSON.stringify({
      number,
    }),
  });

  return {
    statusCode: 200,
  };
};
