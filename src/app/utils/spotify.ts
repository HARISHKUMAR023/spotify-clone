// utils/spotify.ts
import axios from 'axios';

export const fetchPlaylist = async (playlistId: string) => {
  const response = await axios.get(`/api/spotify?playlistId=${playlistId}`);
  return response.data;
};
