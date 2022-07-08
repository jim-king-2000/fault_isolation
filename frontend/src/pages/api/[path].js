export const baseUrl = 'http://localhost:4000';

export default async function handler(req, res) {
  const { path } = req.query;
  console.log(path, baseUrl + '/' + path)
  const response = await fetch(baseUrl + '/' + path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req.body)
  });
  return res.status(response.status).json(await response.json());
}