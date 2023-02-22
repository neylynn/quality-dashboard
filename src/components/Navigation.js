import React from "react";
//internal
import MenuItem from "./MenuItem";
//assets
import Logo from "../bp-logo.png";
import DashboardIcon from "../logo.svg";
import DashboardIconActive from "../logo.svg";
//@material-ui
import { Drawer } from "@mui/material";
import { List } from "@mui/material";
import { useStyles } from "../styles";

const Navigation = () => {
    const classes = useStyles();
    return (
        <div>
            <Drawer classes={{ paper: classes.navigationDrawer }}
                    variant="permanent" 
                    open={true}>
                <div className={ classes.navigationLogoContainer }>
                    <img className={ classes.navigationLogo } src={Logo} alt="Quality Logo" />
                </div>
                <List className={classes.navigationList}>
                    <MenuItem label="Dashboard" icon={ DashboardIcon } activeIcon={ DashboardIconActive } path="/" />
                </List>
            </Drawer>
        </div>
    );
}

export default Navigation;