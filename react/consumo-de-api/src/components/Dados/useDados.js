import { useState, useEffect } from 'react';
import axios from 'axios';

function useDados() {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
      .then(response => {
        setDados(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { dados, loading, error };
}

export default useDados;
