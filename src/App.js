import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const API_KEY = "5Muqe6HOngq40S9xI6ZQJ7jDfvZUoS5f"
function App() {
  const [data, setdata] = useState([])
  async function fetchData() {
    const giphyResponse = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`);
    console.log(giphyResponse);
    setdata(giphyResponse.data.data);
  }
  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="gifs">
          {data.map(item => {
            return <div key={item.id}><img src={item.images.fixed_width_downsampled.url} /></div>
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
