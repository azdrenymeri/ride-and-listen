import React, {useState} from 'react';
import RadioPlayer from './RadioPlayer/RadioPlayer';

import {observer} from 'mobx-react'
import { useApplicationStore } from '../../../mobx/Store';

function Radio(props: any) {
  return (<RadioPlayer />);
}

export default observer(Radio);