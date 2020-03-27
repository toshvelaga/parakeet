import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn } from '../../../store/actions/actions'
import { Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from "react-router-dom";
import Header from '../../components/Header/Header';

class Signin extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {

    const { authError, auth, classes } = this.props
    if (auth.uid) return <Redirect to='/Feed' />
    return (<>
      <Header />
      <div className="container">

        <form onSubmit={this.handleSubmit} className="white">

          <div style={{display: 'inline-block', marginTop: '2rem'}}>
          <Avatar style={{backgroundColor: '#dd004f', fontSize: '2rem'}}>
            <LockOutlinedIcon />
          </Avatar>
          </div>
        
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <TextField 
            style={{width: '50%', marginTop: '2rem'}}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            notched
            name="email"
            autoComplete="email"
            onChange={this.handleChange}
          />
          <br></br>
          <TextField 
            style={{width: '50%'}}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="password"
            name="password"
            onChange={this.handleChange}
          />
          
          <div className="submit">
            <Button
              style={{width: '50%', marginTop: '1rem', marginBottom: '2rem', color: 'white', backgroundColor: '#0378d8'}}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
            <p>
              <Link style={{textDecoration: 'none', color: '#0378d8'}} to="/SignUp">Don't have an account? Sign Up</Link>
            </p>
            <div>
              { authError ? <p>{authError}</p> : null}
            </div>
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
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
