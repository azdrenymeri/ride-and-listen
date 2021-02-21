import React from 'react';
import "./CityList.css";
import {useApplicationStore} from '../../../../mobx/Store';
import {useObserver} from 'mobx-react';

import City from './City/City';

export default function CityList(props: any) {
  const store = useApplicationStore();

  const cities = store.cities.map((city: any, id: number) => {
      return <City key={id} name={city.name} />
    });

  return useObserver(() => (<div className="CityList">
    <div className="CityList-title">
      Select a city from the list
            </div>
    <ul className="CityList-city-list">
      {cities}
    </ul>

  </div>));
}