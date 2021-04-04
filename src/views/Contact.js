import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import HeaderAppBar from '../components/HeaderAppBar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1)
    },
}))

const Contact = props => {
    const { history } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <HeaderAppBar />
        </div>
    )
}

export default Contact;