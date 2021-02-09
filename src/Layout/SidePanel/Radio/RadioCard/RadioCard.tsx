import React from 'react';
import "./RadioCard.css";

import City from './City/City';

export default function RadioCard(){
  const cities = ["New York City", "Lost Angeles", "San Francisco", "London","Seattle"].map((city, key) => {
      return <City key={key} name={city} />
  });

 return(<div className="RadioCard">
            <div className="RadioCard-title">
              Select a city from the list
            </div>
            <div className="RadioCard-body">
                <ul className="RadioCard-city-list">
                  {cities}
                  </ul> 
            </div>

 </div>); 
}