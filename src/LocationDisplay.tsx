import React from 'react'
import './LocationDiaplay.css'
interface Location {
    formatted: string;
    timestamp: string;
  }

interface LocationDisplayProps{
    locations:Location[];
    onRemove:(index:number)=>void;
    onRemoveAll:()=>void;
}
const LocationDisplay = ({locations,onRemove,onRemoveAll}:LocationDisplayProps) => {
  
    const handleRemoveAll=()=>{
        locations=[]
    }
  
    return (
    <div className='main' >
        <div  >
        <h3 className='main-title' >Current Location📍 </h3>
            { 
              locations.map((location,index)=>(
                (index===locations.length-1) && 
                
                <div className='main-address' key={index} >
                    
                    <div className='address-box' >
                        <h4 className='main-formatted' >{location.formatted}</h4>
                        <p className='main-time'>{location.timestamp}</p>
                        <hr />
                    </div>
                    
                    <button className='buttons' title='Remove' onClick={()=>onRemove(index)} >Remove</button>
                </div>
              )
              )  
            }
            <br />
        </div>

        <div>
        <h3 className='main-title' >Previous  Location  👓</h3>
            { 
              locations.map((location,index)=>(
                <div className='main-address' key={index} >
                    
                    <div className='address-box' >
                        <h4 className='main-formatted' >{location.formatted}</h4>
                        <p className='main-time'>{location.timestamp}</p>
                        <hr />
                    </div>
                    <button className='buttons' title='Remove' onClick={()=>onRemove(index)} >Remove</button>
                </div>
              )
              )  
            }
        </div>
        <br />
        <div className='remove-all-button' >
            <button className='buttons' title='RemoveAll' onClick={()=>(onRemoveAll())} >Clear All</button>
        </div>
    </div>
  )
}

export default LocationDisplay