import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import HeaderAppBar from '../components/HeaderAppBar';
import Footer from '../components/Footer.js';
import constants from '../constants.js';

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
        width: "70em",
    },
    inputtheme: {
        color: "#ffffe3"
    },
    submitbutton: {
        width: "70em",
        paddingTop: theme.spacing(1)
    }
}))

const Contact = props => {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("")
    const [responsemessage, setResponsemessage] = useState("")

    //TODO make this functional
    function handleSubmit(event){
        event.preventDefault();
        setResponsemessage("Your message has been delivered to us, we will contact you by email shortly!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    }

    return (
        <div className={classes.root}>
            <HeaderAppBar />
            <Grid container spacing={0} direction="row" className={classes.itemgrid}>
                <Grid item xs={12}>
                    <div style={{textAlign: "center"}}>
                        <Typography variant="h2" gutterBottom>
                            CONTACT US
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div style={{textAlign:"center"}}>
                        <MailOutlineIcon className={classes.icons} />
                        <Typography variant="subtitle1" gutterBottom>
                            {constants.email}
                        </Typography>
                    </div>                    
                </Grid>
                <Grid item xs={4}>
                    <div style={{textAlign:"center"}}>
                        <LocationOnIcon className={classes.icons} />
                        <Typography variant="subtitle1" gutterBottom>
                            {constants.location}
                        </Typography>
                    </div>                    
                </Grid>
                <Grid item xs={4}>
                    <div style={{textAlign:"center"}}>
                        <PhoneIcon className={classes.icons}/>
                        <Typography variant="subtitle1" gutterBottom>
                            {constants.phone}
                        </Typography>
                    </div>                    
                </Grid>
            </Grid>
            <Grid container spacing={1} direction="column" justify="center" alignItems="center">
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Grid item xs={12}>
                        <div style={{padding:"5px", width:"100%"}}>
                        <TextField label="YOUR NAME" id="name" variant="filled" value={name} onInput={e=> setName(e.target.value)} InputProps={{className: classes.inputtheme}} className={classes.textentry}/>
                        </div>                    
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{padding:"5px"}}>
                        <TextField label="YOUR EMAIL ADDRESS" id="email" variant="filled" value={email} onInput={e=> setEmail(e.target.value)} InputProps={{className: classes.inputtheme}} className={classes.textentry}/>
                        </div>                    
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{padding:"5px"}}> 
                        <TextField label="SUBJECT" variant="filled" id="subject" value={subject} onInput={e=> setSubject(e.target.value)} InputProps={{className: classes.inputtheme}} className={classes.textentry}/>
                        </div>                    
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{padding:"5px"}}> 
                        <TextField label="MESSAGE" id="message" multiline rows={6}variant="filled" value={message} onInput={e=> setMessage(e.target.value)} InputProps={{className: classes.inputtheme}} className={classes.textentry}/>
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
            </Grid>
            <Footer />
        </div>
    )
}

export default Contact;