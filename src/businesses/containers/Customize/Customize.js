import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import QRcode from '../../components/QRcode/QRcode'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';

import './Customize.css'

import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Customize extends Component {
    constructor(props) {
        super()
    }
    state = {  }
    render() { 
        const { auth } = this.props
        console.log(auth)

        if (!auth.uid) return <Redirect to='/signin' />

        return (
        <div>
            <Navbar />
            <h2>Customize</h2>

            <div className="outerDiv">

            <TextField
                // id="outlined-full-width"
                // label="Enter in business email"
                style={{ margin: '1rem', width: '80%' }}
                placeholder="Enter name of restaurant"
                // margin="dense"
                size="small"
                // helperText="Enter name of restaurant"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />

            <TextField
                // id="outlined-full-width"
                // label="Enter in business email"
                style={{ margin: '1rem', width: '80%' }}
                placeholder="Enter business email"
                // margin="dense"
                size="small"
                // helperText="Enter in business email"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />

            <TextField
                // id="outlined-full-width"
                // label="Enter in business email"
                style={{ margin: '1rem', width: '80%' }}
                placeholder="Enter manager email"
                // margin="dense"
                size="small"
                // helperText="Enter in manager email"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />

            <br></br><br></br>
            <QRcode />
            <br></br><br></br>

            <Button variant="outlined" color="primary">Export QR Code</Button>

            </div>        

            <div>            
                {/* <Button style={{color: 'green', border: '1px solid green', width: '15%', marginTop: '2rem'}} variant="outlined" color="primary">Save</Button> */}
                <Button style={{width: '20%', marginTop: '2rem', marginBottom: '2rem', color: 'white', backgroundColor: '#0378d8'}} variant="contained" color="primary" size="large" startIcon={<SaveIcon />}>
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