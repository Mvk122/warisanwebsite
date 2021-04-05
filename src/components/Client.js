import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    client: {
        textAlign: "center",
        padding: theme.spacing(2)
    }
}))

function Client({description, link, logo, companyname}) {
    const classes = useStyles();
    const [boxwidth, setBoxwidth] = useState(0)
    const [showndescription, setShowndescription] = useState("");
    const [shownName, setShownname] = useState("");

    //true if enter, false if leaving
    function mouseOverEvent(enter) {
        if (enter) {
            setShowndescription(description);
            setShownname(companyname);
            setBoxwidth(4)
        } else {
            setShowndescription("")
            setShownname("")
            setBoxwidth(0)
        }
    }

    return (
        <Box border={boxwidth} borderColor="primary.main" borderRadius={16} onMouseEnter={()=> mouseOverEvent(true)} onMouseLeave={()=> mouseOverEvent(false)} onClick={()=> console.log("swag")}>
        <Link href="/testimonials" color="inherit" style={{ textDecoration: 'none' }}>
        <div className={classes.client}>
            <img src={logo} alt="company logo" style={{resizeMode:"contain", flex:1, maxWidth:"100%", heigth:null}}/>
            <Typography variant="h6" gutterBottom>
                {shownName}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                {showndescription}
            </Typography>
        </div>
            </Link>
        </Box>
    )

}

export default Client;