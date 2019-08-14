import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './NewForms/SignUp';
import Login from './components/Login';
import CompositionContainer from './containers/CompositionContainer';
import SingleComposition from './components/SingleComposition';
import NewComposition from './NewForms/NewComposition';
import NewSongRef from './NewForms/NewSongRef';
import NewScale from './NewForms/NewScale';
import NewJot from './NewForms/NewJot';


const compositionsURL = "http://localhost:3000/compositions"
const songreferencesURL = "http://localhost:3000/songreferences"
const scalesURL = "http://localhost:3000/scales"
const jotsURL = "http://localhost:3000/jots"

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      user: "",
      /* All Compositions */
      compositions: [],
      /* One Composition */
      selectedComp: [],

      /* selectedComp to Rerender */
      selectedComp_refs: [],
      selectedComp_scales: [],
      selectedComp_jots: [],

      /* New Composition State */
      newTitleForm: "",

      /*Update Title State */
      titleName: "Change Title",
      formTitleName: "",

      /* New Song Reference State */
      newSongTitle: "",
      newArtist: "",
      newYoutubeURL: "",

      /* New Scale State */
      newScale: "",

      /* New Jot State */
      newJot: ""
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
    // console.log(comp.jots.length)
    let compRefs = comp.songreferences ? comp.songreferences : []
    let compScales = comp.scales ? comp.scales : []
    let compJots = comp.jots ? comp.jots : []
    this.setState({
      selectedComp: comp,
      selectedComp_refs: compRefs,
      selectedComp_scales: compScales,
      selectedComp_jots: compJots
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
      .then(json => {
        this.setState({
          selectedComp_refs: [...this.state.selectedComp_refs, json]
        })
       this.fetchCompositions(); //////HEREREEEEEEE
      })
      
    }

   /* ------------------ */

   /* Delete Song Reference */

    deleteSongRef = (songRef) => {
      let newSelectedComp_refs = this.state.selectedComp_refs.filter((eachRef) => {
        return eachRef !== songRef
      })

      fetch(`${songreferencesURL}/${songRef.id}`,{
        method: "DELETE"
      })
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          selectedComp_refs: newSelectedComp_refs
        })
      })
    }

   /* --------------------- */

    /* New Scale */
    handleNewScaleChoice = (scaleChoice) => {
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
          selectedComp_scales: [...this.state.selectedComp_scales, json],
        })
       this.fetchCompositions(); //////HEREREEEEEEE 
      })
    }

    /* Delete Scale */
    deleteScale = (scale) => {
      let newSelectedComp_scales = this.state.selectedComp_scales.filter((eachScale) => {return eachScale !== scale
      })

      fetch(`${scalesURL}/${scale.id}`, {
        method: "DELETE"
      })
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          selectedComp_scales: newSelectedComp_scales
        })
      })
    }

    /* ----------------- */

    handleNewJotInput = (event) => {
        event.persist();
        this.setState({
          [event.target.name]: event.target.value
        })
      
    }

    submitJot = () => {
      fetch(jotsURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json"
        },
        body: JSON.stringify({
          content: this.state.newJot,
          composition_id: this.state.selectedComp.id
        })
      })
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          selectedComp_jots: [...this.state.selectedComp_jots, json]
        });
        this.fetchCompositions(); //////HEREREEEEEEE
      })
    }

 
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
        <Route exact path='/compositions/:id' render={(routerProps) => (<SingleComposition {...routerProps} comp={this.state.selectedComp} handleTitleInput={this.handleTitleInput} updateTitle={this.updateTitle} deleteSongRef={this.deleteSongRef} compScales={this.state.selectedComp_scales} compRefs={this.state.selectedComp_refs} deleteScale={this.deleteScale} compJots={this.state.selectedComp_jots}/> )}/>
        {/* New Composition */}
        <Route exact path='/newcomposition' render={(routerProps) => (<NewComposition {...routerProps} handleNewCompInput={this.handleNewCompInput} submitNewComp={this.submitNewComp}/>)} />
        {/* New Song Reference */}
        <Route exact path='/compositions/:id/newsongreference' render={(routerProps) => (<NewSongRef {...routerProps} handleNewSongRefInput={this.handleNewSongRefInput} submitNewSongRef={this.submitNewSongRef} selectedComp={this.state.selectedComp} />)} />
        {/* New Scale */}
        <Route exact path='/compositions/:id/newscale' render={(routerProps) => (<NewScale {...routerProps} selectedComp={this.state.selectedComp} handleNewScaleChoice={this.handleNewScaleChoice} submitScale={this.submitScale}/>)}/>
        {/* New Jot */}
        <Route exact path='/compositions/:id/newjot' render={(routerProps) => (<NewJot {...routerProps} selectedComp={this.state.selectedComp} handleNewJotInput={this.handleNewJotInput} submitJot={this.submitJot}/>)}/>

        </div>
      </Router> 
    )
  }
}

export default App;
