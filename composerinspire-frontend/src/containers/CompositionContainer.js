import React from 'react';
import CompositionCard from './CompositionCard';
import { Button, Grid } from 'semantic-ui-react';

class CompositionContainer extends React.Component {
    allCompositions = (allComps) => {
        return <Grid columns={3} divided>
            {allComps.map((comp, i) => (
              <Grid.Column key={i} width={5}><CompositionCard key={i} comp={comp} showOneComp={this.props.showOneComp} fetchDeleteComp={this.props.fetchDeleteComp} /></Grid.Column>
        ))}
        </Grid>
    } 
  /*-------------------- */
    /*Add New Composition Button */
    addButton = () => {
        return <Button onClick={()=> this.props.history.push('/newcomposition')}>[+] Add New Composition</Button>
    }

    render(){
        const { allComps } = this.props
        
        return(
            <div>
                <h2><span role="img">🎼</span> My Compositions<div>{this.addButton()}</div></h2>
                {this.allCompositions(allComps)}
    
            </div>
        )
    }
}

export default CompositionContainer;