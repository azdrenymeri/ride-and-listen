// eslint-disable-next-line
import react from 'react';
import PropsTypes from 'prop-types';
import './SidePanel.css';

import CityList from './Radio/CityList/CityList';
import RadioPlayer from './Radio/RadioPlayer/RadioPlayer';

export default function SidePanel(props: any) {
  return (<div className="SidePanel"> 
    <p className="SidePanel-title">Side Panel</p>
    <CityList />
    <RadioPlayer />
  </div>)
}

SidePanel.propTypes = {
  title: PropsTypes.string.isRequired
}