import React from 'react';
import PropsTypes from 'prop-types';
import './SidePanel.css';
import {useObserver} from 'mobx-react';
import {useApplicationStore } from './../../mobx/Store';

import CityList from './Radio/CityList/CityList';

import RadioPlayer from './Radio/RadioPlayer/RadioPlayer';
import VideoControls from './VideoControls/VideoControls';


export default function SidePanel(props: any) {
  
  
  const store = useApplicationStore();
  
  return useObserver(() => (
    <div className="SidePanel">
      <p className="SidePanel-title">
      {radioIcon} {props.title}
      </p>
      <CityList />
      <RadioPlayer />
      <VideoControls />
    </div>
  ));
}


SidePanel.propTypes = {
  title: PropsTypes.string.isRequired
}

const radioIcon = (
  <svg height="2rem" style={{verticalAlign:"middle"}} viewBox="0 0 64 64" width="2rem" xmlns="http://www.w3.org/2000/svg">
    <g id="Car_radio" data-name="Car radio">
      <path d="m61 13v38a2.006 2.006 0 0 1 -2 2h-54a2.006 2.006 0 0 1 -2-2v-38a2.006 2.006 0 0 1 2-2h54a2.006 2.006 0 0 1 2 2zm-6 32v-20h-6v20zm0-26v-4h-46v4zm-9 28a2 2 0 1 0 -2 2 2.006 2.006 0 0 0 2-2zm-8 0a2 2 0 1 0 -2 2 2.006 2.006 0 0 0 2-2zm0-13a6 6 0 0 0 -6-6 6.009 6.009 0 0 0 -6 6 6 6 0 0 0 12 0zm-8 13a2 2 0 1 0 -2 2 2.006 2.006 0 0 0 2-2zm-8 0a2 2 0 1 0 -2 2 2.006 2.006 0 0 0 2-2zm-7-2v-20h-6v20z" fill="#ff7956" />
      <path d="m49 41h6v4h-6z" fill="#ff3051" />
      <path d="m49 37h6v4h-6z" fill="#ff9811" />
      <path d="m49 33h6v4h-6z" fill="#ffcd00" />
      <path d="m49 29h6v4h-6z" fill="#9cdd05" />
      <path d="m49 25h6v4h-6z" fill="#2488ff" />
      <path d="m9 15h46v4h-46z" fill="#46f8ff" />
      <circle cx="44" cy="47" fill="#2488ff" r="2" />
      <circle cx="36" cy="47" fill="#ffcd00" r="2" />
      <path d="m27.76 29.76a5.944 5.944 0 0 1 4.24-1.76 6 6 0 1 1 -6 6 5.944 5.944 0 0 1 1.76-4.24z" fill="#fee9ab" />
      <circle cx="28" cy="47" fill="#9cdd05" r="2" />
      <circle cx="20" cy="47" fill="#ff3051" r="2" />
      <path d="m9 41h6v4h-6z" fill="#ff3051" />
      <path d="m9 37h6v4h-6z" fill="#ff9811" />
      <path d="m9 33h6v4h-6z" fill="#ffcd00" />
      <path d="m9 29h6v4h-6z" fill="#9cdd05" />
      <path d="m9 25h6v4h-6z" fill="#2488ff" />
      <path d="m59 10h-54a3 3 0 0 0 -3 3v38a3 3 0 0 0 3 3h54a3 3 0 0 0 3-3v-38a3 3 0 0 0 -3-3zm1 41a1 1 0 0 1 -1 1h-54a1 1 0 0 1 -1-1v-38a1 1 0 0 1 1-1h54a1 1 0 0 1 1 1z" />
      <path d="m55 14h-46a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h46a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1zm-1 4h-44v-2h44z" />
      <path d="m32 27a7 7 0 1 0 7 7 7.008 7.008 0 0 0 -7-7zm0 12a4.992 4.992 0 0 1 -4.167-7.753l3.46 3.46 1.414-1.414-3.46-3.46a5 5 0 1 1 2.753 9.167z" />
      <path d="m18 22h28v2h-28z" /><path d="m18 27h4v2h-4z" /><path d="m18 32h4v2h-4z" />
      <path d="m18 36h4v2h-4z" /><path d="m18 40h4v2h-4z" /><path d="m42 27h4v2h-4z" />
      <path d="m42 32h4v2h-4z" /><path d="m42 36h4v2h-4z" /><path d="m42 40h4v2h-4z" />
      <path d="m20 44a3 3 0 1 0 3 3 3 3 0 0 0 -3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z" />
      <path d="m28 44a3 3 0 1 0 3 3 3 3 0 0 0 -3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z" />
      <path d="m36 44a3 3 0 1 0 3 3 3 3 0 0 0 -3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z" />
      <path d="m44 44a3 3 0 1 0 3 3 3 3 0 0 0 -3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z" />
      <path d="m15 24h-6a1 1 0 0 0 -1 1v20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-20a1 1 0 0 0 -1-1zm-1 2v2h-4v-2zm-4 10v-2h4v2zm4 2v2h-4v-2zm-4-6v-2h4v2zm0 12v-2h4v2z" />
      <path d="m55 24h-6a1 1 0 0 0 -1 1v20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-20a1 1 0 0 0 -1-1zm-1 2v2h-4v-2zm-4 10v-2h4v2zm4 2v2h-4v-2zm-4-6v-2h4v2zm0 12v-2h4v2z" />
      </g>
      </svg>);