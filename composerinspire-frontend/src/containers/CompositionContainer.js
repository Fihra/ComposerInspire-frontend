import React from 'react';
import CompositionCard from '../components/CompositionCard';
import { Button } from 'semantic-ui-react';

class Composition extends React.Component {
    
    // componentDidMount(){
    //     this.state = {
    //         show: false
    //     }
    // }

    allCompositions = () => {
        return this.props.allComps.map((comp, i) => {
            return <CompositionCard key={i} comp={comp} showOneComp={this.props.showOneComp} fetchDeleteComp={this.props.fetchDeleteComp} />
        })
    } 

    // showNewForm = () => {
    //     this.setState({
    //         show: true
    //     })
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
                <h2>My Compositions</h2>
                {this.allCompositions()}
                <div>
                    {this.addButton()}
                    {/* <button onClick={()=> this.newCompPath('/newcomposition')}>[+] Add New Composition</button> */}
                    {/* <Link to="/newcomposition">[+] Add New Composition</Link> */}


                    {/* {this.state.show && <NewComposition />} */}
                </div>
            </div>
        )
    }
}

export default Composition;