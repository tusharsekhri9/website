import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Elinks from './components/Elinks';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import BlogPage from './components/BlogPage';
import DetailedLook from './components/DetailedLook';
import ContactMe from './components/ContactMe';
import Home from './components/Home';
import axios from 'axios';

class App extends Component {
  state = {
    status: ''
  }
  addMessage = (n, e, c) => {
    axios
      .post('http://localhost:5000/message', {
        name: n,
        email: e,
        content: c
      })
      .then(res => {
        console.log("Test");
        this.setState({ status: res.status });
      });
  };

  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/blog_page" component={BlogPage} />
        <Route path="/contact_me" render={(props) => <ContactMe addMessage={this.addMessage} status={this.state.status} />} />
        <Elinks />
      </Router>       
    );
  }
}

export default App;
