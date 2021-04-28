import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import HeaderAppBar from '../components/HeaderAppBar';
import Footer from '../components/Footer.js';
import constants from '../constants.js';

import { Helmet } from "react-helmet"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1),
    },
    itemgrid: {
        paddingTop: theme.spacing(3),
        padding: theme.spacing(2),
    },
    icons: {
        fontSize: "3em",
    },
    textentry: {
        width: "100%",
    },
    inputtheme: {
    },
    submitbutton: {
        width: "100%",
        paddingTop: theme.spacing(1)
    },
    inputdiv: {
        [theme.breakpoints.down('md')]: {
            width: "95%",
        },
        [theme.breakpoints.up('md')]: {
            width: "70%",
        },
    }
}))

const Contact = props => {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("")
    const [responsemessage, setResponsemessage] = useState("")

    //TODO : add error handling to this
    function handleSubmit(event){
        event.preventDefault();
        fetch(constants.backend + "/contact/", {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                subject: subject,
                message: message
            })
        }).then(response => response.json()).then(data => setResponsemessage("Your message has been delivered to us, we will contact you by email shortly!"))
        setResponsemessage("Your message has been delivered to us, we will contact you by email shortly!")
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    }

    return (
        <div className={classes.root}>
            <Helmet>
                <title>Contact | Warisan Strategic Advisory</title>
                <meta property="og:title" content="Home | Warisan Strategic Avisory" />
                <meta property="og:description" content="Get in contact with Warisan Strategic Advisory to optimise your SME business for the new 4th industrial revolution" />
            </Helmet>
            <HeaderAppBar />
            <Grid container spacing={0} direction="row" className={classes.itemgrid}>
                <Grid item xs={12}>
                    <div style={{textAlign: "center"}}>
                        <Typography variant="h2" gutterBottom>
                            CONTACT US
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div style={{textAlign:"center"}}>
                        <MailOutlineIcon className={classes.icons} />
                        <Typography variant="subtitle1" gutterBottom>
                            {constants.email}
                        </Typography>
                    </div>                    
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div style={{textAlign:"center"}}>
                        <WhatsAppIcon className={classes.icons} />
                        <Typography variant="subtitle1" gutterBottom>
                            {constants.whatsapp}
                        </Typography>
                    </div>                    
                </Grid>
                <Grid item xs={12} sm={4}>
                    <div style={{textAlign:"center"}}>
                        <PhoneIcon className={classes.icons}/>
                        <Typography variant="subtitle1" gutterBottom>
                            {constants.phone}
                        </Typography>
                    </div>                    
                </Grid>
            </Grid>
            <Grid container spacing={1} direction="row" justify="center" alignItems="center">
                <div className={classes.inputdiv}>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Grid item xs={12}>
                        <div style={{padding:"5px", width:"100%"}}>
                        <TextField label="YOUR NAME" id="name" variant="outlined" value={name} onInput={e=> setName(e.target.value)} InputProps={{className: classes.inputtheme}} className={classes.textentry}/>
                        </div>                    
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{padding:"5px"}}>
                        <TextField label="YOUR EMAIL ADDRESS" id="email" variant="outlined" value={email} onInput={e=> setEmail(e.target.value)} InputProps={{className: classes.inputtheme}} className={classes.textentry}/>
                        </div>                    
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{padding:"5px"}}> 
                        <TextField label="SUBJECT" variant="outlined" id="subject" value={subject} onInput={e=> setSubject(e.target.value)} InputProps={{className: classes.inputtheme}} className={classes.textentry}/>
                        </div>                    
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{padding:"5px"}}> 
                        <TextField label="MESSAGE" id="message" multiline rows={6}variant="outlined" value={message} onInput={e=> setMessage(e.target.value)} InputProps={{className: classes.inputtheme}} className={classes.textentry}/>
                        </div>                    
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{textAlign:"center", paddingTop:"1em"}}>
                            <Button variant="contained" color="primary" type="submit" className={classes.submitbutton}>
                                SEND
                            </Button>
                            <Typography variant="subtitle1" gutterBottom>
                                {responsemessage}
                            </Typography>
                        </div>
                    </Grid>
                    </form>
                </div>
            </Grid>
            <Footer />
        </div>
    )
}

export default Contact;