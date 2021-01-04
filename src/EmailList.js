import React from 'react';
import './EmailList.css';

import {Checkbox, IconButton} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import SettingsIcon from '@material-ui/icons/Settings';

import Section from './Section';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

import EmailRow from './EmailRow';

function EmailList() {
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>

            <div className="emailList__sections">
                <Section Icon={InboxIcon} title="primary" color="red" selected />
                <Section Icon={PeopleIcon} title="social" color="#1A73E8"  />
                <Section Icon={LocalOfferIcon} title="promotions" color="green"  />
            </div>

            <div className="emailList__list">
                <EmailRow
                    title="Developer"
                    subject="About the gmail clone"
                    description="This clone is amazing , i am working on this clone since today 3 pm "
                    time="3:00 AM"
                />

                <EmailRow
                    title="MoneyView"
                    subject="Stock market is Open"
                    description="start investing before close at 3.30 "
                    time="9:15 AM"
                />
                 <EmailRow
                    title="Github"
                    subject="3rd party authentication"
                    description="please  review your github if not "
                    time="10:00 AM"
                />

                <EmailRow
                    title="Drive"
                    subject="sammed requested access"
                    description="request for the access to your drive "
                    time="10:30 AM"
                />

                 <EmailRow
                    title="Dev community"
                    subject="Welcome to Dev.to!"
                    description="dev community welcomes you "
                    time="10:31 AM"
                />

                <EmailRow
                    title="Github"
                    subject="3rd party authentication"
                    description="please  review your github if not "
                    time="10:35 AM"
                />

                <EmailRow
                    title="Drive"
                    subject="pillu requested access"
                    description="request for the access to your drive "
                    time="10:38 AM"
                />

                <EmailRow
                    title="Developer"
                    subject="About the gmail clone"
                    description="This clone is amazing , i am working on this clone since today 3 pm "
                    time="3:00 AM"
                />

                <EmailRow
                    title="MoneyView"
                    subject="Stock market is Open"
                    description="start investing before close at 3.30 "
                    time="9:15 AM"
                />
                 <EmailRow
                    title="Github"
                    subject="3rd party authentication"
                    description="please  review your github if not "
                    time="10:00 AM"
                />

                <EmailRow
                    title="Drive"
                    subject="sammed requested access"
                    description="request for the access to your drive "
                    time="10:30 AM"
                />

                 <EmailRow
                    title="Dev community"
                    subject="Welcome to Dev.to!"
                    description="dev community welcomes you "
                    time="10:31 AM"
                />

                <EmailRow
                    title="Github"
                    subject="3rd party authentication"
                    description="please  review your github if not "
                    time="10:35 AM"
                />

                <EmailRow
                    title="Drive"
                    subject="pillu requested access"
                    description="request for the access to your drive "
                    time="10:38 AM"
                />

            </div>

        </div>
    )
}

export default EmailList
