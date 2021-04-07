import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import headerimage from "../img/headerimg.png";
import client1 from '../img/clients/client1.png';

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
        transform: "translate(100px, 0px)",
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
            paddingLeft: theme.spacing(10),
            paddingRight: theme.spacing(10),
            paddingTop: theme.spacing(2),
            backgroundColor: "transparent"
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
                    Consulting tends to be a pricey option available to corporates with deep coffers. At Warisan we aim to deliver similar strategic value at affordable rates to Malaysia's SMEs in an effort to catalyse the drive into becoming a high-income nation. 
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
                        <Client link="adhadhaskdjads" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget felis dui. Suspendisse aliquet nibh " logo={client1} companyname="Google"/>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Client link="adhadhaskdjads" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget felis dui. Suspendisse aliquet nibh " logo={client1} companyname="Google"/>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Client link="adhadhaskdjads" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget felis dui. Suspendisse aliquet nibh " logo={client1} companyname="Google"/>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Client link="adhadhaskdjads" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget felis dui. Suspendisse aliquet nibh " logo={client1} companyname="Google"/>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }

    function Solutions() {
        return (
            <React.Fragment>
                <Grid container spacing={5} direction="row" justify="flex-start" alignItems="flex-start" className={classes.servicesgrid}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Solution solutionText="S.H.I.F.T Consultancy"
                            solutionDescription="Strategic, Holistic, Informative, Functional and Transformative. In today's dynamic economic landscape, it is imperative that businesses constantly evolve and transform to stay ahead of the curve. SHIFT is our premier end-to-end offering tailored for our SME clients to futureproof their businesses."
                            solutionImg={solutionimg1}
                            taglines={["Big Data Analytics", "Inventory Management", "Agile Development", "Data Migration"]}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Solution solutionText="Digital Media Management"
                            solutionDescription="At Warisan we help our digital creator clients achieve their ambitions by providing a one-stop solution package that includes strategy, implementation, analytics and management." 
                            solutionImg={solutionimg2}
                            taglines={["Website Development", "SEO Management", "Digital Marketting", "Media Production", "Web Security", "Custom Software Solutions", "Content Management Services"]}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Solution solutionText="First Step Solutions"
                            solutionDescription="Looking to start your own business but not sure where to turn? Need help planning or executing your next project? Let us guide you. Our FIRST Step Solutions provide budding entrepreneurs with operational, analytical and strategic help to get their start-up off the ground efficiently."
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