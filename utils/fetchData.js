import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'd2c066a25emsh21899204f7d25d5p146b4cjsnf6e9d40172ae' ,
    },
  });
    
  return data;
}