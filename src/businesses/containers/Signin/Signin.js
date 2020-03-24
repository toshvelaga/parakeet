import React, { Component } from 'react'

class Signin extends Component {
    state = {

    }
    render() {
        return (
            <div className="container">
                <form className="white">
                    <h5>Sign In</h5>
                    <div>
                        <label>Email</label>
                        <input type="email"></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin
