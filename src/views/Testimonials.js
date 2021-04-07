import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import client1 from '../img/clients/client1.png';

import HeaderAppBar from '../components/HeaderAppBar';
import Footer from '../components/Footer.js';
import Testimony from '../components/Testimony.js';

import { Helmet } from "react-helmet"


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1),
    },
}))

const Testimonials = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Helmet>
                <title>Testimonials | Warisan Strategic Advisory</title>
            </Helmet>
            <HeaderAppBar />
            <div style={{textAlign:"center"}}>
                <Typography variant="h2" gutterBottom >
                    Testimonials From Our Clients
                </Typography>
            </div>
            <Testimony logo={client1}
                companyname="Google"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia quam eget velit aliquet vulputate. Nam consectetur, massa id condimentum egestas, leo lectus molestie risus, sit amet imperdiet sapien nisl vel neque. Fusce sit amet aliquam est, quis ultrices enim. Pellentesque vestibulum auctor dapibus. Integer nisi nulla, commodo accumsan dictum ut, imperdiet vitae mauris. Sed dapibus in sem vel vestibulum. Phasellus lobortis quam vel felis varius, at congue dolor maximus. "
                />
            <Testimony logo={client1}
                companyname="Google"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia quam eget velit aliquet vulputate. Nam consectetur, massa id condimentum egestas, leo lectus molestie risus, sit amet imperdiet sapien nisl vel neque. Fusce sit amet aliquam est, quis ultrices enim. Pellentesque vestibulum auctor dapibus. Integer nisi nulla, commodo accumsan dictum ut, imperdiet vitae mauris. Sed dapibus in sem vel vestibulum. Phasellus lobortis quam vel felis varius, at congue dolor maximus. "
                />
            <Testimony logo={client1}
                companyname="Google"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia quam eget velit aliquet vulputate. Nam consectetur, massa id condimentum egestas, leo lectus molestie risus, sit amet imperdiet sapien nisl vel neque. Fusce sit amet aliquam est, quis ultrices enim. Pellentesque vestibulum auctor dapibus. Integer nisi nulla, commodo accumsan dictum ut, imperdiet vitae mauris. Sed dapibus in sem vel vestibulum. Phasellus lobortis quam vel felis varius, at congue dolor maximus. "
                />
            <Testimony logo={client1}
                companyname="Google"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia quam eget velit aliquet vulputate. Nam consectetur, massa id condimentum egestas, leo lectus molestie risus, sit amet imperdiet sapien nisl vel neque. Fusce sit amet aliquam est, quis ultrices enim. Pellentesque vestibulum auctor dapibus. Integer nisi nulla, commodo accumsan dictum ut, imperdiet vitae mauris. Sed dapibus in sem vel vestibulum. Phasellus lobortis quam vel felis varius, at congue dolor maximus. "
                />
            <Footer />
        </div>
    )
};

export default Testimonials;