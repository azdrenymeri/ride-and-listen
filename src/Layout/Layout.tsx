import React from 'react';
import './Layout.css';
import { useObserver } from 'mobx-react';
import { useApplicationStore } from './../mobx/Store';

import Signal from './Signal/Signal';
import SidePanel from './SidePanel/SidePanel';
import Video from './Video/Video';
export default function Layout() {
    const store = useApplicationStore();

    return useObserver(() => (<main className="Layout">
        {store.videoControls.showVideo ? <Video /> : <Signal message="No Signal" /> }    
        <SidePanel title="Walk and Listen" />
    </main>));
}