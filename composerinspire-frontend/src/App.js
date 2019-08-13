import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './NewForms/SignUp';
import Login from './components/Login';
import CompositionContainer from './containers/CompositionContainer';
import SingleComposition from './components/SingleComposition';
import NewComposition from './NewForms/NewComposition';
import NewSongRef from './NewForms/NewSongRef';
import NewScale from './NewForms/NewScale';


const compositionsURL = "http://localhost:3000/compositions"
const songreferencesURL = "http://localhost:3000/songreferences"
const scalesURL = "http://localhost:3000/scales"

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      user: "",
      /* All Compositions */
      compositions: [],
      /* One Composition */
      selectedComp: [],

      /*TODO: Song References State based on selectedComp */
      selectedComp_refs: [],//TODO!!!

      selectedComp_scales: [],

      /* New Composition State */
      newTitleForm: "",

      /*Update Title State */
      titleName: "Change Title",
      formTitleName: "",

      /* New Song Reference State */
      newSongTitle: "",
      newArtist: "",
      newYoutubeURL: "",

      newScale: ""

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
      selectedComp: comp,
      selectedComp_refs: comp.songreferences,
      selectedComp_scales: comp.scales
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

  updateTitle = (comp) => {

    let newTitle = this.state.formTitleName

    fetch(`${compositionsURL}/${comp.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        title: newTitle,
        user_id: 1
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

   /* New Song Reference */
    handleNewSongRefInput = (event) => {
      event.persist();
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    submitNewSongRef = (comp) => {
      console.log(comp)
      let submission = {
        song_title: this.state.newSongTitle,
        artist: this.state.newArtist,
        youtube_url: this.state.newYoutubeURL,
        composition_id: this.state.selectedComp.id
      }

      fetch(`${songreferencesURL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json"
        },
        body: JSON.stringify(submission)
      })
      .then(resp => resp.json())
    }

   /* ------------------ */

   /* Delete Song Reference */

    deleteSongRef = (songRef) => {
      fetch(`${songreferencesURL}/${songRef.id}`,{
        method: "DELETE"
      })
      .then(resp => resp.json())
    }
    //Pass the function to the SongreferenceCard Component
   /* --------------------- */

    /* New Scale */
    handleNewScaleChoice = (scaleChoice) => {
      // event.persist();
      console.log(scaleChoice)
      this.setState({
        newScale: scaleChoice
      })
    }

    submitScale = () => {
      fetch(scalesURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json"
        },
        body: JSON.stringify({
          scale_name: this.state.newScale,
          composition_id: this.state.selectedComp.id
        })
      })
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          selectedComp_scales: [...this.state.selectedComp_scales, json]
        })
      })
    }

    /* Delete Scale */
    

    /* ----------------- */

 
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
        <Route exact path='/compositions/:id' render={(routerProps) => (<SingleComposition {...routerProps} comp={this.state.selectedComp} handleTitleInput={this.handleTitleInput} updateTitle={this.updateTitle} deleteSongRef={this.deleteSongRef} compScales={this.state.selectedComp_scales} compRefs={this.state.selectedComp_refs}/> )}/>
        {/* New Composition */}
        <Route exact path='/newcomposition' render={(routerProps) => (<NewComposition {...routerProps} handleNewCompInput={this.handleNewCompInput} submitNewComp={this.submitNewComp}/>)} />
        {/* New Song Reference */}
        <Route exact path='/compositions/:id/newsongreference' render={(routerProps) => (<NewSongRef {...routerProps} handleNewSongRefInput={this.handleNewSongRefInput} submitNewSongRef={this.submitNewSongRef} selectedComp={this.state.selectedComp} />)} />
        {/* New Scale */}
        <Route exact path='/compositions/:id/newscale' render={(routerProps) => (<NewScale {...routerProps} selectedComp={this.state.selectedComp} handleNewScaleChoice={this.handleNewScaleChoice} submitScale={this.submitScale}/>)}/>
        </div>
      </Router> 
    )
  }
}

export default App;
