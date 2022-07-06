import { baseUrl } from './common.js';

export default async function handler(req, res) {
  const response = await fetch(baseUrl + '/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req.body)
  });
  return res.status(response.status).json(await response.json());
}