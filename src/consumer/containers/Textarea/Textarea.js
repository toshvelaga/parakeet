import React, { Component } from 'react';
// import './Textarea.css'

import TextField from '@material-ui/core/TextField';

import store from '../../../store/store'
import { connect } from 'react-redux';

// Need to change color of the textinput on click
// SO answer: https://stackoverflow.com/questions/56803234/reactjs-material-ui-textfield-change-color-label-and-underline-activity-field-in

class Textarea extends Component {
    constructor(props) {
    super(props)
        this.state = { 
            show: 'false',
            // value: '',
        }
    }

    // onChangeHander = (e) => {
    //     // this.setState({value: e.target.value})
    //     store.dispatch({type: 'TEXTAREA_VALUE'})
    // }

    render() { 
    // console.log(this.state.value)
    
    const style = {
        width: '85%',
    } 

    return (<>
        <TextField style={style}
            value={this.props.textValue}
            onChange={this.props.inputChanged}
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

const mapStatetoProps = (state) => {
    return {
        textValue: state.textValue
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        inputChanged: (e) => {
            console.log('changed', e.target.value)
        }
    }
}
 
export default connect(mapStatetoProps, mapDispatchtoProps)(Textarea);

