import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import headerimage from "../img/headerimg1.png";
import eaglelogo from '../img/clients/eaglelogo.png';
import medinel from '../img/clients/medinel.png';
import eeagleex from '../img/clients/eeagleex.png';
import baratas from '../img/clients/baratas.png';
import edusphere from '../img/clients/edusphere.png';

import solutionimg1 from "../img/solution1.png";
import solutionimg2 from "../img/solution2.png";
import solutionimg3 from "../img/solution3.png";

import Grid from '@material-ui/core/Grid';

import Solution from '../components/Solution.js';
import HeaderAppBar from '../components/HeaderAppBar.js';
import Footer from '../components/Footer.js';
import Client from '../components/Client.js';

import { Helmet } from "react-helmet"

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
        [theme.breakpoints.up('md')] : {
            transform: "translate(100px, 0px)",
        },
        [theme.breakpoints.down('md')] : {
            transform: "translate(50px, 0px)",
        },
    },
    itemgrid: {
        paddingTop: theme.spacing(6),
        paddingLeft: theme.spacing(1)
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
    herodiv : {
        [theme.breakpoints.down('md')]: {
            width: "100%",
            textAlign: "center"
        },
        [theme.breakpoints.up('md')]: {
            width: "50%",
        },
    },
    herotext : {
        [theme.breakpoints.down('md')]: {
            textAlign: "center"
        },
    }

}))

const Frontpage = props => {
    const { history } = props
    const classes = useStyles();

    function HeroText() {
        return (
            <React.Fragment>
                <Typography variant="h2" gutterBottom className={classes.herotext}>
                    WARISAN STRATEGIC 
                    <br/> ADVISORY
                </Typography>
                <div className={classes.herodiv}>
                    <Typography variant="subtitle1" gutterBottom>
                        Warisan Strategic Advisory is a Malaysian IT & Management Consultancy. We specialise in providing affordable, innovative digital business solutions for SMEs. Our bespoke range of technology, marketing and consulting solutions help SMEs transform and grow their business. If you are an SME please do get in touch for a no obligation discussion.
                    </Typography>
                    <div style={{paddingTop:"1em"}}>
                    <Button variant="contained" color="primary" onClick={()=> history.push("/contact")}>
                        CONTACT US
                    </Button> 
                    </div>
                </div>
            </React.Fragment>
        )
    }

    function Clients() {
        return (
            <React.Fragment>
                <Grid container spacing={5} direction="row" justify="flex-start" alignItems="flex-start" className={classes.servicesgrid}>
                    <Grid item xs={12}>
                    <div style={{textAlign:"center"}}>
                        <Typography variant="h2" gutterBottom >
                            Our Previous Clients
                        </Typography>
                    </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Client link="adhadhaskdjads" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget felis dui. Suspendisse aliquet nibh " logo={eaglelogo} companyname="Eagle Eyes Water"/>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Client link="adhadhaskdjads" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget felis dui. Suspendisse aliquet nibh " logo={medinel} companyname="Medinel"/>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Client link="adhadhaskdjads" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget felis dui. Suspendisse aliquet nibh " logo={eeagleex} companyname="EeagleEx"/>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Client link="adhadhaskdjads" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget felis dui. Suspendisse aliquet nibh " logo={edusphere} companyname="Edu Sphere"/>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Client link="adhadhaskdjads" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget felis dui. Suspendisse aliquet nibh " logo={baratas} companyname="Baratas Telawi"/>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }

    function Solutions() {
        return (
            <React.Fragment>
                <Grid container spacing={5} direction="row" justify="center" alignItems="stretch" className={classes.servicesgrid}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Solution solutionText="Data Analytics & Business Insights"
                            solutionDescription="We help you clean, filter, and visualise data gathered from business operations. Our team will provide a comprehensive report and advise on business insights, trends and patterns enabling you to make better decisions."
                            solutionImg={solutionimg1}
                            taglines={["Big Data Analytics", "Inventory Management", "Agile Development", "Data Migration"]}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Solution solutionText="Digital Media Management"
                            solutionDescription="Our Digital Nurturing Programme builds and manages your e-commerce & digital presence and marketing platforms. This includes a custom e-commerce enabled website, Shopee, Lazada, Facebook, Instagram, Twitter, TikTok, YouTube, Spotify and more." 
                            solutionImg={solutionimg2}
                            taglines={["Website Development", "SEO Management", "Digital Marketting", "Media Production", "Web Security", "Custom Software Solutions", "Content Management Services", "e-Commerce Solutions"]}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Solution solutionText="Warisan Business Suite"
                            solutionDescription="Our flagship solution designed for fledgling companies. WBS audits and optimises all business functions. It is ideal for SMEs and Start-Ups looking for an affordable and effective all-in-one solution that handles all their strategic, management, marketing and digital needs."
                            solutionImg={solutionimg3}
                            taglines={["Business Consultation", "Finance Consultation", "Business Registration"]}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Solution solutionText="Distribution Optimisation"
                            solutionDescription="Sales are the lifeblood of any SME. Our Distribution Optimisation solution audits, optimises and transforms your sales function. It is ideal for retail focused SMEs in the launch-phase or looking to expand."
                            solutionImg={solutionimg3}
                            taglines={["Business Consultation", "Finance Consultation", "Business Registration"]}/>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }

    return (
        <div className={classes.root}>
            <Helmet>
                <title>Home | Warisan Strategic Advisory</title>
                <meta property="og:title" content="Home | Warisan Strategic Avisory" />
                <meta property="og:description" content=" Warisan Strategic Advisory is a consulting firm that offers affordable rates to Malaysian SME's, specialising in digital nurturing, marketting, big data analytics, first step solutions and more!" />
            </Helmet>
            <HeaderAppBar />
            <Grid container spacing={1} direction="row" justify="flex-start" alignItems="flex-start" className={classes.itemgrid}>
                <Grid item xs={12} md={4}>
                    <img src={headerimage} alt="header" className={classes.headerImage} width="80%"/>
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
            <Solutions />
            <Clients />
            <Footer />
        </div>
    )
};
export default Frontpage;