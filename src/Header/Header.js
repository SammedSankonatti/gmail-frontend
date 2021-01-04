import React from 'react'
import './Header.css';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import {Avatar , IconButton} from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://www.logo.wine/a/logo/Gmail/Gmail-Logo.wine.svg" alt="gmail-logo" />
            </div>
            <div className="header__middle">
                <SearchIcon />
                <input type="text" placeholder="search mail" />
                <ArrowDropDownIcon  className="header__inputCaret" />
            </div>
            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <Avatar />
            </div>
        </div>
    )
}

export default Header;
