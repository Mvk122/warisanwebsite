import { makeStyles } from '@material-ui/core/styles';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: "100%"
    },
    content: { 
        background: "rgba(0,0,0,0.1)",
    },
    arrow: {
        transform: "translate(-10%, 20%)",
    }

}))

function Insight({image, text, link, title}) {
    const classes = useStyles();
    return (
       <div className={classes.root}>
           <Paper elevation={2}>
               <CardActionArea href={link} target="_blank">
                    <img src={image} width="100%" alt="Article header" />
                    <CardContent className={classes.content}>
                        <Typography variant="h6" gutterBottom>
                            {title} 
                            <ArrowRightIcon className={classes.arrow} />
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom style={{color:"#000000"}}>
                            {text}
                        </Typography>
                    </CardContent>
               </CardActionArea>
           </Paper>
       </div>   
    )
}

export default Insight;