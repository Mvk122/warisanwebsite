import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { useHistory } from "react-router-dom";
import Link from '@material-ui/core/Link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';


const useStyles = makeStyles((theme) => ({
    header: {
        color: "#ffffe3",
        background: "transparent",
        boxShadow: "none"
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
        fontSize: "40px",
        color: "#ffffe3"
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
                                <ListItemIcon> <AccountBalanceIcon className={classes.appbaricon}/></ListItemIcon>
                                <ListItemText primary="WARISAN STRATEGIC ADVISORY" />
                            </ListItem>
                            <Divider className={classes.dividertheme} variant="middle"/>
                            <ListItem button onClick={()=> history.push("/")}>
                                <ListItemText primary="HOME"></ListItemText>
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="SOLUTIONS"></ListItemText>
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="TESTIMONIALS" onClick={() => history.push("/testimonials")}></ListItemText>
                            </ListItem>                            
                            <ListItem button>
                                <ListItemText primary="BLOG"></ListItemText>
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
                <Typography variant="h6" className={classes.title}>
                    <Link href="/" color="inherit" style={{ textDecoration: 'none' }}>
                        WARISAN STRATEGIC ADVISORY
                    </Link>
                </Typography>
                    <Button color="inherit" onClick={()=> history.push("/")}>HOME</Button>
                    <Button color="inherit">SOLUTIONS</Button>
                    <Button color="inherit" onClick={() => history.push("/testimonials")}>TESTIMONIALS</Button>
                    <Button color="inherit">BLOG</Button>
                    <Button color="inherit" onClick={()=> history.push("/contact")}>CONTACT US</Button>
                </Toolbar>
        </AppBar>
    )
}

export default HeaderAppBar;