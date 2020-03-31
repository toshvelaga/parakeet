import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { signUp } from '../../../store/actions/actions'
import Header from '../../components/Header/Header'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { Link } from "react-router-dom";

import './SignUp.css'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.props.signUp(this.state)
  }

  render() {
    const { auth, authError } = this.props
    if (auth.uid) return <Redirect to="Feed" />
    return (<>
      <Header />
      <div className="container">
        <form onSubmit={this.handleSubmit} className="SignUp">
          <div style={{display: 'inline-block', marginTop: '2rem'}}>
            <Avatar style={{backgroundColor: '#dd004f', fontSize: '2rem'}}>
              <LockOutlinedIcon />
            </Avatar>
          </div>

          <Typography style={{marginBottom: '2rem'}} component="h1" variant="h5">
            Sign Up
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={this.handleChange}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={this.handleChange}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={this.handleChange}
                variant="outlined"
                required
                fullWidth
                id="businessName"
                label="Business Name"
                name="businessName"
                autoComplete="businessName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={this.handleChange}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={this.handleChange}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>

          </Grid>
          <br></br>
          <Button
            style={{backgroundColor: '#0378d8'}}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
          <Grid container justify="flex">
            <Grid item>
              
              <Link style={{textDecoration: 'none', color: '#0378d8'}} to="/signin">
                <p>Already have an account? Sign in</p>
              </Link>
            </Grid>
          </Grid>

          <div className="error">
            {authError ? <p>{authError}</p> : null}
          </div>
        </form>
      </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);