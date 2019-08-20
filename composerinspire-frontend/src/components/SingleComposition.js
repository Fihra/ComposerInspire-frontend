import React from 'react';
import SongreferenceCard from './SongreferenceCard';
import ScaleCard from './ScaleCard';
import JotCard from './JotCard';
import InstrumentCard from './InstrumentCard';
import { Grid, Segment } from 'semantic-ui-react';

class SingleComposition extends React.Component {
    state = {
        class: "hidden",
        done: false
    }

    goingBack = () =>{
        this.props.history.push("/compositions/");
    }

    handleEditClick = () => {
        if(this.state.class === "hidden"){
            this.setState({
              class: "show"
            })
          } else{
            this.setState({
              class: "hidden"
            })
          }
        }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateTitle(this.props.comp)
        this.props.history.goBack();
        // this.props.history.push(`/compositions/${this.props.comp.id}`)
    }
    /* Song Reference Functions */
    showSongReferences = (songRefs) => {
        return songRefs.map((song, i) => {
            return <SongreferenceCard key={i} song={song} deleteSongRef={this.props.deleteSongRef}/>
        })
    }

    handleSongRefClick = () => {
        this.props.history.push(`/compositions/${this.props.comp.id}/newsongreference`)
    }
    /* ------------------------- */

    /* Scales Functions */
    showScales = (scales) => {
        return scales.map((scale, i) => {
            return <ScaleCard key={i} scale={scale} deleteScale={this.props.deleteScale}/>
        })
    }

    handleScaleClick = (e) => {
        this.props.history.push(`/compositions/${this.props.comp.id}/newscale`)
    }
    /* ---------------- */

    showJots = (jots) => {
        return jots.map((jot, i) => {
            return <JotCard key={i} jot={jot} deleteJot={this.props.deleteJot}/>
        })
    }

    handleJotClick =(e) => {
        this.props.history.push(`/compositions/${this.props.comp.id}/newjot`)
    }

    /* Instruments Functions */
    showInstruments = (instruments) => {
        return instruments.map((instrument, i) => {
            return <InstrumentCard key={i} instrument={instrument} deleteInstrument={this.props.deleteInstrument}/>
        })
    }

    /* --------------------- */

       render(){
        const {title} = this.props.comp

        return(
            <div>
            <Segment>
                <Grid columns={3} relaxed='very'>
                    <Grid.Column>
                    <h3>{title} <button onClick={this.handleEditClick}>Edit</button></h3>
                    {!this.state.done && (
                    <form className={this.state.class} onSubmit={(e) => this.handleSubmit(e)}>
                        <input name="formTitleName" type="text" value={this.props.formTitleName} onChange={this.props.handleTitleInput}></input>
                        <input type="submit" value="Submit"/>
                    </form>)}
                    <button onClick={(e) => this.handleJotClick(e)}>Quick Jot</button>
                        {this.props.comp.jots ? this.showJots(this.props.compJots) : <div></div>}
                    </Grid.Column>

                    <Grid.Column>
                        <h4>Song References<button onClick={(e) => this.handleSongRefClick(e)}>+</button></h4>
                        {this.props.compRefs ? this.showSongReferences(this.props.compRefs): <div></div>}
                    </Grid.Column>
                
                    <Grid.Column>        
                        <h4>Saved Scales<button onClick={(e) => this.handleScaleClick(e)}>+</button></h4>
                        {this.props.compScales ? this.showScales(this.props.compScales): <div></div>}
                    </Grid.Column>

                    <Grid.Column>        
                        <h4>Saved Instruments</h4>
                        {this.props.compInstruments ? this.showInstruments(this.props.compInstruments): <div></div>}
                    </Grid.Column>
                </Grid>
                {/* <Divider vertical></Divider> */}
            </Segment>
            </div>
        )
    }
    
}

export default SingleComposition;