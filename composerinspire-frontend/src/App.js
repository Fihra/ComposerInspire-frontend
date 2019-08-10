import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import CompositionContainer from './containers/CompositionContainer';
import SingleComposition from './components/SingleComposition';


const compositionsURL = "http://localhost:3000/compositions"

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      user: "",
      compositions: [],
      selectedComp: []
    }
  }

  componentDidMount(){
    fetch(compositionsURL)
    .then(resp => resp.json())
    .then(json =>  {
      this.setState({
        compositions: json
      })
    })
  }

  showOneComp = (comp) => {
    this.setState({
      selectedComp: comp
    })  
  }

  editTitle = (comp) => {
    console.log(comp)
    // fetch(`compositionsURL/${comp.id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Accepts": "application/json",
    //     "Content-Type": "application/json" 
    //   },
    //   body: JSON.stringify({

    //   })
    // })
  }
 
  render(){
    return (
     
      <Router>
        <div>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/compositions' render={ (routerProps) => (<CompositionContainer {...routerProps}allCompositions={this.state.compositions} showOneComp={this.showOneComp}/>)}/>
        <Route exact path='/compositions/:id'render={(routerProps) => (<SingleComposition {...routerProps}comp={this.state.selectedComp}/>)}/>
        </div>
      </Router> 
    )
  }

}

export default App;
