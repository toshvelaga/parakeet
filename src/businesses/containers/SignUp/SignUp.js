import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { signUp } from '../../../store/actions/actions'
import Header from '../../components/Header/Header'

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
        <form onSubmit={this.handleSubmit} className="white">
          <h5>Sign Up</h5>
          <div className="input-field">
            <label>Email</label>
            <input type="email" id="email" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label>Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label>First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label>Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button>Sign Up</button>
          </div>
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