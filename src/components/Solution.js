import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    itemgrid: {
        padding: theme.spacing(2)
    },
    cardicon: {
        fontSize: "100px"
    }
}))

function Solution({solutionText, solutionDescription, solutionImg}) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Box border={6} borderColor="primary.main" borderRadius={16}>
                <Grid container spacing={1} direction="row" justify="flex-start" alignItems="flex-start" className={classes.itemgrid}>
                    <Grid item xs={12}>
                        <div style={{textAlign: "center"}}>
                            <img src={solutionImg} width="70%"/>
                            <Typography variant="h4" gutterBottom>
                                {solutionText}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                {solutionDescription}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
}

export default Solution;