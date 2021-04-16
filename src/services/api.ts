import axios from 'axios';

export const api = axios.create({baseURL: 'https://api.pokemontcg.io/v1'});

export const getCards = async () => {
  const {data} = await api.get('/cards')
  if (data) {
    return data.cards
  }

  return []
} 