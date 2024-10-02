import { useEffect, useState } from 'react';
import axios from 'axios';

const NASA_API_URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

const NasaPage = () => {
  const [imageData, setImageData] = useState<any>(null);

  useEffect(() => {
    axios.get(NASA_API_URL)
      .then((response) => {
        setImageData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching NASA image:', error);
      });
  }, []);

  if (!imageData) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{imageData.title}</h1>
      <img src={imageData.url} alt={imageData.title} />
      <p>{imageData.explanation}</p>
    </div>
  );
};

export default NasaPage;
