import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
});

async function get(url, options = {}) {
  try {
    const res = await instance.get(
      `${url}?${options.query}&api_key=${process.env.REACT_APP_V3_API_KEY}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

const http = {
  instance,
  get,
};

export default http;
