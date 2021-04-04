import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import headerimage from "../img/headerimg.png";

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Solution from '../components/Solution.js';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1)
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontWeight: 700,
    },
    header: {
        color: "#ffffe3",
        background: "transparent",
        boxShadow: "none"
    },
    headerImage: {
        transform: "translate(100px, 0px)",
    },
    itemgrid: {
        paddingTop: theme.spacing(6),
        paddingLeft: theme.spacing(1)
    },
    servicesgrid: {
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10),
        backgroundColor: "transparent"
    }
}))

const Frontpage = props => {
    const { history } = props
    const classes = useStyles();
 
    function HeaderAppBar() {
        return (
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                <Typography variant="h6" className={classes.title}>
                    WARISAN CONSULTING
                </Typography>
                    <Button color="inherit">ABOUT US</Button>
                    <Button color="inherit">SOLUTIONS</Button>
                    <Button color="inherit">TESTIMONIALS</Button>
                    <Button color="inherit">BLOG</Button>
                    <Button color="inherit">PORTFOLIOS</Button>
                </Toolbar>
            </AppBar>
        )
    }

    function HeroText() {
        return (
            <React.Fragment>
                <Typography variant="h2" gutterBottom>
                    WARISAN CONSULTING 
                    <br/> AND ADVISORY
                </Typography>
                <div style={{width: "50%"}}>
                    <Typography variant="subtitle1" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget felis dui. Suspendisse aliquet nibh sit amet hendrerit venenatis. Aenean at sem et justo laoreet faucibus. Curabitur nibh turpis, fermentum 
                    </Typography>
                    <div style={{paddingTop:"1em"}}>
                    <Button variant="contained" color="primary">
                        CONTACT US
                    </Button> 
                    <Button color="primary">
                        LEARN MORE
                    </Button> 
                    </div>
                </div>
            </React.Fragment>
        )
    }

    return (
        <div className={classes.root}>
            <HeaderAppBar />
            <Grid container spacing={1} direction="row" justify="flex-start" alignItems="flex-start" className={classes.itemgrid}>
                <Grid item xs={12} md={4}>
                    <img src={headerimage} alt="header" className={classes.headerImage}/>
                </Grid>
                <Grid item  xs={12} md={8}>
                    <HeroText />
                </Grid>
                <Grid item xs={12} textAlign="center">
                    <div style={{textAlign:"center"}}>
                        <Typography variant="h2" gutterBottom >
                            Our Solutions
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={5} direction="row" justify="flex-start" alignItems="flex-start" className={classes.servicesgrid}>
            <Grid item xs={12} sm={6} md={4}>
                    <Solution solutionText="Solution One" solutionDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget felis dui. Suspendisse aliquet nibh sit amet hendrerit venenatis. Aenean at sem et justo laoreet faucibus" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Solution solutionText="Solution Two" solutionDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget felis dui. Suspendisse aliquet nibh sit amet hendrerit venenatis. Aenean at sem et justo laoreet faucibus" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Solution solutionText="Solution Three" solutionDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget felis dui. Suspendisse aliquet nibh sit amet hendrerit venenatis. Aenean at sem et justo laoreet faucibus" />
                </Grid>
            </Grid>
        </div>
    )
};
export default Frontpage;