import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography'

class RadioBtn extends Component {
    state = {  }
    render() { 
        return (<>    
        <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="end"
            control={<Checkbox color="secondary" />}
            label={<Typography style={{ color: '#afafaf' }}>Send directly to manager</Typography>}
            labelPlacement="end"
          />
        </FormGroup>
      </FormControl>
      </>);
    }
}
 
export default RadioBtn;


