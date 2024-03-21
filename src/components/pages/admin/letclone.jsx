import React,{useEffect,useState} from 'react';
const Letclone = () => {
    
    return (  
        <section>
            <label htmlFor="id">id data</label>
            <input id="id" type="text" />
            <textarea name="maindata" id="render" cols="30" rows="10"></textarea>
            <button>clone</button>
        </section>
    );
}
 
export default Letclone;