// eslint-disable-next-line
import react from 'react';
import './Layout.css';

import Signal from './Signal/Signal';
import SidePanel from './SidePanel/SidePanel';
import Video from './Video/Video';
export default function Layout() {
    return (<main className="Layout">
        <Video />
        {/* <Signal message="No Signal" /> */}
        <SidePanel title="Walk and Listen" />
    </main>);
}