import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

class App extends React.Component {
  render(){
    return (
     
      <Router>
        <div>
        <Navbar />
        <Route path='/' component={Home} />
        </div>
      </Router> 
    )
  }

}

export default App;
