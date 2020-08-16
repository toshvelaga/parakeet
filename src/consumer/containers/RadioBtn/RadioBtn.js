import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";

class RadioBtn extends Component {
  state = {};
  render() {
    return (
      <>
        <FormControl style={{ float: "left" }} component="fieldset">
          <FormControlLabel
            value="end"
            control={<Checkbox color="secondary" />}
            label={
              <Typography style={{ color: "#afafaf" }}>
                Send directly to manager
              </Typography>
            }
            labelPlacement="end"
          />
        </FormControl>
      </>
    );
  }
}

export default RadioBtn;
