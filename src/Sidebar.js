import React from 'react';
import './Sidebar.css';

import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';
import SendSharpIcon from '@material-ui/icons/SendSharp';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function Sidebar() {
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large" />} className="sidebar__compose" > Compose </Button>
            <SidebarOption Icon={ InboxIcon} title="Inbox" number={18} selected={true} />
            <SidebarOption Icon={ StarIcon} title="Starred" number={17} />
            <SidebarOption Icon={ WatchLaterSharpIcon} title="Snoozed" number={7} />
            <SidebarOption Icon={ SendSharpIcon} title="Sent" number={17} />
            <SidebarOption Icon={ InsertDriveFileIcon} title="Drafts" number={17} />
            <SidebarOption Icon={ KeyboardArrowDownIcon} title="More" />

        </div>
    )
}

export default Sidebar;
