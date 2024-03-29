import React, { Component } from "react";
import ParakeetHeader from "../../components/ParakeetHeader/ParakeetHeader";
import "./Email.css";
import { withRouter } from "react-router-dom";
import validateEmail from "../../../utils/emailValidation";
import store from "../../../store/store";

// firestore documentation: https://firebase.google.com/docs/firestore/query-data/get-data

class Email extends Component {
  state = { value: "" };

  InputHandler = (e) => {
    this.setState({ value: e.target.value });
  };

  onSubmit2 = () => {
    const email = this.state.value;

    if (validateEmail(email) === false) {
      alert("The email you entered is invalid");
    } else {
      const action = { type: "SUBMIT_EMAIL", text: this.state.value };
      store.dispatch(action);
      this.props.history.push("/" + this.props.match.params.uid + "/rating");
    }
  };

  render() {
    return (
      <div>
        <ParakeetHeader />

        <input
          value={this.state.value}
          onChange={this.InputHandler}
          className="emailInput"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        ></input>
        <button onClick={this.onSubmit2} className="emailButton">
          Submit
        </button>
      </div>
    );
  }
}

export default withRouter(Email);
