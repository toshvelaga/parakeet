import React, { Component } from 'react';
import ParakeetHeader from '../../../src/components/ParakeetHeader/ParakeetHeader'
import StarRatingComponent from 'react-star-rating-component';
import './Rating.css'
import axios from 'axios'
import firebaseURL from '../../assets/urls'

import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import color from '@material-ui/core/colors/amber';
import { btnColor } from '../../store/actions/actions'

// documentation: https://www.npmjs.com/package/react-star-rating-component
// Additional docs for half-star implementation: https://github.com/voronianski/react-star-rating-component/blob/master/example/index.js

function mapDispatchToProps(dispatch) {
    return {
        btnColor: (reviewType) => dispatch(btnColor(reviewType))
    };
}

class ConnectedRating extends Component {
    state = { rating: 5 }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

    onSubmit = () => {
        const rating = { rating: this.state.rating }
        axios.post(firebaseURL + '/reviewers.json', rating)
            .then(response => console.log(response))
            .catch(error => console.log(error))

        if (this.state.rating >= 4) {
            this.props.history.push({
                pathname: "/great"
            })
        
        } else {
            
            let reviewType;
            this.props.btnColor(reviewType);
            console.log(reviewType)
            console.log(this.props.btnColor(reviewType)
            )

            this.props.history.push({
                pathname: "/bad",
            })
        }
    }

    render() { 
        const { rating } = this.state;

        return (<>
            <ParakeetHeader />
            <p style={{fontSize: '1.5rem'}}>How was your experience?</p>

            <div>
                <StarRatingComponent className={"Stars"}
                name="rate1" 
                starCount={5}
                value={rating}
                onStarClick={this.onStarClick.bind(this)}
                />
            </div>

            <button style={{marginTop: '2rem'}} onClick={this.onSubmit} className="emailButton">Submit</button>
        </>);
    }
}

const Rating = connect(
    null,
    mapDispatchToProps
  )(ConnectedRating);
 
export default withRouter(Rating);