import { baseUrl } from './common.js';

export default async function handler(req, res) {
  const response = await fetch(baseUrl);
  return res.status(response.status).json(await response.json());
}