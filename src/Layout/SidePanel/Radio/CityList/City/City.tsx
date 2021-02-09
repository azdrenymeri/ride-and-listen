import React from 'react';
import PropTypes from 'prop-types';
import './City.css';

export default function City(props: any){
  return<li className="City" key={props.key}> {props.name} </li>
}

City.propTypes = {
  key: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}