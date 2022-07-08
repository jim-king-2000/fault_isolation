export const baseUrl = 'http://localhost:4000';

export default async function handler(req, res) {
  const { path } = req.query;
  const response = await fetch(baseUrl + '/' + path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req.body)
  });
  return res.status(response.status).json(await response.json());
}