import React from 'react';
import AllScales from '../assets/AllScales';
import { Form, Button } from 'semantic-ui-react';

class NewScale extends React.Component{

    showAllScales = () => {
        return Object.keys(AllScales).map((scale, i) =>{
            // console.log(scale)
            let splitScaleName = scale.split("-");
            // splitScaleName[0].charAt(0).toUpperCase();
            let scaleName = splitScaleName.join(' ');
            
            // console.log("Joined: ", scaleName)

            return {
                key: i,
                text: `${scaleName}`,
                value: scale,
                image: { avatar: true, src: AllScales[scale]}
            }
        })
    }

    handleScaleChoice = (event, data) => {
        this.props.handleNewScaleChoice(data.value)
    }

    handleScaleSubmit = () => {
        this.props.submitScale();
        this.props.history.push(`/compositions/${this.props.selectedComp.id}`)
    }

    render(){

        return(
            <div>
                <h2>New Scale Form</h2>
                <Form onSubmit={this.handleScaleSubmit}>
                    <Form.Dropdown
                        className='new-scale-menu'
                        placeholder='Select Scale'
                        fluid search selection
                        onChange={this.handleScaleChoice}
                        options={this.showAllScales()}
                    />
                    <Button className="ui inverted blue button" type="submit">Submit</Button>
                </Form>
                
            </div>
        )
    }
}

export default NewScale;