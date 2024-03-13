import React from "react";

const SongDataContext = React.createContext({
  Cur_data:"",
  setSongData: () => {}, 
});
  
  export default SongDataContext;