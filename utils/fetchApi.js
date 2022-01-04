import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '8939f0c229mshec44f5b76b911f0p11949cjsn29587b5d5a1c'
    },
  });
    
  return data;
}