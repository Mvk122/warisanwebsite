import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

import constants from '../constants.js';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: theme.spacing(30),
        height : 150
    },
    dividertheme: {
        background: theme.palette.primary.main,
        textAlign: "center",
        width: "80%",
        transform: "translate(10%, 0)"
    },
    notices: {
        paddingTop: theme.spacing(3),
        paddingLeft: "20%",
    },
    links: {
        paddingTop: theme.spacing(5),
        paddingRight: "25%",
        textAlign: "right",
        alignItems: "right",
        alignContent: "right"
    },
    icons : {
        fontSize: "35px",
        padding: theme.spacing(0),
    }
}))

const Footer = props => {
    const classes = useStyles();
    return (
        
        <div className={classes.root}>
            <Divider className={classes.dividertheme} variant="middle"/>
            <Grid Grid container spacing={1} direction="row" justify="flex-start" alignItems="flex-start">
                <Grid item xs={6}>
                    <div className={classes.notices}>
                        <Typography variant="subtitle1" gutterBottom>
                            © Copyright Warisan Strategic Advisory 2021
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            <Link href="https://storyset.com/work" color="inherit">
                                Illustration by Freepik Storyset
                            </Link>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            <Link href="/contact" color="inherit">
                                Contact Us
                            </Link>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            Created by Madhav Khandhar
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.links}>
                        <IconButton color="inherit" href={constants.linkdin} target="_blank" aria-label="Link to our Linkdin profile" rel="noreferrer">
                            <LinkedInIcon className={classes.icons} />
                        </IconButton>
                        <IconButton color="inherit" href={constants.whatsapplink} aria-label="Link to our Whatsapp Business Contact" >
                            <WhatsAppIcon className={classes.icons} />
                        </IconButton>
                        <IconButton color="inherit" href={constants.instagram} target="_blank" aria-label="Link to our Instagram" >
                            <InstagramIcon className={classes.icons} />
                        </IconButton>
                        <IconButton color="inherit" href={constants.facebook} target="_blank" aria-label="Link to our Facebook" >
                            <FacebookIcon className={classes.icons} />
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
};

export default Footer;