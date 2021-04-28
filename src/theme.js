import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#652D90'
        },
        background: {
            default: "#ffffff"
        },
        secondary: {
            main: "#00A551"
        },
        tertiary: {
            main: "#00ADEE"
        }
    },
    typography: {
        "fontFamily": `"Ubuntu", "Helvetica", "Arial", sans-serif`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
        allVariants : {
            color: "#652D90" 
        },
        h2: {
            "fontFamily": `"Audiowide", "Helvetica", "Arial", sans-serif`,
        },
        h3: {
            "fontFamily": `"Audiowide", "Helvetica", "Arial", sans-serif`,
        },
        h4: {
            "fontFamily": `"Audiowide", "Helvetica", "Arial", sans-serif`,
        },
        button : {
            "fontFamily": `"Audiowide", "Helvetica", "Arial", sans-serif`,
        }
    },
}
)

export default theme;