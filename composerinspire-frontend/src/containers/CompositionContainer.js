import React from 'react';
import CompositionCard from '../components/CompositionCard';
import NewComposition from '../NewForms/NewComposition';
import { BrowserRouter as Link } from 'react-router-dom';

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

    render(){
        
        return(
            <div>
                {console.log(this.props)}
                <h2>My Compositions</h2>
                {this.allCompositions()}
                <div>
                    
                    <button onClick={()=> this.newCompPath('/newcomposition')}>[+] Add New Composition</button>
                    {/* <Link to="/newcomposition">[+] Add New Composition</Link> */}


                    {/* {this.state.show && <NewComposition />} */}
                </div>
            </div>
        )
    }
}

export default Composition;