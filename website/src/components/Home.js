import React, { Component, Fragment } from 'react'
import me from '../images/me.jpg'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import tangam from '../images/tangam.png';
import ttc from '../images/ttc.png';
import wcdsb from '../images/wcdsb.png'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea'
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Skills from './Skills.js'

/*const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      color: "#ffffff"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));*/
let theme = createMuiTheme();
theme.typography.h4 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
    fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
    },
};
theme.typography.h6 = {
    fontSize: '1.0rem',
    '@media (min-width:600px)': {
    fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
    },
};
theme.typography.p = {
    fontSize: '1.0rem',
    '@media (min-width:600px)': {
    fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
    },
};

export class Home extends Component {
    theme_used = theme;
    
    render() {
        return (
            <ThemeProvider theme={this.test}>
                <Grid container="true" spacing={2} alignItems="center" style={{marginTop:'40px'}}>
                        <Grid container item xs={6} sm={7} direction="column" alignItems="flex-end" justify="center">    
                            <Grid item xs={12}><Typography variant='h4' align="center">Hi, I'm Tushar Sekhri</Typography></Grid>
                            <Grid item xs={12}><Typography variant='h6' align="center">Welcome to My World</Typography></Grid>
                        </Grid>
                        <Grid container item xs={6} sm={5} sm={4} justify="flex-start" alignItems="center">
                            <img src={me} alt=""/>
                        </Grid>
                        <Grid container item direction="column" alignItems="center" style={{marginTop:'20px'}}>    
                            <Grid item><Typography variant='h4' align="center">About Me</Typography></Grid>
                            <Grid item style={{maxWidth:'800px'}}><Typography component='p' variant='p' style={{textAlign:"justify", padding:'20px'}}>I am a 3rd year Computer Science student at the University of Waterloo. I am a highly motivated student with a passion for algorithmic problem-solving and application of modern technologies. I seek out opportunities to apply and develop my software skills through hackathons, work opportunites and side projects. Through these experiences, I have developed a passion for working on a team, take a leadership role, and performing well in high-pressure environments. </Typography></Grid>
                        </Grid>
                        <Grid container spacing={2} item direction="column" alignItems="center" style={{marginTop:'20px'}}>    
                            <Grid item><Typography variant='h4' align="center">Experience</Typography></Grid>
                            <Grid container spacing={2} item direction='row' alignItems='center' justify='center' style={{maxWidth:'800px'}}>
                                <Grid item sm={4} xs={12} style={{display:"flex", justifyContent:"center"}}>
                                    <Card style={{width:'200px', height:'400px' }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                //height="200px"
                                                //width="200px"
                                                image={tangam}
                                                title="Tangam Systems"
                                                style={{width:'200px', height:'200px'}}
                                            />
                                            <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
                                                Tangam Systems
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"center"}}>
                                                Software Developer
                                            </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>     
                                </Grid>
                                <Grid item sm={4} xs={12} style={{display:"flex", justifyContent:"center"}}> <Card style={{width:'200px', height:'400px'}}>
                                        <CardActionArea>
                                            <CardMedia 
                                                component="img"
                                                //height="=200px"
                                                //width="200px"
                                                image={ttc}
                                                title="Tangam Systems"
                                                style={{width:'200px', height:'200px'}}
                                            />
                                            <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
                                                Toronto Transit Commission
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"center"}}>
                                                Software Developer
                                            </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card> </Grid>
                                <Grid item sm={4} xs={12} style={{display:"flex", justifyContent:"center"}}>
                                <Card style={{width:'200px', height:'400px'}}>
                                        <CardActionArea>
                                            <CardMedia 
                                                component="img"
                                                //height="200px"
                                                //width="200px"
                                                image={wcdsb}
                                                title="Tangam Systems"
                                                style={{width:'200px', height:'200px'}}
                                            />
                                            <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
                                                Waterloo Catholic District School Board
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"center"}}>
                                                Software Developer
                                            </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card> 
                                </Grid>
                            </Grid>


                        </Grid>
                    </Grid>
                    <Skills />
            </ThemeProvider>
        )
    }
}

export default Home

/*<img src={me} alt=""/>
                <div className={this.classes.root}>
                <Grid container spacing={3} >
        <Grid item xs={12}>
          <Paper >xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper >xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={this.classes.paper()}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={this.classes.paper()}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={this.classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={this.classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={this.classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
      </div>

    <div>
    <Grid container spacing={3}>
      <Grid item xs={12}>
          <Paper className={this.classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={this.classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={this.classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={this.classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={this.classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={this.classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={this.classes.paper}>xs=3</Paper>
        </Grid>
        </Grid>
      </div>*/
/*<Container >
                <Row>
                    <Col xs="3"><img src={me} alt=""/></Col>
                    <Col xs="6"></Col>         
                </Row>
                
            </Container>*/


         /*   <Button
                    variant="contained"
                    href={resume}
                >
                    Submit
                </Button>*/



/*<Grid item xs={6}>
                            <Paper >xs=6</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper>xs=3</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper>xs=3</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper>xs=3</Paper>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper>xs=3</Paper>
                        </Grid>
                        */