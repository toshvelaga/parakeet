import React, { Component } from 'react';

// Need to add more CSS and styling (possibly use bootstrap)

class Textarea extends Component {
    constructor(props) {
    super(props)
        this.state = {  }
    }

    render() { 
        return (<>
            <textarea placeholder={this.props.placeholder} style={{resize: 'none'}} />
        </>);
    }
}
 
export default Textarea;