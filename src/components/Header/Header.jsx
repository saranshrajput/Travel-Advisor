import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import {AppBar, Toolbar, Typography,InputBase, Box} from '@material-ui/core';
import { CallMissedSharp } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles.js';
const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant ="h5" className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box display="flex">
                    <Typography variant ="h5" className={classes.title}>
                        Explore New Places
                    </Typography>
                    {/* <Autocomplete> */}
                        <div className={classes.search}>
                            <div classesName={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeHolder="Search..." classes={{root: classes.inputRoot, input: classes.inputInput}}/>
                        </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;