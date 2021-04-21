import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    itemgrid : {
        padding: theme.spacing(3)
    },
}))

//logo: image | companyname : str | description : str | alignment : boolean, true for left, false for right
function Testimony({logo, companyname, description, }) {
    const classes = useStyles();
        return (
            <Grid container spacing={1} direction="row" justify="flex-start" alignItems="flex-start" className={classes.itemgrid}>
                <Grid item xs={12} sm={3}>
                    <img src={logo} alt="company logo" style={{resizeMode:"contain", flex:1, maxWidth:"100%", maxHeight:"20em"}}/>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <div style={{paddingLeft: "2em"}}>
                        <Typography variant="h4" gutterBottom>
                            {companyname}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {description}
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        )
}

export default Testimony;