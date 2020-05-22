import React, { Component } from 'react'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography'

export class BlogPage extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
      
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    render() {
        return (
            <Box style={{marginLeft:'40px', marginTop:'40px', justifyContent:'center', display:'flex',}}>
                <Typography variant='p'>My First Blog coming soon</Typography><br></br>
                <CircularProgress />
            </Box>
        )
    }
}

export default BlogPage
