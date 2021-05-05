import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Helmet } from "react-helmet"

import HeaderAppBar from "../components/HeaderAppBar";
import Footer from "../components/Footer";
import Service from "../components/Service";

import ApartmentIcon from '@material-ui/icons/Apartment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ComputerIcon from '@material-ui/icons/Computer';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import FacebookIcon from '@material-ui/icons/Facebook';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import WebIcon from '@material-ui/icons/Web';
import LanguageIcon from '@material-ui/icons/Language';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import CreateIcon from '@material-ui/icons/Create';
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import VisibilityIcon from '@material-ui/icons/Visibility';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import TableChartIcon from '@material-ui/icons/TableChart';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import StoreIcon from '@material-ui/icons/Store';
import StorageIcon from '@material-ui/icons/Storage';
import FastForwardIcon from '@material-ui/icons/FastForward';
import TimelineIcon from '@material-ui/icons/Timeline';
import AssessmentIcon from '@material-ui/icons/Assessment';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1)
    },
    servicesgrid: {
        [theme.breakpoints.down('md')]: { 
            dispplay: "flex",
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
    icon: {
        fontSize: "4em",
        padding: theme.spacing(1)
    }
}))

const Services = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Services | Warisan Strategic Advisory</title>
                <meta property="og:title" content="Services | Warisan Strategic Advisory" />
                <meta property="og:description" content="Use Warisan's large array of strategy, IT, creative and data analytics tools to improve your business." />
            </Helmet>
            <HeaderAppBar />
            <div style={{textAlign: "center"}}>
                <Typography variant="h2" gutterBottom>
                    OUR SERVICES
                </Typography>

                <Typography variant="h4" gutterBottom>
                    STRATEGY
                </Typography>
                <Grid container spacing={3} direction="row" justify="center" alignItems="stretch" className={classes.servicesgrid}>
                    <Grid item xs={6} sm={4} md={3}>
                        <Service header="Marketing" description="Get your brand's message and products in the hearts and minds of potential customers." icon={<ApartmentIcon color="primary" className={classes.icon}/>}/>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Service header="Sales" description="Improve your sales strategy by optimising for the sales avenues that best benefit your business. " icon={<AttachMoneyIcon color="primary" className={classes.icon}/>} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Service header="IT" description="Reduce computational cost and complexity by consulting with our IT Strategists on a compute architecture specific for your business." icon={<ComputerIcon color="primary" className={classes.icon}/>} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Service header="Human Resources" description="Our HR Strategy helps you find the right people to accelerate your business growth. Through our proprietary Talent Development Framework, we empower, upskill, and grow your workforce to maintain your competitive advantage. " icon={<AccessibilityNewIcon color="primary" className={classes.icon}/>} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Service header="Digital Marketing" description="Digitally empower and reach a wider target audience by marketing your business to consumers over the internet." icon={<MonetizationOnIcon color="primary" className={classes.icon}/>} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Service header="Branding" description="Improve your advertising's retention and click through rates with a superior branding strategy." icon={<FacebookIcon color="primary" className={classes.icon}/>} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Service header="Funnel Building" description="Improve your sales conversion rate with funnel building that better guides prospective leads through your customer experience." icon={<DeviceHubIcon color="primary" className={classes.icon}/>} />
                    </Grid>
                </Grid>

                <Typography variant="h4" gutterBottom style={{paddingTop:"2em"}}>
                    Information Technology
                </Typography>
                <Grid container spacing={3} direction="row" justify="center" alignItems="stretch" className={classes.servicesgrid}>
                    <Grid item xs={6} sm={4} md={3}>
                        <Service header="Website Development" description="Partner on a customized online presence that suits your company's branding and purpose." icon={<WebIcon color="primary" className={classes.icon}/>} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Service header="Website Management" description="Eliminate web service downtime, iteratively improve your web services and streamline your content management systems." icon={<LanguageIcon color="primary" className={classes.icon}/>} />
                    </Grid> 
                    <Grid item xs={6} sm={4} md={3}>
                        <Service header="Search Engine Optimization" description="Optimise your web content to be prioritised by search engines and appear at the top of valued customers' search results." icon={<SearchIcon color="primary" className={classes.icon}/>} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Service header="Shopee Management" description="Deploy, manage and advertise your products on shopee to kickstart your e-commerce business." icon={<ShoppingCartIcon color="primary" className={classes.icon}/>} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Service header="Lazada Management" description="Deploy, manage and advertise your products on lazada to kickstart your e-commerce business." icon={<LocalMallIcon color="primary" className={classes.icon}/>} />
                    </Grid>
                </Grid>

                <Typography variant="h4" gutterBottom style={{paddingTop:"2em"}}>
                    Creative
                </Typography>
                <Grid container spacing={3} direction="row" justify="center" alignItems="stretch" className={classes.servicesgrid}>
                    <Grid item xs={6} sm={4} md={3}>
                        <Service header="Graphic Design" description="Improve your visual communication and advertisements through high quality custom graphic designs." icon={<ArtTrackIcon color="primary" className={classes.icon}/>} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Service header="Copywriting" description="Connect with customers and improve internal communication with concise and informative copywriting." icon={<CreateIcon color="primary" className={classes.icon}/>} />
                    </Grid>
                </Grid>

                <Typography variant="h4" gutterBottom style={{paddingTop:"2em"}}>
                    Data
                </Typography>
                <Grid container spacing={3} direction="row" justify="center" alignItems="stretch" className={classes.servicesgrid}>
                    <Grid item xs={6} sm={4} md={3}>
                        <Service header="Data Cleaning" description="Remove inaccurate, broken or faulty data and improve the data your business collects to gain a clearer understanding from your data analytics." icon={<LocalLaundryServiceIcon color="primary" className={classes.icon}/>}/>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Service header="Data Scraping" description="Collect valuable data from publically available or proprietary sources to optimise your products and sales strategy." icon={<AccountTreeIcon color="primary" className={classes.icon}/>} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Service header="Data Visualisation" description="Understand and properly communicate your data internally and with clients to improve your sales and product strategy." icon={<VisibilityIcon color="primary" className={classes.icon}/>} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Service header="Power BI" description="Unify data from many sources to create interactive, immersive dashboards and reports that provide actionable insights and drive business results through Microsoft's PowerBI." icon={<GraphicEqIcon color="primary" className={classes.icon}/>} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Service header="Excel VBA" description="Improve productivity by automating tasks in Microsoft Excel." icon={<TableChartIcon color="primary" className={classes.icon}/>} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Service header="Big Data Analytics" description="Analyze and systematically extract information from your data sets that are too large or complex to be dealt with by traditional data-processing application software." icon={<PermDataSettingIcon color="primary" className={classes.icon}/>} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Service header="Inventory Management" description="Systematically source, store and track your inventory and reduce overhead." icon={<StoreIcon color="primary" className={classes.icon}/>} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Service header="Data Migration" description="Migrate your data seamlessly and without interruption to business functions between clound infrastructures and local deployments." icon={<StorageIcon color="primary" className={classes.icon}/>} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Service header="Agile Development" description="Improve your productivity based on iterative development, where requirements and solutions evolve through collaboration between self-organizing cross-functional teams." icon={<FastForwardIcon color="primary" className={classes.icon}/>} />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Service header="Analytics Reports" description="Generate actionable insights and drive business results through comprehensive analytics reports to make data-driven decisions based on evidence and analytics." icon={<TimelineIcon color="primary" className={classes.icon}/>}/>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Service header="Insight Reports" description="Use data analytics and research methods to discover the reasons for observed behaviours in your strategies and business." icon={<AssessmentIcon color="primary" className={classes.icon}/>} />
                    </Grid>
                </Grid>

            </div>
            <Footer />
        </div>
    )
}

export default Services;