import React from 'react';
import PropTypes from 'prop-types';
import './City.css';
import {useApplicationStore} from './../../../../../mobx/Store';
import {useObserver} from 'mobx-react';

import {handleClick} from './handleCity';

export default function City(props: any){
  const store = useApplicationStore();
  return useObserver(() => (<li 
            className="City" 
            key={props.key}
            onClick={(e) => handleClick(e, store, props.name)}> 
            {props.name}
  </li>));
}

City.propTypes = {
  name: PropTypes.string.isRequired
}