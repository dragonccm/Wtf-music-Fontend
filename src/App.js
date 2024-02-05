import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import RightSidebar from './components/RightSidebar'
import Bottombar from './components/Bottombar'


function App() {
  const [apiResult, setApiResult] = useState({});
  const [audio, setAudio] = useState();

  async function fetchData() {
    const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=jisoo';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '79723fdce5msh14c7e1183c905e4p15d70ejsn9d00634fb4d3',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setApiResult(result);
      if (result.data && result.data.length > 0) {
        setAudio(result.data[0].preview);
      } else {
        console.error('No audio found in the API result');
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (apiResult && apiResult.data && apiResult.data.length > 0) {
      setAudio(apiResult.data[0].preview);
    }
  }, [apiResult]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RightSidebar />

        <button onClick={fetchData}>First Fetch</button>

        {audio && (
          <>
            <Bottombar music='https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4'/>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
