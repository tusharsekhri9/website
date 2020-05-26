import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
class Header extends Component {
    
    state={
        ScrollStatus: 0
    };
    
    componentDidMount () {      
        window.onscroll =()=>{
            this.setState({ScrollStatus: window.scrollY > 100 ? 1 : 0})
       }
     }
    
    /*alignRight = {
            background: this.state.ScrollStatus === 1 ? "#0000000" : "#3b4658",
            padding: '50px',
            display: 'flex',
            flexDirection: 'column',
            position: '-webkit-sticky',

            top: '0',
            opacity: this.state.ScrollStatus === 1 ? 0.75 : 1
            marginLeft:'auto'
    }*/
    
    render() {
        return (
            <AppBar position="sticky">
                <ButtonGroup size='large' style={{ minHeight:60, justifyContent:'center'}} color="primary" variant="contained" aria-label="outlined primary button group">
                    <Button component={Link} to="/">Home</Button>
                    <Button component={Link} to="/blog_page">Blog Page</Button>
                    <Button component={Link} to="/contact_me">Contact Me</Button>
                </ButtonGroup>
            </AppBar>
        )
    }
}

export default Header
