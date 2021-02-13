import React from 'react';
import "./CityList.css";

import City from './City/City';

export default function CityList(props: any) {
  const cities = props.citiesList.map((city: any, id: number) => {
      return <City key={id} name={city.name} />
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