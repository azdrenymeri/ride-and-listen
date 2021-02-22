import React from 'react';
import './Layout.css';
import { useObserver, observer } from 'mobx-react';
import { useApplicationStore } from './../mobx/Store';
import { initialCitiesList } from '../utils/loadInitialData';

import Signal from './Signal/Signal';
import SidePanel from './SidePanel/SidePanel';
import Video from './SidePanel/Video/Video';


function Layout() {
    const store = useApplicationStore();
    store.cityStore.cities = initialCitiesList();
 
    return (<main className="Layout">
        {store.uiStore.videoState.showVideo ? <Video /> : <Signal message="No Signal" />}
        <SidePanel title="Walk and Listen" />
    </main>);
}

export default observer(Layout)