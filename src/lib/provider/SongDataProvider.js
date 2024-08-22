import React from "react";
import SongDataContext from "../Context/SongContext";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
const SongDataProvider = ({ children }) => {
  const [songData, setSongData] = useState("");
  const theme = useSelector((state) => state.theme.theme);
    useEffect(() => {
      document.body.dataset.theme = theme;
    }, [theme]);
    return (
      <SongDataContext.Provider value={{ songData, setSongData }}>
        {children}
      </SongDataContext.Provider>
    );
  };
  
  export default SongDataProvider;