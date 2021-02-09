// eslint-disable-next-line
import react from 'react';
import PropsTypes from 'prop-types';
import './SidePanel.css';

import RadioCard from './Radio/RadioCard/RadioCard';

export default function SidePanel(props: any) {
  return (<div className="SidePanel"> 
    <p className="SidePanel-title">Side Panel</p>
    <RadioCard />
  </div>)
}

SidePanel.propTypes = {
  title: PropsTypes.string.isRequired
}