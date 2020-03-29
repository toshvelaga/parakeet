import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import QRcode from '../../components/QRcode/QRcode'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';

import './Customize.css'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import firebase from '../../../firebase/fbConfig'
import validateEmail from '../../../assets/emailValidation'

let db = firebase.firestore();

class Customize extends Component {
    constructor(props) {
        super()
    }
    state = { 
        businessName: '',
        managerEmail: '',
     }

    changeHandler = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }

    // validateEmail = (email) => {
    //     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(String(email).toLowerCase());
    // }

    onSubmit = () => {
        const email = this.state.managerEmail

        if (validateEmail(email) === false) {
            alert("The email you entered is invalid")
        } else
        
        db.collection("users").doc(this.props.auth.uid).set({
            businessName: this.state.businessName,
            managerEmail: this.state.managerEmail,
        }, { merge: true })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }

    render() { 
        const { auth } = this.props
        console.log(auth)

        if (!auth.uid) return <Redirect to='/signin' />

        console.log(this.state.businessName)
        console.log(this.state.managerEmail)

        return (
        <div>
            <Navbar />
            <h2>Customize</h2>

            <div className="outerDiv">

            <TextField
                id="businessName"
                style={{ margin: '1rem', width: '80%' }}
                placeholder="Enter name of restaurant"
                margin="dense"
                size="small"
                helperText="Will be used to generate custom QR code*"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                onChange={this.changeHandler}
                required
            />

            <TextField
                id="managerEmail"
                style={{ margin: '1rem', width: '80%' }}
                placeholder="Enter manager's email"
                margin="dense"
                size="small"
                helperText="Will recieve negative feedback*"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                onChange={this.changeHandler}
                required
            />

            <br></br><br></br>
            <QRcode />
            <br></br><br></br>

            <Button variant="outlined" color="primary">Export QR Code</Button>

            </div>        

            <div>            
                {/* <Button style={{color: 'green', border: '1px solid green', width: '15%', marginTop: '2rem'}} variant="outlined" color="primary">Save</Button> */}
                <Button onClick={this.onSubmit} style={{width: '20%', marginTop: '2rem', marginBottom: '2rem', color: 'white', backgroundColor: '#0378d8'}} variant="contained" color="primary" size="large" startIcon={<SaveIcon />}>
                    Save
                </Button>
            </div>

        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
 
export default connect(mapStateToProps, null)(Customize);