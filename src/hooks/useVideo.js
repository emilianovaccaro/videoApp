import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideo = (searchTerm) => {
  const [input, setInput] = useState([]);
  
  useEffect(() => {
    search(searchTerm);
  }, [searchTerm]);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      }
    });    
    setInput(response.data.items);
  };

  return [input, search];
};

export default useVideo;