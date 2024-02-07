import React, { useEffect, useState } from 'react';
import './App.css';
import RightSidebar from './components/RightSidebar'
import Bottombar from './components/Bottombar'
import Mainpage_playlist from './components/mainpage_playlist'



function App() {

  return (
    <div className="App">
      <div className="main_content">
        <RightSidebar />
        <Mainpage_playlist/>
      </div>
        <Bottombar music='https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4'/>
    </div>
  );
}

export default App;
