import React from 'react';
import "./CityList.css";
import {useApplicationStore} from '../../../mobx/Store';
import {useObserver, observer} from 'mobx-react';

import {handleCityClick} from './handleCityList';
import City from './City/City';

function CityList(props: any) {
  const store = useApplicationStore();

  const cities = store.cityStore.cities.map((city: any, id: number) => {
      return <City key={city.name} name={city.name} handleClick={(e: any) => handleCityClick(e, store)} />
    });

  return (
  <div className="CityList">
    <div className="CityList-title">
      Select a city from the list
            </div>
    <ul className="CityList-city-list">
      {cities}
    </ul>
  </div>);
}

export default observer(CityList);