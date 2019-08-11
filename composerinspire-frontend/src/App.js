import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import CompositionContainer from './containers/CompositionContainer';
import SingleComposition from './components/SingleComposition';
import NewComposition from './components/NewComposition';


const compositionsURL = "http://localhost:3000/compositions"

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      user: "",
      /* All Compositions */
      compositions: [],
      /* One Composition */
      selectedComp: [],

      /* New Composition State */
      newTitleForm: "",


      /*Update Title State */
      titleName: "Change Title",
      formTitleName: ""
    }
  }

  /* Fetch all compositions*/
  fetchCompositions = () => {
    fetch(compositionsURL)
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        compositions: json
      })
    })
  }
   /*-------------------- */

  componentDidMount(){
    this.fetchCompositions()
  }

  /* Show One Composition */
  showOneComp = (comp) => {
    this.setState({
      selectedComp: comp
    })  
  }
  /*-------------------- */

  /* Add New Composition */
  handleNewCompInput = (event) => {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitNewComp = (e) => {
    fetch(`${compositionsURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        title: this.state.newTitleForm,
        user_id: 1
      })
    })
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        compositions: [...this.state.compositions, json]
      })
    })
  }

  /* ------------------- */ 

  /* Edit Title of Composition */
  handleTitleInput = (event) => {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  updateTitle = (event, comp) => {

    let newTitle = this.state.formTitleName

    fetch(`${compositionsURL}/${comp.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        title: newTitle
      })
    })
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        selectedComp: json
      })
    })
  }
  /*-------------------------- */

  /* Delete Composition */

  // deleteComp = (comp) => {
  //   let newComps;
  //   return newComps = this.state.compositions.filter((aComp) => {
  //      return aComp.id !== comp
  //   })
  //   this.setState({
  //     compositions: newComps
  //   })
  // } 

  fetchDeleteComp = (comp) => {
    fetch(`${compositionsURL}/${comp.id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        compositions: json
      })
    })
  }

  /*-------------------- */
 
  render(){
    return (
     
      <Router>
        <div>
        <Navbar />
        {/* Home */}
        <Route exact path='/' component={Home} />
        {/* Signup */}
        <Route exact path='/signup' component={SignUp} />
        {/* Login */}
        <Route exact path='/login' component={Login} />
        {/* Composition Container */}
        <Route exact path='/compositions' render={ (routerProps) => (<CompositionContainer {...routerProps} allComps={this.state.compositions} showOneComp={this.showOneComp} fetchDeleteComp={this.fetchDeleteComp}/>)}/>
        {/* Single Composition */}
        <Route exact path='/compositions/:id'render={(routerProps) => (<SingleComposition {...routerProps}comp={this.state.selectedComp} handleTitleInput={this.handleTitleInput} updateTitle={this.updateTitle} /> )}/>
        {/* New Composition */}
        <Route exact path='/newcomposition' render={(routerProps) => (<NewComposition {...routerProps} handleNewCompInput={this.handleNewCompInput} submitNewComp={this.submitNewComp}/>)} />
        </div>
      </Router> 
    )
  }

}

export default App;
