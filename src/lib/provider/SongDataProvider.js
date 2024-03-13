import React from "react";
import SongDataContext from "../Context/SongContext";
import { useState } from "react";
const SongDataProvider = ({ children }) => {
    const [songData, setSongData] = useState("");
  
    return (
      <SongDataContext.Provider value={{ songData, setSongData }}>
        {children}
      </SongDataContext.Provider>
    );
  };
  
  export default SongDataProvider;