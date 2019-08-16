import React from 'react';
import CompositionCard from '../components/CompositionCard';
import { Button, Grid } from 'semantic-ui-react';
import { Link } from "react-router-dom";

class CompositionContainer extends React.Component {

    allCompositions = () => {
        return <Grid columns={3} divided>
            {this.props.allComps.map((comp, i) => (
              <Grid.Column width={5}><CompositionCard key={i} comp={comp} showOneComp={this.props.showOneComp} fetchDeleteComp={this.props.fetchDeleteComp} /></Grid.Column>
        ))}
        </Grid>
    } 
    handleCardClick = (selectedComp) => {
        console.log(this.props.location)
        this.props.showOneComp(selectedComp)

    }

    handleDeleteBtnClick = (selectedComp) => {
        const choice = window.confirm("Are you sure you want to delete this composition?")
        if(choice === true){
            this.props.fetchDeleteComp(selectedComp)
        }
    }

    // allCompositions = () => {
    //     return <Grid columns={3} divided>
    //         {this.props.allComps.map((comp, i) => (
    //           <Grid.Column width={5}>
    //           <Link to={`/compositions/${comp.id}`}>
    //           <h3>{comp.title}</h3></Link>
    //             <button onClick={() => this.handleDeleteBtnClick(comp)}>Delete</button>
    //         </Grid.Column>
    //     ))}
    //     </Grid>
    // } 

    newCompPath = (path) => {
        this.props.history.push(path);
    }

    /*Add New Composition Button */
    addButton = () => {
        return <Button onClick={()=> this.newCompPath('/newcomposition')}>[+] Add New Composition</Button>
    }

    render(){ 
        return(
            <div>
                <h2>🎼 My Compositions<div>{this.addButton()}</div></h2>
                {this.allCompositions()}
    
            </div>
        )
    }
}

export default CompositionContainer;