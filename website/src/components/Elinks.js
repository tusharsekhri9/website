import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import resume from '../images/resume-public.pdf'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';


export class Elinks extends Component {
    state={
        value: 0

    }

    handleChange = (e) => this.setState({ value: e.target.value });

    render() {
        return (
            <BottomNavigation onChange={this.handleChange} style={{paddingBottom:'60px', paddingTop:'60px'}} showLabels>
                <BottomNavigationAction label="Resume" type="button" href={resume} value="resume" icon={<FeaturedPlayListIcon fontSize="large" color="primary" />}></BottomNavigationAction>
                <BottomNavigationAction label="Github" type="button" href="https://github.com/tusharsekhri9" value="github" icon={<GitHubIcon fontSize="large" color="primary" />}> </BottomNavigationAction>
                <BottomNavigationAction label="LinkedIn" type="button" href="https://www.linkedin.com/in/tushar-sekhri-72065b148" value="linkedin" icon={<LinkedInIcon fontSize="large" color="primary" />}> </BottomNavigationAction>
                <BottomNavigationAction label="Facebook" type="button" href="https://www.facebook.com/tushar.sekhri.5" value="facebook" icon={<FacebookIcon fontSize="large" color="primary" />}> </BottomNavigationAction>
            </BottomNavigation>
        )
    }
}

export default Elinks

//<iframe src={resume} title="title">
                