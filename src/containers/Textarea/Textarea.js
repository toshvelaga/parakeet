import React, { Component } from 'react';
// import './Textarea.css'

import {MDCTextField} from '@material/textfield';

// Need to add more CSS and styling (possibly use bootstrap)
// Material io documentation: https://material.io/develop/web/components/input-controls/text-field/

class Textarea extends Component {
    constructor(props) {
    super(props)
        this.state = {  }
    }

    render() { 
        return (<>
     
            <label class="mdc-text-field mdc-text-field--textarea">
                <div class="mdc-text-field-character-counter">0 / 140</div>
                <textarea class="mdc-text-field__input" aria-labelledby="my-label-id" rows="8" cols="40" maxlength="140"></textarea>
                <div class="mdc-notched-outline">
                    <div class="mdc-notched-outline__leading"></div>
                    <div class="mdc-notched-outline__notch">
                    <span class="mdc-floating-label" id="my-label-id">Textarea Label</span>
                    </div>
                    <div class="mdc-notched-outline__trailing"></div>
                </div>
            </label>
        
            {/* <textarea className="textarea" placeholder={this.props.placeholder} style={{resize: 'none'}} /> */}
        </>);
    }
}
 
export default Textarea;

