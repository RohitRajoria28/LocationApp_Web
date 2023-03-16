import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { setInterval } from 'timers/promises';
import LocationDisplay from './LocationDisplay';



interface Location{
  formatted: string;
  timestamp:string;
}

const Max_loc = 10; // Maximum number of locations to store
function App() {
  const [locations,setLocations]=useState<Location[]>([]);
  
  useEffect(() => {
    const API_URL = 'https://api.opencagedata.com/geocode/v1/json?q=-22.6792%2C+14.5272&key=923447a9476d4d5bae11e7399cabacff&pretty=1';
    const interval = window.setInterval(() => {
      fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        var time=data.timestamp.created_http
        const newLocations: Location[] = data.results.map((result: any) => ({
          formatted: result.formatted,
          timestamp: time,
        }));
        setLocations((prevLocations) => [...prevLocations, ...newLocations].slice(0, Max_loc));
      })
      .catch((error) => console.error(error));
    }, 300000);

    return () => clearInterval(interval);
}, []);

const handleRemoveLocation=(index:number)=>{
  setLocations((prev)=>prev.filter((location,i)=> i!=index))
}
const handleRemoveAllLocation=( )=>{
  console.log("ALL CLEAR CALLED")
   setLocations([]);
}
  
  return (
    <div className="App">
      <h1 className='main-heading'  >Location Manager📌</h1>
      <br />
       <div className='container' > 
           < LocationDisplay
            
            locations={locations}
            onRemove={handleRemoveLocation}
            onRemoveAll={handleRemoveAllLocation}
              
           />
      </div>
    </div>
  );
}

export default App;
