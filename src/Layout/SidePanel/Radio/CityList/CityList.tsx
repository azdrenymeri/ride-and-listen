import React from 'react';
import "./CityList.css";

import City from './City/City';

export default function CityList() {
  const cities = ["New York City", "Lost Angeles",
    "San Francisco", "London", "Seattle",
    "Test", "Test", "Test", "Test"].map((city, id) => {
      return <City key={id} name={city} />
    });

  return (<div className="CityList">
    <div className="CityList-title">
      Select a city from the list
            </div>

    <ul className="CityList-city-list">
      {cities}
    </ul>


  </div>);
}