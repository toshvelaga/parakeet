import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn } from '../../../store/actions/actions'
import { Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// reused ParakeetHeader component that was created for the consumer side
import ParakeetHeader from '../../../consumer/components/ParakeetHeader/ParakeetHeader';

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
      <ParakeetHeader />
      <div className="container">

        <form onSubmit={this.handleSubmit} className="white">
          <h5>Signin</h5>

          <TextField 
            style={{width: '50%'}}
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
              onClick={this.handleSubmit}
              style={{width: '50%'}}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
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
