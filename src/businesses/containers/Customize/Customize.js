import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import QRcode from "../../components/QRcode/QRcode";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import "./Customize.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import firebase from "../../../firebase/fbConfig";
import validateEmail from "../../../utils/emailValidation";

let db = firebase.firestore();

class Customize extends Component {
  constructor(props) {
    super();
  }
  state = {
    businessName: "",
    managerEmail: "",
  };

  changeHandler = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = () => {
    const email = this.state.managerEmail;

    if (validateEmail(email) === false) {
      alert("The email you entered is invalid");
    } else
      db.collection("users")
        .doc(this.props.auth.uid)
        .set(
          {
            businessName: this.state.businessName,
            managerEmail: this.state.managerEmail,
          },
          { merge: true }
        )
        .then(function () {
          console.log("Document successfully written!");
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div>
        <Navbar />
        <h2>Customize</h2>
        <div className="outerDiv">
          <TextField
            id="businessName"
            style={{ margin: "1rem", width: "80%" }}
            label="Enter name of restaurant"
            margin="dense"
            size="small"
            helperText="Will be used to create awareness on twitter"
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={this.changeHandler}
            required
          />

          <TextField
            id="managerEmail"
            style={{ margin: "1rem", width: "80%" }}
            label="Enter manager's email"
            margin="dense"
            size="small"
            helperText="He/she recieve negative feedback"
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={this.changeHandler}
            required
          />

          <div>
            <QRcode />
          </div>
        </div>

        <div>
          <Button
            className="outerDiv"
            onClick={this.onSubmit}
            style={{
              marginTop: "2rem",
              marginBottom: "2rem",
              color: "white",
              backgroundColor: "#0378d8",
            }}
            variant="contained"
            color="primary"
            size="large"
          >
            Save
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, null)(Customize);
