import React, { Component } from 'react';
// import './Textarea.css'

import TextField from '@material-ui/core/TextField';

// Need to change color of the textinput on click
// SO answer: https://stackoverflow.com/questions/56803234/reactjs-material-ui-textfield-change-color-label-and-underline-activity-field-in

class Textarea extends Component {
    constructor(props) {
    super(props)
        this.state = { 
            show: 'false',
<<<<<<< HEAD:src/containers/Textarea/Textarea.js
            value: '' }
=======
            value: '',
        }
>>>>>>> master:src/consumer/containers/Textarea/Textarea.js
    }

    onChangeHander = (e) => {
        this.setState({value: e.target.value})
    }

    render() { 
    console.log(this.state.value)
    
    const style = {
        width: '85%',
    } 

    return (<>
        <TextField style={style}
            value={this.state.value}
            onChange={this.onChangeHander}
            id="filled-dense-multiline"
            label={this.props.label}
            margin="dense"
            variant="filled"
            multiline
            rowsMax="6"
            rows="6"
            color={this.props.color}
        />
    </>);
    }
}
 
export default Textarea;

