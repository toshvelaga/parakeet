import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import store from "../../../store/store";
import { connect } from "react-redux";

class Textarea extends Component {
  render() {
    const style = {
      width: "85%",
    };

    return (
      <>
        <TextField
          style={style}
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
      </>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    textValue: state.textValue,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    inputChanged: (e) => {
      const action = { type: "TEXTAREA_CHANGE", text: e.target.value };
      store.dispatch(action);
    },
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Textarea);
