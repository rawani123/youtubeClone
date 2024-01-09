import axios from "axios"

const BaseUrl="https://youtube138.p.rapidapi.com"

const options = {
    
    params: {
      q: 'desp',
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key':import.meta.env.VITE_YOUTUBE_API_KEY,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

  export const fetchDataFromAPi=async (url)=>{
    const {data}= await axios.get(`${BaseUrl}/${url}`,options)
    return data;
  }