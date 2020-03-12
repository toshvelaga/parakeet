import React, { Component } from 'react';
// import './Textarea.css'

import TextField from '@material-ui/core/TextField';

// Need to change color of the textinput on click
// SO answer: https://stackoverflow.com/questions/56803234/reactjs-material-ui-textfield-change-color-label-and-underline-activity-field-in


class Textarea extends Component {
    constructor(props) {
    super(props)
        this.state = {  }
    }

    render() { 

    const style = {
        width: '85%'
    } 
    return (<>
        <TextField style={style}
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

