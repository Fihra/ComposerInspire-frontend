import React from 'react';
import CompositionCard from '../components/CompositionCard';
import { Button, Grid } from 'semantic-ui-react';

class CompositionContainer extends React.Component {

    allCompositions = () => {
        return <Grid columns={3} divided>
            {this.props.allComps.map((comp, i) => (
              <Grid.Column width={5}><CompositionCard key={i} comp={comp} showOneComp={this.props.showOneComp} fetchDeleteComp={this.props.fetchDeleteComp} /></Grid.Column>
        ))}
        </Grid>
    } 

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
                <h1><span role="img">🎼</span> My Compositions<div>{this.addButton()}</div></h1>
                {this.allCompositions()}
    
            </div>
        )
    }
}

export default CompositionContainer;