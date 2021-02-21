import React from 'react';
import PropTypes from 'prop-types';
import './City.css';
import { useApplicationStore } from '../../../../mobx/Store';
import { observer } from 'mobx-react';

function City(props: any) {
  const store = useApplicationStore();
  const cssClasses = ['City'];
  if (props.name === store.uiStore.selectedCity) {
    cssClasses.push("City-active");
  }
  return (<li
    className={cssClasses.join(" ")}
    key={props.key}
    onClick={props.handleClick}>
    {props.name}
  </li>);
}

City.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default observer(City);