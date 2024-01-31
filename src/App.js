import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [apiResult, setApiResult] = useState(null);

  async function fetchData() {
    const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '79723fdce5msh14c7e1183c905e4p15d70ejsn9d00634fb4d3',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setApiResult(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={fetchData}>First Fetch</button>


        {apiResult && (
          <div>
            <h2>API kết quả:</h2>
            <pre>{JSON.stringify(apiResult, null, 2)}</pre>
          </div>
        )}
      </header>

    </div>
  );
}

export default App;
