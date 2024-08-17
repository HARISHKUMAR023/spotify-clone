// pages/api/spotify.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const SPOTIFY_BASE_URL = 'https://api.spotify.com/v1/playlists';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { playlistId } = req.query;

  if (!playlistId) {
    return res.status(400).json({ error: 'Playlist ID is required' });
  }

  try {
    const accessToken = process.env.SPOTIFY_ACCESS_TOKEN;

    if (!accessToken) {
      return res.status(401).json({ error: 'Spotify access token is missing' });
    }

    const response = await axios.get(`${SPOTIFY_BASE_URL}/${playlistId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
}
