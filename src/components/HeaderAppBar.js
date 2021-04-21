import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { useHistory } from "react-router-dom";
import Link from '@material-ui/core/Link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

//Imports for the drawer
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItemIcon } from '@material-ui/core';

import WarisanLogo from '../img/WSALOGO1.png';


const useStyles = makeStyles((theme) => ({
    header: {
        color: "#00ADEE",
        background: "transparent",
        boxShadow: "none",
        width: "100%",
        display: 'flex'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontWeight: 700,
    },
    drawerlist: {
        width: 300
    },
    drawertheme: {
        background: theme.palette.background.default
    },
    dividertheme: {
        background: theme.palette.primary.main
    },
    appbaricon: {
        width: "7%",
        color: "#00ADEE"
    },
    appButton: {
        [theme.breakpoints.down('xs')]: { display: 'none', }
    },
    logo: {
        [theme.breakpoints.down('xs')]: {
            width: "10em"
        },
        [theme.breakpoints.up('sm')]: { 
            paddingLeft: theme.spacing(4),
            width: "17%"
        }

    }
}))

const HeaderAppBar = props => {
    const classes = useStyles();
    const [draweropen, setDraweropen] = useState(false);
    const history = useHistory();
    function AppDrawer(){
        return (
            <React.Fragment>
                <Drawer open={draweropen} anchor="left" onClose={()=> setDraweropen(false)} variant="temporary" classes={{paper: classes.drawertheme}}>
                    <div className={classes.drawerlist}>
                        <List>
                            <ListItem button onClick={()=> history.push("/")}>
                                <ListItemIcon><img src={WarisanLogo} className={classes.appbaricon} alt="home" /></ListItemIcon>
                            </ListItem>
                            <Divider className={classes.dividertheme} variant="middle"/>
                            <ListItem button onClick={()=> history.push("/")}>
                                <ListItemText primary="HOME"></ListItemText>
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="TESTIMONIALS" onClick={() => history.push("/testimonials")}></ListItemText>
                            </ListItem>                            
                            <ListItem button>
                                <ListItemText primary="INSIGHTS"></ListItemText>
                            </ListItem>                            
                            <ListItem button onClick={() => history.push("/contact")}>
                                <ListItemText primary="CONTACT US"></ListItemText>
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
            </React.Fragment>
        )
    }

    return (
        <AppBar position="static" className={classes.header}>
            <AppDrawer />
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => setDraweropen(true)}>
                    <MenuIcon />
                </IconButton>
                <Link href="/">
                    <img src={WarisanLogo} className={classes.logo} alt="Warisan Logo" />
                </Link>
                <div style={{ display:'flex'}}>
                    <Button color="inherit" className={classes.appButton} onClick={()=> history.push("/")}>HOME</Button>
                    <Button color="inherit" className={classes.appButton} onClick={() => history.push("/testimonials")}>TESTIMONIALS</Button>
                    <Button color="inherit" className={classes.appButton} >INSIGHTS</Button>
                    <Button color="inherit" className={classes.appButton} onClick={()=> history.push("/contact")}>CONTACT</Button>
                </div>
                </Toolbar>
        </AppBar>
    )
}

export default HeaderAppBar;