import axios from 'axios';

const KEY = 'AIzaSyCIrA5esm_SimeErsGt-OG2lCch7teTtkE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: "snippet",
    type: "video",
    maxResults: 20,
    key: KEY,
  }
});