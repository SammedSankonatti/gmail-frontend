import React from 'react';
import './Sidebar.css';

import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="large" />} className="sidebar__compose" > Compose </Button>
        </div>
    )
}

export default Sidebar;
