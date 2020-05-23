import React, { Component, Fragment } from 'react'
import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles'
import { withStyles } from "@material-ui/core/styles";

let theme = createMuiTheme({
    breakpoints: {
        values: {
          xs: 0,
          sm: 400,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
    },
});
theme.typography.h5 = {
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
    textAlign:'right'
    },
};
const styles= theme=> ({
    root: {
        [theme.breakpoints.up('jk')]: {
            display:'flex',
            justifyContent:'center',
        }

    }
});



//style={{display:'flex', justifyContent:'center'}}

class Skills extends Component {
    
 
    render() {
        const {classes} = this.props
        var languages = ['C', 'C++', 'TypeScript', 'Python', 'SQL', 'Scheme'];
        var tools = ['ReactJS', 'Angular', 'NodeJS', 'ASP.NET', 'RestAPI'];
        var databases = ['MongoDB', 'MySQL']
        var languages_render = []
        var tools_render = []
        var databases_render = []

        for (const [index,value] of languages.entries()) {
            languages_render.push(<Chip size='medium' label={value} variant="outlined" />)
        }
        for (const [index,value] of tools.entries()) {
            tools_render.push(<Chip size='medium' label={value} variant="outlined" />)
        }
        for (const [index, value] of databases.entries()) {
            databases_render.push(<Chip size='medium'label={value} variant="outlined" />)
        }

        return (
            <ThemeProvider theme={theme} >
            <Grid container="true" spacing={3} alignItems="center" style={{marginTop:'40px', padding:'10px'}}>
                <Grid item xs={12} sm={12} ><Typography variant='h4' align="center">Technologies</Typography></Grid>
                <Grid item xs={12} sm={5} ><Typography variant='h5' >Languages</Typography></Grid>
                <Grid item xs={12} sm={7} className={classes.root}>{languages_render}</Grid> 
                <Grid item xs={12} sm={5}><Typography variant='h5' >Tools</Typography></Grid>
                <Grid item xs={12} sm={7} >{tools_render}</Grid> 
                <Grid item xs={12} sm={5}><Typography variant='h5' >Databases</Typography></Grid>
                <Grid item xs={12} sm={7} >{databases_render}</Grid> 
            </Grid>
            </ThemeProvider>
            
        )
    }
}

export default withStyles(styles)(Skills);
