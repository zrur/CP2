import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const NASA_API_URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(NASA_API_URL);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados da NASA' });
  }
}
