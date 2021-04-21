import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import HeaderAppBar from '../components/HeaderAppBar';
import Footer from '../components/Footer.js';
import Insight from '../components/Insight.js';

import funding from '../img/insights/funding.jpg';
import GameStop2 from '../img/insights/gamestop2.jpg';
import GameStop1 from '../img/insights/gamestop1.jpg';

import { Helmet } from "react-helmet"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1),
    },
    servicesgrid: {
        [theme.breakpoints.down('md')]: { 
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            paddingTop: theme.spacing(2),
            backgroundColor: "transparent"
        },
        [theme.breakpoints.up('md')] : {
            display: "flex",
            paddingLeft: theme.spacing(10),
            paddingRight: theme.spacing(10),
            paddingTop: theme.spacing(2),
            backgroundColor: "transparent",
            height: "100%"
        }
    },
}))

const Insights = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Insights | Warisan Strategic Advisory</title>
                <meta property="og:title" content="Insights | Warisan Strategic Avisory" />
                <meta property="og:description" content="Get the latest insights and industry knowledge from Warisan Think's research team" />
            </Helmet>
            <HeaderAppBar />
            <div style={{textAlign: "center"}}>
                <Typography variant="h2" gutterBottom>
                    WARISAN INSIGHTS
                </Typography>
            </div>
            <Grid container spacing={5} direction="row" justify="center" alignItems="stretch" className={classes.servicesgrid}>
                <Grid item xs={12} sm={6} md={4}>
                    <Insight 
                        image={funding}
                        title="Financing Programs for Malaysian SMEs"
                        text="With Malaysia’s SME landscape expanding and the number of hobbies turning into services or products being sold online during the pandemic, many would be thinking of scaling up their startup into a full time business. One of the ways to reach that goal is acquiring funding. With the countless number of options to acquire fundings, we decided to give a quick summary of government-backed loan and funding schemes that you may apply for to expand your business!"
                        link="https://www.instagram.com/p/CNUhBuTLi_U/"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Insight 
                        image={GameStop2}
                        title="The GameStop Controversy Part 2"
                        text="The GameStop Controversy: Part 2. Learn about RobinHood, a financial services company and how they played a role in the controversy."
                        link="https://www.instagram.com/p/CMJ5ZlMhdv_/"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Insight 
                        image={GameStop1}
                        title="The GameStop Controversy"
                        text="GameStop's stock price rose rapidly in an unprecedented assault by retail traders on established financial players. Here's a breakdown of what exactly happened and the ensuing fallout. "
                        link="https://www.instagram.com/p/CL1XazjBxYC/"
                    />
                </Grid>
            </Grid>

            <Footer />
        </div>

    )
};

export default Insights;