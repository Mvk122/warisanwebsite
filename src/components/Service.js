import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width:"100%",
      height: "100%"
    },
}));

function Service({header, description, icon}) {
    const classes = useStyles();
    return (
        <div style={{height: "100%"}}>

        <Card className={classes.root} variant="outlined">
            <CardContent>
                <div>
                    {icon}
                </div>
                <Typography gutterBottom variant="h5" component="h2">
                    {header}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="secondary" href="/contact">Contact Us</Button>
            </CardActions>

        </Card>
        </div>
    )
}

export default Service