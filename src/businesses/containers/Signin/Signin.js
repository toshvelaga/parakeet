import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn } from '../../../store/actions/actions'
import { Redirect } from 'react-router-dom'
import ParakeetHeader from '../../../consumer/components/ParakeetHeader/ParakeetHeader';

// reused ParakeetHeader component that was created for the consumer side

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
    const { authError, auth } = this.props
    if (auth.uid) return <Redirect to='/Feed' />
    return (<>
      <ParakeetHeader />
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5>Signin</h5>
          <div className="input-field">
            <label>Email</label>
            <input type="email" id="email" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label>Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button>Login</button>
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
